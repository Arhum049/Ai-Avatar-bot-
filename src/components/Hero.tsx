import React from 'react';
import { ArrowRight, Shield, Zap, Settings } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Tagline */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2 text-blue-600">
              <Settings className="h-6 w-6" />
              <span className="font-semibold">CUSTOM</span>
            </div>
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <div className="flex items-center space-x-2 text-blue-600">
              <Zap className="h-6 w-6" />
              <span className="font-semibold">SCALABLE</span>
            </div>
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <div className="flex items-center space-x-2 text-blue-600">
              <Shield className="h-6 w-6" />
              <span className="font-semibold">SECURE</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Simplifying Business Operations with{' '}
            <span className="text-blue-600">Smart Software Solutions</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business with enterprise-grade software solutions. 
            From custom development to mobile apps, we deliver innovation that drives results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center space-x-2 group">
              <span>Request a Demo</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-semibold">
              Start a Project
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">55+</div>
              <div className="text-gray-600">Expert Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">11+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;