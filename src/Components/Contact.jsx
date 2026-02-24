import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl text-orange-800 font-serif font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-orange-800 mb-6 leading-relaxed">
              Interested in a collaboration, purchasing artwork, or booking a workshop? 
              Feel free to reach out.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12  text-orange-800 bg-gray-100 rounded-full flex items-center justify-center text-accent">
                <Mail />
              </div>
              <div>
                <h4 className="font-bold text-orange-800">Email</h4>
                <p className="text-gray-600">anuradhavikramsoni@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 text-orange-800 rounded-full flex items-center justify-center text-accent">
                <MapPin />
              </div>
              <div>
                <h4 className="font-bold text-orange-800">Studio</h4>
                <p className="text-gray-600">Mithila Art Center, India</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4 bg-gray-50 p-8 rounded-xl shadow-sm">
            <div>
              <label className="block text-sm font-medium text-orange-800 outline-none mb-1">Name</label>
              <input type="text" className="w-full p-3 border border-orange-800 rounded-lg focus:ring-2 focus:ring-accent outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-orange-800 mb-1">Email</label>
              <input type="email" className="w-full p-3 border border-orange-800 rounded-lg focus:ring-2 focus:ring-accent outline-none" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-orange-800 mb-1">Message</label>
              <textarea rows="4" className="w-full p-3 border border-orange-800 rounded-lg focus:ring-2 focus:ring-accent outline-none" placeholder="How can I help you?"></textarea>
            </div>
            <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-accent transition duration-300 font-bold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;