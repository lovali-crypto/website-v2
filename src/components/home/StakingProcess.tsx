import React, { useState, useEffect } from 'react';
import { Wallet, Server, LineChart, CreditCard } from 'lucide-react';

import { useContext } from 'react';
import { DarkModeContext } from '../layout/DarkModeContext';


interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

interface Currency {
  symbol: string;
  name: string;
  apy: number;
  minStake: number;
}

const currencies: Currency[] = [
  { symbol: 'NEAR', name: 'Near Protocol', apy: 9.26, minStake: 0.001 },
  { symbol: 'BCUT', name: 'bitsCrunch', apy: 40, minStake: 100 },
  { symbol: 'SQD', name: 'Subsquid', apy: 15.4, minStake: 1 },
  { symbol: 'ANLOG', name: 'Analog', apy: 5.5, minStake: 1 },
];

const Step: React.FC<StepProps> = ({ number, title, description, icon, isLast = false }) => {
  
  const { darkMode } = useContext(DarkModeContext);
  const backgroundColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const buttonColor = darkMode ? 'bg-gradient-to-r from-emerald-500 to-blue-600' : 'bg-gradient-to-r from-emerald-400 to-blue-500';

  return (
    <div className={`flex ${backgroundColor}`}>
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 rounded-full ${buttonColor} flex items-center justify-center text-white font-bold text-xl z-10`}>
          {number}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-emerald-500 to-blue-600 mt-2"></div>
        )}
      </div>
      <div className="ml-6 pb-12">
        <div className="flex items-center">
          <div className="text-emerald-400 mr-3">
            {icon}
          </div>
          <h3 className={`text-xl font-semibold ${textColor}`}>{title}</h3>
        </div>
        <p className="text-gray-400 mt-2 max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
};

const StakingProcess: React.FC = () => {

  const { darkMode } = useContext(DarkModeContext);
  const backgroundColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const buttonColor = darkMode ? 'bg-gradient-to-r from-emerald-500 to-blue-600' : 'bg-gradient-to-r from-emerald-400 to-blue-500';

  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0]);
  const [amount, setAmount] = useState<string>('');
  const [period, setPeriod] = useState<number>(30);
  const [rewards, setRewards] = useState({
    monthly: 0,
    annual: 0,
  });

  const calculateRewards = (value: number, days: number, apy: number) => {
    const annual = (value * apy) / 100;
    const monthly = annual / 12;
    
    setRewards({
      monthly: monthly,
      annual: annual,
    });
  };

  useEffect(() => {
    const value = parseFloat(amount) || 0;
    calculateRewards(value, period, selectedCurrency.apy);
  }, [amount, period, selectedCurrency]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setAmount(value);
    }
  };

  const steps = [
    {
      number: 1,
      title: 'Set Up Your Wallet',
      description: 'Create and secure your crypto wallet. We recommend hardware wallets for maximum security of your staking assets.',
      icon: <Wallet />,
    },
    {
      number: 2,
      title: 'Buy crypto tokens',
      description: 'Select the right token based on your investment size, risk tolerance, and preferred blockchain networks.',
      icon: <CreditCard />,
    },
    {
      number: 3,
      title: 'Stake on Lovali',
      description: 'Our team set up and configured validator nodes with industry-leading security practices and optimal settings. Check out our blog for detailed guides.',
      icon: <Server />,
    },
    {
      number: 4,
      title: 'Monitor & Earn Rewards',
      description: 'Track your validator performance and rewards through our intuitive dashboard while earning passive income.',
      icon: <LineChart />,
      isLast: true,
    },
  ];

  return (
    <section id="staking" className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Simple <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Staking Process</span>
            </h2>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
              Our streamlined process makes it easy to start staking and earning rewards, even if you're new to crypto validation.
            </p>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Step
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  isLast={step.isLast}
                />
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-600/10 rounded-3xl blur-3xl"></div>
            <div className={`relative ${darkMode ? 'bg-gray-900/80' : 'bg-white'} backdrop-blur-sm border border-gray-800 rounded-3xl p-6 shadow-2xl`}>
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Staking Calculator</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Select Currency</label>
                  <select 
                    className={`w-full ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border border-gray-700 rounded-lg px-4 py-3 ${darkMode ? 'text-white' : 'text-gray-900'} focus:outline-none focus:border-emerald-500`}
                    value={selectedCurrency.symbol}
                    onChange={(e) => setSelectedCurrency(currencies.find(c => c.symbol === e.target.value) || currencies[0])}
                  >
                    {currencies.map((currency) => (
                      <option key={currency.symbol} value={currency.symbol}>
                        {currency.name} ({currency.symbol})
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 text-sm text-gray-500">
                    Minimum stake: {selectedCurrency.minStake} {selectedCurrency.symbol}
                  </p>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Amount to Stake</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={amount}
                      onChange={handleAmountChange}
                      placeholder={`Enter amount (min. ${selectedCurrency.minStake})`}
                      className={`w-full ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border border-gray-700 rounded-lg px-4 py-3 ${darkMode ? 'text-white' : 'text-gray-900'} focus:outline-none focus:border-emerald-500`}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-700 px-2 py-1 rounded text-sm text-gray-300">
                      {selectedCurrency.symbol}
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Staking Period</label>
                  <select 
                    className={`w-full ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border border-gray-700 rounded-lg px-4 py-3 ${darkMode ? 'text-white' : 'text-gray-900'} focus:outline-none focus:border-emerald-500`}
                    value={period}
                    onChange={(e) => setPeriod(parseInt(e.target.value))}
                  >
                    <option value={30}>30 days</option>
                    <option value={90}>90 days</option>
                    <option value={180}>180 days</option>
                    <option value={365}>365 days</option>
                  </select>
                </div>
                
                <div className="pt-4 border-t border-gray-800">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Estimated APY</span>
                    <span className="text-emerald-400 font-medium">{selectedCurrency.apy}%</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Monthly Rewards</span>
                    <span className="text-white font-medium">
                      {rewards.monthly.toFixed(4)} {selectedCurrency.symbol}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Annual Rewards</span>
                    <span className="text-white font-medium">
                      {rewards.annual.toFixed(4)} {selectedCurrency.symbol}
                    </span>
                  </div>
                </div>
                
                {/* Button to initiate staking process */}
                
                <a 
                    href="#contact">
                <button 
                  className={`w-full py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium hover:from-emerald-600 hover:to-blue-700 transition-all ${
                    parseFloat(amount) < selectedCurrency.minStake ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={parseFloat(amount) < selectedCurrency.minStake}
                >
                  Start Staking Now
                </button></a>
                {parseFloat(amount) < selectedCurrency.minStake && amount !== '' && (
                  <p className="text-red-400 text-sm text-center">
                    Minimum stake amount is {selectedCurrency.minStake} {selectedCurrency.symbol}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakingProcess;