import React from 'react';
import { CircleDollarSign, Users, Server, Clock } from 'lucide-react';

import { useContext } from 'react';
import { DarkModeContext } from '../layout/DarkModeContext';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  gradient: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, gradient }) => {

    const { darkMode } = useContext(DarkModeContext);
    const backgroundColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
    const textColor = darkMode ? 'text-white' : 'text-gray-900';
    const buttonColor = darkMode ? 'bg-gradient-to-r from-emerald-500 to-blue-600' : 'bg-gradient-to-r from-emerald-400 to-blue-500';

  return (
    <div className={`${backgroundColor} backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:shadow-lg transition-all`}>
      <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${gradient} ${textColor}`}>
        {icon}
      </div>
      <h3 className={`text-3xl font-bold ${textColor} mb-1`}>{value}</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
};

const Statistics: React.FC = () => {

  const { darkMode } = useContext(DarkModeContext);
  const backgroundColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const buttonColor = darkMode ? 'bg-gradient-to-r from-emerald-500 to-blue-600' : 'bg-gradient-to-r from-emerald-400 to-blue-500';

  const stats = [
    {
      icon: <CircleDollarSign size={24} />,
      value: '$45M+',
      label: 'Total Value Staked',
      gradient: 'bg-gradient-to-r from-emerald-500 to-emerald-700',
    },
    {
      icon: <Users size={24} />,
      value: '5,000+',
      label: 'Active Stakers',
      gradient: 'bg-gradient-to-r from-blue-500 to-blue-700',
    },
    {
      icon: <Server size={24} />,
      value: '15+',
      label: 'Validators Operated',
      gradient: 'bg-gradient-to-r from-purple-500 to-purple-700',
    },
    {
      icon: <Clock size={24} />,
      value: '99.98%',
      label: 'Validator Uptime',
      gradient: 'bg-gradient-to-r from-green-500 to-green-700',
    },
  ];

  return (
    <section id="statistics" className={`${backgroundColor} py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>
            Our <span className={buttonColor + ' bg-clip-text text-transparent'}>Validator Stats</span>
          </h2>
          <p className={`text-gray-400 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Track our performance metrics and see why thousands of crypto holders trust us with their validation needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              gradient={stat.gradient}
            />
          ))}
        </div>
        
        <div className={`${backgroundColor} mt-16 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8`}>
          <h3 className={`text-2xl font-bold ${textColor} mb-6 text-center`}>Supported Networks</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['NEAR.png', 'Streamr.png', 'bitsCrunch.png', 'Subsquid.png', 'Juneo.png', 'Voi.png', 'Analog.png'].map((logo, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={`/images/portfolio/${logo}`} alt={logo.replace('.png', '')} className="w-16 h-16 rounded-full mb-3" />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{logo.replace('.png', '')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;