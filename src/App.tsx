import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Leadership from './components/Leadership';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Services />
      <WhyChooseUs />
      <Leadership />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;