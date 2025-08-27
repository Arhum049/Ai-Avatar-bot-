import React from 'react';
import { CheckCircle, Smartphone, Users, Truck } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'QUALUS',
      icon: CheckCircle,
      description: 'Transforms paper-based quality checks into real-time inspections and audits',
      features: ['Real-time Quality Control', 'Digital Audit Trails', 'Compliance Management', 'Mobile Inspections'],
      color: 'bg-green-500'
    },
    {
      name: 'FOODIISOFT',
      icon: Smartphone,
      description: 'Android-based POS and cloud-compatible food order management suite that works offline',
      features: ['Offline Capability', 'Cloud Sync', 'Order Management', 'POS Integration'],
      color: 'bg-orange-500'
    },
    {
      name: 'Attendance Management System',
      icon: Users,
      description: 'Streamlines and automates attendance tracking for organizations',
      features: ['Automated Tracking', 'Biometric Integration', 'Report Generation', 'Leave Management'],
      color: 'bg-blue-500'
    },
    {
      name: 'Fleet Management System',
      icon: Truck,
      description: 'Optimizes vehicle fleet operations with comprehensive tracking and management',
      features: ['GPS Tracking', 'Fuel Management', 'Maintenance Scheduling', 'Route Optimization'],
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our flagship products that are transforming businesses across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`${product.color} p-3 rounded-lg mr-4`}>
                    <product.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium group-hover:bg-blue-600">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;