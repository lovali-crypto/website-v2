import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../components/layout/DarkModeContext';

const Privacy: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const backgroundColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const buttonColor = darkMode ? 'bg-gradient-to-r from-emerald-500 to-blue-600' : 'bg-gradient-to-r from-emerald-400 to-blue-500';
  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-24`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className={`text-3xl font-bold mb-4 ${textColor}`}>Privacy Policy</h1>
      <p className={`mb-4 ${textColor}`}>
        <div className={`mb-4 ${textColor}`}>
  <p>This Privacy Policy describes how Lovali ("we", "us", or "our") collects, uses, and shares your personal data when you use our website <a href="https://lovali.xyz" className="underline">https://lovali.xyz</a> (the "Service").</p>

  <h2 className={`font-bold mt-4 ${textColor}`}>Information Collection And Use</h2>
  <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

  <h2 className={`font-bold mt-4 ${textColor}`}>Types of Data Collected</h2>
  <p><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information, including but not limited to your email address and name.</p>

  <p><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used. This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, and the pages of our Service that you visit.</p>

  <h2 className={`font-bold mt-4 ${textColor}`}>Use of Data</h2>
  <p>Lovali uses the collected data for various purposes including to provide and maintain our Service, to notify you about changes to our Service, and to provide customer support.</p>

  <h2 className={`font-bold mt-4 ${textColor}`}>Transfer Of Data</h2>
  <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>

  <h2 className={`font-bold mt-4 ${textColor}`}>Security Of Data</h2>
  <p>The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>

  <h2 className={`font-bold mt-4 ${textColor}`}>Service Providers</h2>
  <p>We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used.</p>

  <h2 className={`font-bold mt-4 ${textColor}`}>Changes To This Privacy Policy</h2>
  <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

  <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
</div>
      </p>
    </div>
    </div>
  );
};

export default Privacy;

