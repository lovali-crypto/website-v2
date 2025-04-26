import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../components/layout/DarkModeContext';

const Terms: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const backgroundColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const buttonColor = darkMode ? 'bg-gradient-to-r from-emerald-500 to-blue-600' : 'bg-gradient-to-r from-emerald-400 to-blue-500';
  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-24`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className={`text-3xl font-bold mb-4 ${textColor}`}>Terms of Service</h1>
      <p className={`mb-4 ${textColor}`}>
        <div className={`mb-4 ${textColor}`}>
  <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the <a href="https://lovali.xyz" className="underline">https://lovali.xyz</a> website (the "Service") operated by Lovali ("us", "we", or "our").</p>

  <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>

  <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

  <h2 className={`font-bold mt-4 ${textColor}`}>Intellectual Property</h2>
  <p>The Service and its original content, features and functionality are and will remain the exclusive property of Lovali and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Lovali.</p>

  <h2 className={`font-bold mt-4 ${textColor}`}>Links To Other Web Sites</h2>
  <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Lovali.</p>

  <p>Lovali has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Lovali shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>

  <h2 className={`font-bold mt-4 ${textColor}`}>Termination</h2>
  <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

  <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>

  <h2 className={`font-bold mt-4 ${textColor}`}>Governing Law</h2>
  <p>These Terms shall be governed and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions.</p>

  <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>

  <h2 className={`font-bold mt-4 ${textColor}`}>Changes To Service</h2>
  <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

  <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
</div>
      </p>
    </div>
    </div>
  );
};

export default Terms;

