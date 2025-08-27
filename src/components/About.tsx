import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Focused on delivering solutions that make a real difference to your business operations.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'A growing team of 55+ skilled developers and business strategists working for your success.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Over 200+ successful projects delivered since our founding in 2014.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Partner',
      description: 'We grow with you, providing scalable solutions that evolve with your business needs.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Make The Difference</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Leading Software Development Firm in Mumbai
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2014, Kanishka Software Private Limited has established itself as a 
              premier software development company based in Mumbai. We specialize in creating 
              custom, scalable, and secure software solutions that transform how businesses operate.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With over 200+ projects successfully delivered and a growing team of 55+ expert 
              developers, we combine technical excellence with deep business understanding to 
              deliver solutions that drive real ROI for our clients.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">2014</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">Mumbai</div>
                <div className="text-sm text-gray-600">Headquarters</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200">
                <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;