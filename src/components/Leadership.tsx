import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      name: 'Vinay Vikram Singh',
      position: 'Chief Executive Officer',
      bio: 'Visionary leader with over 15 years of experience in software development and business strategy. Drives innovation and growth at Kanishka Software.',
      expertise: ['Business Strategy', 'Product Vision', 'Team Leadership', 'Client Relations']
    },
    {
      name: 'Snehal Umbarkar',
      position: 'Chief Technology Officer',
      bio: 'Technology expert specializing in enterprise architecture and security solutions. Leads technical innovation and ensures delivery excellence.',
      expertise: ['Enterprise Architecture', 'Security Solutions', 'Technical Leadership', 'Innovation Strategy']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leaders driving innovation and excellence at Kanishka Software
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{leader.position}</p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{leader.bio}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </button>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <Mail className="h-5 w-5" />
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;