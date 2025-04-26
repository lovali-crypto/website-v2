import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import NetworkAnimation from '../ui/NetworkAnimation';
import { useContext } from 'react';
import { DarkModeContext } from '../layout/DarkModeContext';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = () => {
  const { darkMode } = useContext(DarkModeContext);
  const backgroundColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const buttonColor = darkMode ? 'bg-gradient-to-r from-emerald-500 to-blue-600' : 'bg-gradient-to-r from-emerald-400 to-blue-500';
  return (
    <div className={`relative min-h-screen flex flex-col justify-center overflow-hidden ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <NetworkAnimation />
      </div>
      
      {/* Content */}
      <div className={`relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 mb-6 border border-emerald-800/50">
              <Shield size={16} className="mr-2" />
              <span className="text-sm font-medium">Secure Crypto Validation</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Stake & Validate <br />
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                With Confidence
              </span>
            </h1>
            
            <p className={`text-lg mb-8 max-w-lg mx-auto lg:mx-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Join thousands of validators securing blockchain networks and earning rewards. 
              Professional node operation with 99.9% uptime and enhanced security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#staking" 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium hover:from-emerald-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center"
              >
                Start Staking
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#features" 
                className="px-6 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-700/50 transition-all border border-gray-700/50 flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
            
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-gray-400">
                  Trusted by 5000+ stakers worldwide
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <div className={`relative backdrop-blur-sm rounded-3xl p-6 shadow-2xl ${
                darkMode 
                  ? 'bg-gray-900/80 border border-gray-800' 
                  : 'bg-white/90 border border-gray-200'
              }`}>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Validator Status</h3>
                    <span className="px-2 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-xs">
                      Active
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className={`rounded-lg p-4 ${
                      darkMode 
                        ? 'bg-gray-800/50' 
                        : 'bg-gray-100'
                    }`}>
                      <div className="flex justify-between mb-2">
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Uptime</span>
                        <span className="text-emerald-400 font-medium">99.98%</span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${
                        darkMode 
                          ? 'bg-gray-700' 
                          : 'bg-gray-300'
                      }`}>
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full" style={{ width: "99.98%" }}></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`rounded-lg p-4 ${
                        darkMode 
                          ? 'bg-gray-800/50' 
                          : 'bg-gray-100'
                      }`}>
                        <p className={`text-sm mb-1 ${
                          darkMode 
                            ? 'text-gray-400' 
                            : 'text-gray-600'
                        }`}>Total nodes</p>
                        <p className={`text-xl font-bold ${
                          darkMode 
                            ? 'text-white' 
                            : 'text-gray-900'
                        }`}>15+</p>
                      </div>
                      <div className={`rounded-lg p-4 ${
                        darkMode 
                          ? 'bg-gray-800/50' 
                          : 'bg-gray-100'
                      }`}>
                        <p className={`text-sm mb-1 ${
                          darkMode 
                            ? 'text-gray-400' 
                            : 'text-gray-600'
                        }`}>Total Staked</p>
                        <p className={`text-xl font-bold ${
                          darkMode 
                            ? 'text-white' 
                            : 'text-gray-900'
                        }`}>45.2M</p>
                      </div>
                      <div className={`rounded-lg p-4 ${
                        darkMode 
                          ? 'bg-gray-800/50' 
                          : 'bg-gray-100'
                      }`}>
                        <p className={`text-sm mb-1 ${
                          darkMode 
                            ? 'text-gray-400' 
                            : 'text-gray-600'
                        }`}>avg. APY</p>
                        <p className="text-emerald-400 text-xl font-bold">8.2%</p>
                      </div>
                      <div className={`rounded-lg p-4 ${
                        darkMode 
                          ? 'bg-gray-800/50' 
                          : 'bg-gray-100'
                      }`}>
                        <p className={`text-sm mb-1 ${
                          darkMode 
                            ? 'text-gray-400' 
                            : 'text-gray-600'
                        }`}>Avg. Reward</p>
                        <p className={`text-xl font-bold ${
                          darkMode 
                            ? 'text-white' 
                            : 'text-gray-900'
                        }`}>0.42 ETH</p>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href="#staking" 
                    className="block w-full py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium hover:from-emerald-600 hover:to-blue-700 transition-all text-center"
                  >
                    Start Staking Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className={`text-sm mb-2 ${
          darkMode 
            ? 'text-gray-400' 
            : 'text-gray-600'
        }`}>Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className={`w-1 h-2 bg-${darkMode ? 'white' : 'gray-400'} rounded-full mt-2 animate-bounce`}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
