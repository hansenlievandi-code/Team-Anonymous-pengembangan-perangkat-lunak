import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaCalendarAlt, FaFileMedical, FaHeartbeat } from 'react-icons/fa';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [healthRecords, setHealthRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));
    fetchAppointments();
    fetchHealthRecords();
  }, []);

  const fetchAppointments = async () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    try {
      const response = await axios.get(`http://localhost:5000/api/appointments/user/${userData.id}`);
      setAppointments(response.data);
    } catch (error) {
      console.error('Failed to fetch appointments');
    }
  };

  const fetchHealthRecords = async () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    try {
      const response = await axios.get(`http://localhost:5000/api/health-records/user/${userData.id}`);
      setHealthRecords(response.data);
    } catch (error) {
      console.error('Failed to fetch health records');
    }
  };

  if (!user) return null;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome back, {user.name}!</h1>
          <p className="text-gray-600">Here's your health dashboard</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <FaUser className="text-blue-600 text-3xl" />
              <span className="text-2xl font-bold text-gray-800">Profile</span>
            </div>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
            <button className="mt-4 text-blue-600 hover:text-blue-700">Edit Profile →</button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <FaCalendarAlt className="text-blue-600 text-3xl" />
              <span className="text-2xl font-bold text-gray-800">{appointments.length}</span>
            </div>
            <p className="text-gray-600">Total Appointments</p>
            <button className="mt-4 text-blue-600 hover:text-blue-700">View All →</button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <FaFileMedical className="text-blue-600 text-3xl" />
              <span className="text-2xl font-bold text-gray-800">{healthRecords.length}</span>
            </div>
            <p className="text-gray-600">Health Records</p>
            <button className="mt-4 text-blue-600 hover:text-blue-700">Manage →</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Appointments</h2>
            {appointments.slice(0, 3).map(appointment => (
              <div key={appointment.id} className="border-b py-3">
                <p className="font-medium">{appointment.doctor_name}</p>
                <p className="text-sm text-gray-600">{appointment.specialization}</p>
                <p className="text-sm text-gray-500">{appointment.appointment_date}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Health Insights</h2>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <FaHeartbeat className="text-green-600 mr-2" />
                <span>Overall Health Score</span>
              </div>
              <span className="text-2xl font-bold text-green-600">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-4">You're doing great! Keep maintaining your healthy lifestyle.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;