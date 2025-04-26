import React from 'react';
import { Shield, Clock, Server, Award, Zap, Lock } from 'lucide-react';


import { useContext } from 'react';
import { DarkModeContext } from '../layout/DarkModeContext';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  
  const { darkMode } = useContext(DarkModeContext);
  const backgroundColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const buttonColor = darkMode ? 'bg-gradient-to-r from-emerald-500 to-blue-600' : 'bg-gradient-to-r from-emerald-400 to-blue-500';

  return (
    <div className={`${backgroundColor} backdrop-blur-sm border rounded-xl p-6 hover:border-emerald-500/50 transition-all hover:shadow-lg group`}>
      <div className={`rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4 ${buttonColor} group-hover:bg-emerald-600 group-hover:text-white transition-all`}>
        {icon}
      </div>
      <h3 className={`text-xl font-semibold ${textColor} mb-2`}>{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  
  const { darkMode } = useContext(DarkModeContext);
  const backgroundColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';

  const features = [
    {
      icon: <Shield />,
      title: 'Security Focused',
      description: 'Enterprise-grade security with multi-layered protection for your assets. Regular security audits and best practices implementation.',
    },
    {
      icon: <Clock />,
      title: '99.9% Uptime',
      description: 'High-availability infrastructure ensures your validators stay online, maximizing your staking rewards and network participation.',
    },
    {
      icon: <Server />,
      title: 'Professional Node Operation',
      description: 'Our team of experts manages all technical aspects, from setup to maintenance, ensuring optimal performance.',
    },
    {
      icon: <Award />,
      title: 'Maximize Rewards',
      description: 'Sophisticated validation strategies to maximize your staking rewards while maintaining network security and integrity.',
    },
    {
      icon: <Zap />,
      title: 'Fast Implementation',
      description: 'Quick and hassle-free onboarding process with step-by-step guidance to get your validator up and running.',
    },
    {
      icon: <Lock />,
      title: 'Non-Custodial',
      description: 'Your assets remain under your control. We never take custody of your funds, ensuring maximum security and trust.',
    },
  ];

  return (
    <section id="features" className={`${backgroundColor} py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>
            Why Choose <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Lovali</span>
          </h2>
          <p className={`${textColor} max-w-2xl mx-auto`}>
            Our validation services are designed to provide maximum security, reliability, and returns for your crypto assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;