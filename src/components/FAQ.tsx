import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does Kanishka Software offer?',
      answer: 'We offer comprehensive software development services including custom software development, mobile app development, web development, UI/UX design, API development, data analytics, business intelligence, and software consulting. Our expertise spans across various technologies and industries.'
    },
    {
      question: 'How is Kanishka different from other providers?',
      answer: 'We combine technical excellence with deep business understanding. Our team of 55+ experts includes both technologists and business strategists who deliver ROI-focused solutions. We pride ourselves on on-time, on-budget delivery and have successfully completed 200+ projects since 2014.'
    },
    {
      question: 'Do your solutions integrate with existing systems?',
      answer: 'Yes, absolutely. We specialize in creating solutions that seamlessly integrate with your existing business systems. Our team has extensive experience with API development, database integration, and enterprise system connectivity to ensure smooth operations.'
    },
    {
      question: 'Which industries do you serve?',
      answer: 'We serve a wide range of industries including manufacturing, food service, healthcare, retail, logistics, education, and more. Our solutions like QUALUS for quality management and FOODIISOFT for restaurant operations demonstrate our industry-specific expertise.'
    },
    {
      question: 'How secure are your solutions?',
      answer: 'Security is paramount in all our solutions. We implement enterprise-grade security measures including data encryption, secure authentication, access controls, and compliance with industry standards. Our CTO Snehal Umbarkar specializes in Zero Trust security architecture.'
    },
    {
      question: 'What size of companies do you work with?',
      answer: 'We work with businesses of all sizes, from startups to large enterprises. Our scalable solutions can grow with your business, whether you\'re a small business looking to digitize operations or a large corporation needing complex enterprise solutions.'
    },
    {
      question: 'Can your software work offline?',
      answer: 'Yes, many of our solutions are designed to work offline. For example, our FOODIISOFT system is specifically built to function offline and sync with the cloud when connectivity is restored, ensuring uninterrupted business operations.'
    },
    {
      question: 'Do you provide on-site support and training?',
      answer: 'Yes, we provide comprehensive on-site support and training services. Our team ensures smooth implementation, user training, and ongoing support to maximize the value of your software investment. We also offer 24/7 technical support for critical systems.'
    },
    {
      question: 'How can I get a demo or speak to a consultant?',
      answer: 'You can request a demo by clicking the "Request a Demo" button on our website, calling us at +91-8652340409, or emailing sales@ksoftpl.com. Our consultants will understand your requirements and provide a customized demonstration of relevant solutions.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and solutions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;