import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSpecialization, setSelectedSpecialization] = useState('');

  const specializations = ['Cardiologist', 'Neurologist', 'Pediatrician', 'Dermatologist', 'Psychiatrist', 'Orthopedist'];

  useEffect(() => {
    fetchDoctors();
  }, [selectedSpecialization]);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const params = selectedSpecialization ? { specialization: selectedSpecialization } : {};
      const response = await axios.get('http://localhost:5000/api/doctors', { params });
      setDoctors(response.data);
    } catch (error) {
      toast.error('Failed to fetch doctors');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Expert Doctors</h1>
        <p className="text-gray-600 text-lg">Meet our team of experienced healthcare professionals</p>
      </div>

      <div className="mb-8 flex justify-center">
        <select
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Specializations</option>
          {specializations.map(spec => (
            <option key={spec} value={spec}>{spec}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map(doctor => (
            <div key={doctor.id} className="card overflow-hidden">
              <img 
                src={doctor.image_url || 'https://via.placeholder.com/400x300'} 
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{doctor.specialization}</p>
                <p className="text-gray-600 mb-2">Experience: {doctor.experience} years</p>
                <p className="text-gray-600 mb-2">Fee: Rp {doctor.fee?.toLocaleString()}</p>
                <p className="text-gray-600 mb-4">Available: {doctor.available_days}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-600">{doctor.rating}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Doctors;