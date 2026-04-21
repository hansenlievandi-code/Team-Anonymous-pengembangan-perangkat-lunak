import React from 'react';
import { FaVideo, FaFileMedical, FaCalendarCheck, FaHeartbeat, FaStethoscope, FaAmbulance } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaVideo className="text-5xl text-blue-600" />,
      title: "Online Consultation",
      description: "Get medical advice from certified doctors through secure video calls from anywhere.",
      features: ["24/7 availability", "Prescription delivery", "Follow-up consultations"]
    },
    {
      icon: <FaFileMedical className="text-5xl text-blue-600" />,
      title: "Health Records",
      description: "Securely store and access your medical history, test results, and prescriptions.",
      features: ["Blockchain secured", "Easy sharing", "Lifetime access"]
    },
    {
      icon: <FaCalendarCheck className="text-5xl text-blue-600" />,
      title: "Appointment Booking",
      description: "Book appointments with specialist doctors at your preferred time and date.",
      features: ["Real-time availability", "Reminders", "Easy rescheduling"]
    },
    {
      icon: <FaHeartbeat className="text-5xl text-blue-600" />,
      title: "Health Monitoring",
      description: "Track vital signs and health metrics with our advanced monitoring system.",
      features: ["Real-time tracking", "Health insights", "Emergency alerts"]
    },
    {
      icon: <FaStethoscope className="text-5xl text-blue-600" />,
      title: "Specialist Consultation",
      description: "Access top specialists across various medical fields for expert advice.",
      features: ["Multiple specialties", "Second opinions", "Treatment plans"]
    },
    {
      icon: <FaAmbulance className="text-5xl text-blue-600" />,
      title: "Emergency Services",
      description: "Quick access to emergency medical services and ambulance coordination.",
      features: ["24/7 support", "Location tracking", "Hospital coordination"]
    }
  ];

  return (
    <div className="py-12">
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Comprehensive Services</h1>
          <p className="text-xl">Quality healthcare solutions tailored to your needs</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card p-8 hover:transform hover:scale-105 transition duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;