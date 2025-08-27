import React from 'react';
import { Clock, Target, Users, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const strengths = [
    {
      icon: Clock,
      title: 'On-Time, On-Budget Delivery',
      description: 'We pride ourselves on delivering high-quality enterprise solutions exactly when promised, within the agreed budget.',
      color: 'bg-blue-500'
    },
    {
      icon: Target,
      title: 'ROI-Focused Solutions',
      description: 'Every solution we build is designed with your return on investment in mind, ensuring measurable business value.',
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our combined team of technologists and business strategists brings deep expertise to every project.',
      color: 'bg-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Tailored Approach',
      description: 'We don\'t believe in one-size-fits-all. Every solution is customized to your specific business needs.',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Kanishka Software?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that drive real results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className={`${strength.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <strength.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{strength.title}</h3>
              <p className="text-gray-600 leading-relaxed">{strength.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;