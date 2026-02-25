import React, { useState } from "react";


const HealthcareLogin = () => {
  const [loginMethod, setLoginMethod] = useState("password"); // "password" or "otp"
  const [emailMobile, setEmailMobile] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailMobile.trim()) {
      alert("Please enter email or mobile number.");
      return;
    }
    if (loginMethod === "password") {
      if (!password.trim()) {
        alert("Password cannot be empty.");
        return;
      }
      alert(`Password login demo\nIdentifier: ${emailMobile}\nPassword: ${password}`);
    } else {
      if (!otp.trim()) {
        alert("Please enter the OTP code.");
        return;
      }
      alert(`OTP login demo\nIdentifier: ${emailMobile}\nOTP: ${otp}`);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (loginMethod === "password") {
      alert("Password reset link would be sent (simulated).");
    } else {
      alert("For OTP login, please request a new OTP or contact support.");
    }
  };

  const handleRequestOtp = () => {
    if (loginMethod === "otp") {
      setOtp("123456"); // simulate OTP fill
      if (!emailMobile.trim()) {
        setEmailMobile("demo@health.com");
      }
    } else {
      alert("Please switch to Email OTP mode first.");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed relative flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(244, 239, 230, 0.92), rgba(244, 239, 230, 0.92)), url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1600&q=80')`
      }}
    >
      {/* Wave SVG - bottom */}
      <svg className="absolute bottom-0 left-0 w-full opacity-18 z-0" viewBox="0 0 1440 320">
        <path fill="#198754" d="M0,192L60,176C120,160,240,128,360,122.7C480,117,600,139,720,154.7C840,171,960,181,1080,170.7C1200,160,1320,128,1380,112L1440,96V320H0Z" />
      </svg>

      {/* Main container */}
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 z-10 relative">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f5132] mb-5 leading-tight">
            Your Health Journey Continues Here
          </h1>
          <p className="text-[#4d5f56] text-base md:text-lg mb-6 max-w-[520px] mx-auto lg:mx-0">
            Secure access to consultations, prescriptions, medical reports, and doctor communication — anytime, anywhere. Experience trusted digital healthcare.
          </p>
          <ul className="text-[#0f5132] font-medium space-y-3">
            <li>✔ 100% Secure & Encrypted</li>
            <li>✔ Verified Specialist Doctors</li>
            <li>✔ 24/7 Online Consultation</li>
          </ul>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-[430px] bg-white/96 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-center text-[#0f5132] mb-2">Secure Account Login</h2>
          <p className="text-sm text-center text-gray-500 mb-6">Choose your preferred access method</p>

          {/* Toggle */}
          <div className="flex bg-gray-200 rounded-full p-1 mb-6">
            <button
              className={`flex-1 py-2.5 text-sm font-medium rounded-full transition-colors ${loginMethod === "password" ? "bg-[#198754] text-white" : "text-gray-700"}`}
              onClick={() => setLoginMethod("password")}
            >
              Password
            </button>
            <button
              className={`flex-1 py-2.5 text-sm font-medium rounded-full transition-colors ${loginMethod === "otp" ? "bg-[#198754] text-white" : "text-gray-700"}`}
              onClick={() => setLoginMethod("otp")}
            >
              Email OTP
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email / Mobile - always visible */}
            <div className="mb-5">
              <label className="block text-sm font-medium mb-1.5 text-gray-700">Email Address or Mobile Number</label>
              <input
                type="text"
                value={emailMobile}
                onChange={(e) => setEmailMobile(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754] transition"
                required
              />
            </div>

            {/* Password field - visible only in password mode */}
            {loginMethod === "password" && (
              <div className="mb-5">
                <label className="block text-sm font-medium mb-1.5 text-gray-700">Account Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754] transition"
                  required
                />
              </div>
            )}

            {/* OTP field - visible only in otp mode */}
            {loginMethod === "otp" && (
              <div className="mb-5">
                <label className="block text-sm font-medium mb-1.5 text-gray-700">One-Time Password (OTP)</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit code"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754] transition"
                  required
                />
                <span
                  onClick={handleRequestOtp}
                  className="text-xs text-[#0f5132] italic mt-1 inline-block cursor-pointer hover:underline"
                >
                  📧 Click to request OTP (simulated)
                </span>
              </div>
            )}

            {/* Remember me & Forgot password row */}
            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 accent-[#198754]"
                />
                <span className="text-gray-700">Remember Me</span>
              </label>
              <a
                href="#"
                onClick={handleForgotPassword}
                className="text-sm font-medium text-[#198754] hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-lg font-semibold text-white bg-gradient-to-r from-[#0f5132] to-[#198754] hover:opacity-90 transition mb-3"
            >
              Login to Dashboard
            </button>

            <button
              type="button"
              onClick={() => alert("Redirect to new account creation (demo).")}
              className="w-full py-3.5 rounded-lg font-semibold border-2 border-[#0f5132] text-[#0f5132] hover:bg-[#0f5132] hover:text-white transition"
            >
              Create New Account
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
            Your information is protected with industry-standard encryption and handled in accordance with healthcare data protection regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

