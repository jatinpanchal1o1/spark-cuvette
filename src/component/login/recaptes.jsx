import React from 'react';
import { Link } from "react-router-dom";

function RecaptchaNotice({ className }) {
  return (
    <div className={`flex flex-wrap gap-0.5 self-start text-xs text-center text-stone-500 ${className}`}>
      <p>This site is protected by reCAPTCHA and the</p>
      <Link to="https://policies.google.com/privacy" className="underline">Google Privacy Policy</Link>
      <p>and</p>
      <Link to="https://policies.google.com/terms" className="underline">Terms of Service</Link>
      <p>apply.</p>
    </div>
  );
}

export default RecaptchaNotice;