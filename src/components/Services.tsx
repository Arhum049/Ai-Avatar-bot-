import React from 'react';
import { Code, Smartphone, Globe, Database, BarChart3, Cog } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Software Solutions',
      icon: Code,
      color: 'bg-blue-500',
      services: [
        'Customize Software Development',
        'Software Consulting & Development',
        'B2B Website Development',
        'Software Outsourcing'
      ]
    },
    {
      title: 'Management & Support Services',
      icon: Cog,
      color: 'bg-green-500',
      services: [
        'Data Analytics & Business Intelligence',
        'System Integration',
        'Technical Support',
        'Maintenance Services'
      ]
    },
    {
      title: 'Mobile App Development',
      icon: Smartphone,
      color: 'bg-purple-500',
      services: [
        'Flutter Development',
        'Native App Development',
        'Business Applications',
        'eCommerce Apps'
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: 'bg-orange-500',
      services: [
        'Static & Dynamic Websites',
        'Web Application Development',
        'Responsive Design',
        'UI/UX Design'
      ]
    },
    {
      title: 'Custom Solutions',
      icon: Database,
      color: 'bg-red-500',
      services: [
        'API Development',
        'Database Design',
        'Cloud Solutions',
        'Enterprise Integration'
      ]
    },
    {
      title: 'Analytics & Intelligence',
      icon: BarChart3,
      color: 'bg-indigo-500',
      services: [
        'Business Intelligence',
        'Data Visualization',
        'Reporting Solutions',
        'Performance Analytics'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Offered</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology services to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className={`${category.color} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-200`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{service}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 flex items-center group">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;