
import React from 'react';
import { Shield, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { DarkModeContext } from '../layout/DarkModeContext';

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} pt-16 pb-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Lovali
              </span>
            </div>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
              Secure and reliable crypto validation services. Stake with confidence and earn rewards while supporting blockchain networks.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/LovaliCrypto" target='_blank' className={`${darkMode ? 'text-gray-400 hover:text-emerald-500' : 'text-gray-500 hover:text-emerald-600'} transition-colors`}>
                <Twitter size={20} />
              </a>
              <a href="https://github.com/lovali-crypto/" target='_blank' className={`${darkMode ? 'text-gray-400 hover:text-emerald-500' : 'text-gray-500 hover:text-emerald-600'} transition-colors`}>
                <Github size={20} />
              </a>
              <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-emerald-500' : 'text-gray-500 hover:text-emerald-600'} transition-colors`}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@lovali.xyz" target='_blank' className={`${darkMode ? 'text-gray-400 hover:text-emerald-500' : 'text-gray-500 hover:text-emerald-600'} transition-colors`}>
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Staking</a></li>
              <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Validation</a></li>
              <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Node Operations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Blog</Link></li>
              <li><Link to="/blog" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Tutorials</Link></li>
              <li><a href="https://status.lovali.xyz/status/lovali" target='_blank' className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Service Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Have questions or need assistance?</p>
            <a 
              href="mailto:contact@lovali.xyz" 
              className="inline-block mt-2 text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              contact@lovali.xyz
            </a>
            <div className="mt-6">
              <a 
                href="#contact" 
                className="px-4 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-emerald-500/20"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
              © {new Date().getFullYear()} Lovali. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><Link to="/privacy" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Privacy Policy</Link></li>
                <li><Link to="/terms" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Terms of Service</Link></li>
                <li><Link to="/cookie" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-sm`}>Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
