import React from 'react';
import { Link } from 'react-router-dom';
import { FaVideo, FaFileMedical, FaCalendarCheck, FaHeartbeat } from 'react-icons/fa';

const Home = () => {
  const services = [
    {
      icon: <FaVideo className="text-4xl text-blue-600" />,
      title: "Online Consultation",
      description: "Connect with doctors via video call from the comfort of your home."
    },
    {
      icon: <FaFileMedical className="text-4xl text-blue-600" />,
      title: "Health Records",
      description: "Access and manage your medical record securely online."
    },
    {
      icon: <FaCalendarCheck className="text-4xl text-blue-600" />,
      title: "Appointment Booking",
      description: "Schedule your appointments quickly and easily."
    },
    {
      icon: <FaHeartbeat className="text-4xl text-blue-600" />,
      title: "Health Monitoring",
      description: "Track your health stats and monitor your progress."
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">
              Your Health,<br />Our Priority
            </h1>
            <p className="text-xl mb-8">
              Providing smart and simple digital healthcare services for the good of your health.
            </p>
            <Link to="/appointments" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h2>
            <p className="text-gray-600">Quality Care, Anytime, Anywhere</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">About our S-Health by Anonymous mission</h2>
          <p className="text-xl mb-8">This service was created to make it easier to get a doctor's consultation on time before it's too late</p>
          <p className="text-xl mb-8">By providing fast and easy healthcare services also helping to cure a world</p>
          <p className="text-xl mb-8">Thousands of patients are satisfied with using our S-Health service</p>
        </div>
      </section>
    </div>
  );
};

export default Home;