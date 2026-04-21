import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

const Appointments = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [userAppointments, setUserAppointments] = useState([]);

  useEffect(() => {
    fetchDoctors();
    fetchUserAppointments();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/doctors');
      setDoctors(response.data);
    } catch (error) {
      toast.error('Failed to fetch doctors');
    }
  };

  const fetchUserAppointments = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return;

    try {
      const response = await axios.get(`http://localhost:5000/api/appointments/user/${user.id}`);
      setUserAppointments(response.data);
    } catch (error) {
      console.error('Failed to fetch appointments');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user) {
      toast.error('Please login first');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/appointments', {
        user_id: user.id,
        doctor_id: selectedDoctor,
        appointment_date: appointmentDate,
        appointment_time: '10:00',
        symptoms: symptoms,
        notes: ''
      });
      toast.success('Appointment booked successfully!');
      fetchUserAppointments();
      setSelectedDoctor('');
      setAppointmentDate('');
      setSymptoms('');
    } catch (error) {
      toast.error('Failed to book appointment');
    } finally {
      setLoading(false);
    }
  };

  const cancelAppointment = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/appointments/${id}`);
      toast.success('Appointment cancelled');
      fetchUserAppointments();
    } catch (error) {
      toast.error('Failed to cancel appointment');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Book an Appointment</h1>
        <p className="text-gray-600 text-lg">Schedule your consultation with our expert doctors</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-8">
          <h2 className="text-2xl font-semibold mb-6">New Appointment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Select Doctor</label>
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Choose a doctor</option>
                {doctors.map(doctor => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.specialization}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Appointment Date</label>
              <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Symptoms</label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your symptoms..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary disabled:opacity-50"
            >
              {loading ? 'Booking...' : 'Book Appointment'}
            </button>
          </form>
        </div>

        <div className="card p-8">
          <h2 className="text-2xl font-semibold mb-6">Your Appointments</h2>
          {userAppointments.length === 0 ? (
            <p className="text-gray-600 text-center py-8">No appointments found</p>
          ) : (
            <div className="space-y-4">
              {userAppointments.map(appointment => (
                <div key={appointment.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{appointment.doctor_name}</h3>
                      <p className="text-gray-600">{appointment.specialization}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Date: {format(new Date(appointment.appointment_date), 'PPP')}
                      </p>
                      <p className="text-sm text-gray-500">Status: {appointment.status}</p>
                    </div>
                    {appointment.status === 'pending' && (
                      <button
                        onClick={() => cancelAppointment(appointment.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;