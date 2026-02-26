import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    dob: "",
    gender: "",
    name: ""
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // ================= TIMER =================
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const calculateAge = (dob) => {
    const birth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ================= REQUEST OTP =================
  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setError("");

    if (!acceptedTerms) {
      setError("Please accept Terms & Privacy Policy.");
      return;
    }

    const age = calculateAge(formData.dob);
    if (age <= 0 || isNaN(age)) {
      setError("Invalid Date of Birth.");
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:8081/api/auth/register/request-otp", {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        gender: formData.gender.toUpperCase(),
        age: age
      });

      setShowOtp(true);
      setTimer(30);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  // ================= VERIFY OTP =================
  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      setError("OTP must be 6 digits.");
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:8081/api/auth/register/verify-otp", {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        gender: formData.gender.toUpperCase(),
        age: calculateAge(formData.dob),
        password: formData.password,
        confirmPassword: formData.password,
        otp: otp
      });

      setShowSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid or expired OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(244, 239, 230, 0.92), rgba(244, 239, 230, 0.92)), url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1600&q=80')`
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 z-10 relative">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f5132] mb-5 leading-tight">
            Start Your Health Journey Today
          </h1>
          <p className="text-[#4d5f56] text-base md:text-lg mb-6 max-w-[520px] mx-auto lg:mx-0">
            Join thousands of patients who trust us for their healthcare needs. 
            Create your account to access consultations, prescriptions, and more.
          </p>
          <ul className="text-[#0f5132] font-medium space-y-3">
            <li>✔ 100% Secure & Encrypted</li>
            <li>✔ Verified Specialist Doctors</li>
            <li>✔ Free Health Records Storage</li>
            <li>✔ 24/7 Online Consultation</li>
          </ul>
        </div>

        {/* Signup Card */}
        <div className="w-full max-w-[430px] bg-white/96 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-center text-[#0f5132] mb-2">
            Create New Account
          </h2>
          <p className="text-sm text-center text-gray-500 mb-6">
            Fill in your details to get started
          </p>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleRequestOtp}>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1.5 text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754]"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1.5 text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754]"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1.5 text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754]"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1.5 text-gray-700">
                Create Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754]"
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1.5 text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754]"
                required
              />
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1.5 text-gray-700">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754]"
                required
              >
                <option value="">Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
            </div>

            {/* Terms Checkbox */}
            <div className="mb-6">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="w-4 h-4 accent-[#198754]"
                />
                <span className="text-gray-700">
                  I agree to the Terms & Privacy Policy
                </span>
              </label>
            </div>

            {!showOtp ? (
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-lg font-semibold text-white bg-gradient-to-r from-[#0f5132] to-[#198754] hover:opacity-90 transition mb-3 disabled:opacity-50"
              >
                {loading ? "Processing..." : "Create Account"}
              </button>
            ) : (
              <div className="space-y-4">
                {/* OTP Input */}
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    maxLength="6"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754]"
                  />
                </div>

                {/* Timer */}
                <div className="text-sm text-[#0f5132] text-center">
                  {timer > 0 ? `Resend OTP in ${timer}s` : "You can request OTP again"}
                </div>

                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={loading}
                  className="w-full py-3.5 rounded-lg font-semibold text-white bg-gradient-to-r from-[#0f5132] to-[#198754] hover:opacity-90 transition disabled:opacity-50"
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </div>
            )}

            {/* Login Link */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">Already have an account? </span>
              <button
                type="button"
                onClick={handleLogin}
                className="text-sm font-semibold text-[#0f5132] hover:underline"
              >
                Login here
              </button>
            </div>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
            Your information is protected with industry-standard encryption.
          </p>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/45 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl w-80 text-center shadow-2xl">
            <h3 className="text-xl font-bold text-[#0f5132] mb-4">
              Registration Successful! 🎉
            </h3>
            <button
              onClick={() => navigate("/booking")}
              className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#0f5132] to-[#198754] hover:opacity-90 transition"
            >
              Continue to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;