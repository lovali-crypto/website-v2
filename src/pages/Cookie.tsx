import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../components/layout/DarkModeContext';

const CookiePolicy: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const backgroundColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const buttonColor = darkMode ? 'bg-gradient-to-r from-emerald-500 to-blue-600' : 'bg-gradient-to-r from-emerald-400 to-blue-500';
  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-24`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className={`text-3xl font-bold mb-4 ${textColor}`}>Cookie Policy</h1>
      <p className={`mb-4 ${textColor}`}>
        This Cookie Policy explains how our website uses cookies and similar technologies to
        recognize you when you visit our website. It explains what these technologies are and why
        we use them, as well as your rights to control our use of them.
      </p>
      <h2 className={`text-2xl font-bold mb-2 ${textColor}`}>What are cookies?</h2>
      <p className={`mb-4 ${textColor}`}>
        Cookies are small data files that are placed on your computer or mobile device when you
        visit a website. Cookies are widely used by website owners to make their websites work,
        or to work more efficiently, as well as to provide reporting information.
      </p>
      <h2 className={`text-2xl font-bold mb-2 ${textColor}`}>Why do we use cookies?</h2>
      <p className={`mb-4 ${textColor}`}>
        We use first and third-party cookies for several reasons. Some cookies are required for
        technical reasons in order for our website to operate, and we refer to these as
        "essential" cookies. Other cookies also enable us to track and target the interests of
        our users to enhance the experience on our website.
      </p>
      <h2 className={`text-2xl font-bold mb-2 ${textColor}`}>Your choices regarding cookies</h2>
      <p className={`mb-4 ${textColor}`}>
        You have the right to decide whether to accept or reject cookies. You can set or amend
        your web browser controls to accept or refuse cookies. If you choose to reject cookies,
        you may still use our website though your access to some functionality and areas of our
        website may be restricted.
      </p>
    </div>
    </div>
  );
};

export default CookiePolicy;

