import React from 'react';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';

import { useContext } from 'react';
import { DarkModeContext } from '../layout/DarkModeContext';

const CTA = () => {
  const { darkMode } = useContext(DarkModeContext);
  const backgroundColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const buttonColor = darkMode ? 'bg-gradient-to-r from-emerald-500 to-blue-600' : 'bg-gradient-to-r from-emerald-400 to-blue-500';
  return (
    <section id="contact" className={`${backgroundColor} py-24 relative overflow-hidden`}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-96">
        <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-blue-600/20 blur-3xl rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-6`}>
              Ready to Start <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Delegating?</span>
            </h2>
            <p className={`${textColor} mb-8 text-lg`}>
              Join thousands of satisfied stakers who trust our validation services. 
              Get in touch with our team today to start earning rewards while 
              supporting blockchain networks.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-emerald-900/30 rounded-full p-2 text-emerald-400 mr-4 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className={`${textColor} font-medium mb-1`}>Email Us</h3>
                  <p className={`${textColor}`}>
                    Send us an email at <a href="mailto:info@lovali.xyz" className="text-emerald-400 hover:text-emerald-300 transition-colors">info@lovali.xyz</a> and we'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-emerald-900/30 rounded-full p-2 text-emerald-400 mr-4 mt-1">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className={`${textColor} font-medium mb-1`}>Live Chat</h3>
                  <p className={`${textColor}`}>
                    Use our live chat support for immediate assistance with your staking needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 
          <div className={`${backgroundColor} bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-xl`}>
            <h3 className={`${textColor} text-xl font-semibold mb-6`}>Get Started Today</h3>
            
            <form className="space-y-4">
              <div>
                <label className={`block ${textColor} mb-2`} htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Your name" 
                  className= {`${backgroundColor} w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 ${textColor} focus:outline-none focus:border-emerald-500`}
                />
              </div>
              
              <div>
                <label className={`block ${textColor} mb-2`} htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="your@email.com" 
                  className= {`${backgroundColor} w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 ${textColor} focus:outline-none focus:border-emerald-500`}
                />
              </div>
              
              <div>
                <label className={`block ${textColor} mb-2`} htmlFor="stake">Amount to Stake</label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="stake"
                    placeholder="Enter amount" 
                    className= {`${backgroundColor} w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 ${textColor} focus:outline-none focus:border-emerald-500`}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-700 px-2 py-1 rounded text-sm ${textColor}">
                    ETH
                  </div>
                </div>
              </div>
              
              <div>
                <label className={`block ${textColor} mb-2`} htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  rows={4} 
                  placeholder="Tell us about your staking goals" 
                  className= {`${backgroundColor} w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 ${textColor} focus:outline-none focus:border-emerald-500`}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`w-full py-3 mt-2 rounded-lg ${buttonColor} text-white font-medium hover:from-emerald-600 hover:to-blue-700 transition-all flex items-center justify-center`}
              >
                Submit Request
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div> 
          */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
