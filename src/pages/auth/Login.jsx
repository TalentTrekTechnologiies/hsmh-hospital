import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const API = "http://localhost:8081/api/auth";

  const [loginMethod, setLoginMethod] = useState("password");
  const [emailMobile, setEmailMobile] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  
  const [rememberMe, setRememberMe] = useState(false);
  
  // Forgot Password States
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [resetOtp, setResetOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetStep, setResetStep] = useState(1); // 1: request OTP, 2: verify OTP & reset password
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailMobile.trim()) {
      alert("Please enter email or mobile number.");
      return;
    }

    try {
      setLoading(true);

      // PASSWORD LOGIN
      if (loginMethod === "password") {

        if (!password.trim()) {
          alert("Password cannot be empty.");
          setLoading(false);
          return;
        }

        const res = await fetch(`${API}/login/password`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            phoneOrEmail: emailMobile,
            password: password
          })
        });

        const data = await res.json();

        if (!res.ok) {
          alert(data.message);
          setLoading(false);
          return;
        }

        if (rememberMe) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("patientId", data.patientId);
          localStorage.setItem("user", JSON.stringify(data));
        } else {
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("user", JSON.stringify(data));
        }

        alert("Login Successful ✅");
        navigate("/");

      } 
      
      // OTP LOGIN
      else {

        if (!otp.trim()) {
          alert("Please enter OTP.");
          setLoading(false);
          return;
        }

        const res = await fetch(`${API}/login/verify-otp`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: emailMobile,
            otp: otp
          })
        });

        const data = await res.json();

        if (!res.ok) {
          alert(data.message);
          setLoading(false);
          return;
        }

        if (rememberMe) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data));
        } else {
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("user", JSON.stringify(data));
        }

        alert("Login Successful ✅");
        navigate("/");
      }

    } catch (err) {
      alert("Server error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRequestOtp = async () => {

    if (loginMethod !== "otp") {
      alert("Switch to OTP mode first.");
      return;
    }

    if (!emailMobile.trim()) {
      alert("Enter email first.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API}/login/request-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: emailMobile
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("OTP sent to email");

    } catch (err) {
      alert("Server error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Forgot Password Handlers
  const handleForgotPassword = () => {
    setShowForgotPassword(true);
    setForgotEmail(emailMobile); // Pre-fill with the email from login form
    setResetStep(1);
  };

  const handleCloseForgotPassword = () => {
    setShowForgotPassword(false);
    setForgotEmail("");
    setResetOtp("");
    setNewPassword("");
    setConfirmPassword("");
    setResetStep(1);
  };

  const handleRequestResetOtp = async () => {
    if (!forgotEmail.trim()) {
      alert("Please enter your email address.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(forgotEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API}/forgot-password/request-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: forgotEmail
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Password reset OTP sent to your email.");
      setResetStep(2);

    } catch (err) {
      alert("Server error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!resetOtp.trim()) {
      alert("Please enter the OTP.");
      return;
    }

    if (!newPassword.trim()) {
      alert("Please enter a new password.");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

 const res = await fetch(`${API}/forgot-password/verify-otp`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: forgotEmail,   // ✅ USE STATE VARIABLE
   otp: resetOtp,
    newPassword: newPassword,
  }),
});

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Password reset successful! Please login with your new password.");
      handleCloseForgotPassword();
      
      // Switch to password login method
      setLoginMethod("password");
      
      // Clear any existing OTP related fields
      setOtp("");

    } catch (err) {
      alert("Server error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAccount = () => {
    navigate("/signup");
  };

  return (
    <>
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
              Your Health Journey Continues Here
            </h1>
            <p className="text-[#4d5f56] text-base md:text-lg mb-6 max-w-[520px] mx-auto lg:mx-0">
              Secure access to consultations, prescriptions, medical reports,
              and doctor communication — anytime, anywhere.
            </p>
            <ul className="text-[#0f5132] font-medium space-y-3">
              <li>✔ 100% Secure & Encrypted</li>
              <li>✔ Verified Specialist Doctors</li>
              <li>✔ 24/7 Online Consultation</li>
            </ul>
          </div>

          {/* Login Card */}
          <div className="w-full max-w-[430px] bg-white/96 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-center text-[#0f5132] mb-2">
              Secure Account Login
            </h2>
            <p className="text-sm text-center text-gray-500 mb-6">
              Choose your preferred access method
            </p>

            {/* Toggle */}
            <div className="flex bg-gray-200 rounded-full p-1 mb-6">
              <button
                type="button"
                className={`flex-1 py-2.5 text-sm font-medium rounded-full transition-colors ${
                  loginMethod === "password"
                    ? "bg-[#198754] text-white"
                    : "text-gray-700"
                }`}
                onClick={() => setLoginMethod("password")}
                disabled={loading}
              >
                Password
              </button>

              <button
                type="button"
                className={`flex-1 py-2.5 text-sm font-medium rounded-full transition-colors ${
                  loginMethod === "otp"
                    ? "bg-[#198754] text-white"
                    : "text-gray-700"
                }`}
                onClick={() => setLoginMethod("otp")}
                disabled={loading}
              >
                Email OTP
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Email / Mobile */}
              <div className="mb-5">
                <label className="block text-sm font-medium mb-1.5 text-gray-700">
                  Email Address or Mobile Number
                </label>
                <input
                  type="text"
                  value={emailMobile}
                  onChange={(e) => setEmailMobile(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754]"
                  required
                  disabled={loading}
                />
              </div>

              {/* Password */}
              {loginMethod === "password" && (
                <div className="mb-5">
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">
                    Account Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754]"
                    required
                    disabled={loading}
                  />
                </div>
              )}

              {/* OTP */}
              {loginMethod === "otp" && (
                <div className="mb-5">
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">
                    One-Time Password (OTP)
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 6-digit code"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754]"
                    required
                    disabled={loading}
                  />
                  <span
                    onClick={handleRequestOtp}
                    className="text-xs text-[#0f5132] italic mt-1 inline-block cursor-pointer hover:underline"
                  >
                    📧 Click to request OTP
                  </span>
                </div>
              )}

              {/* Remember Me and Forgot Password */}
              <div className="flex justify-between items-center mb-6">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 accent-[#198754]"
                    disabled={loading}
                  />
                  <span className="text-gray-700">Remember Me</span>
                </label>
                
                {loginMethod === "password" && (
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-sm text-[#198754] hover:text-[#0f5132] hover:underline font-medium"
                    disabled={loading}
                  >
                    Forgot Password?
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg font-semibold text-white bg-gradient-to-r from-[#0f5132] to-[#198754] hover:opacity-90 transition mb-3 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Processing..." : "Login to Dashboard"}
              </button>

              <button
                type="button"
                onClick={handleCreateAccount}
                className="w-full py-3.5 rounded-lg font-semibold border-2 border-[#0f5132] text-[#0f5132] hover:bg-[#0f5132] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                Create New Account
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
              Your information is protected with industry-standard encryption.
            </p>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">
            <button
              onClick={handleCloseForgotPassword}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold text-[#0f5132] mb-2">Reset Password</h3>
            <p className="text-sm text-gray-500 mb-6">
              {resetStep === 1 
                ? "Enter your email to receive a password reset OTP" 
                : "Enter the OTP sent to your email and set a new password"}
            </p>

            {resetStep === 1 ? (
              // Step 1: Request OTP
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="Enter your registered email"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754]"
                    disabled={loading}
                  />
                </div>

                <button
                  onClick={handleRequestResetOtp}
                  className="w-full py-3.5 rounded-lg font-semibold text-white bg-gradient-to-r from-[#0f5132] to-[#198754] hover:opacity-90 transition disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? "Sending OTP..." : "Send Reset OTP"}
                </button>
              </div>
            ) : (
              // Step 2: Verify OTP and Reset Password
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">
                    OTP Code
                  </label>
                  <input
                    type="text"
                    value={resetOtp}
                    onChange={(e) => setResetOtp(e.target.value)}
                    placeholder="Enter 6-digit OTP"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754]"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754]"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#198754]"
                    disabled={loading}
                  />
                </div>

                <button
                  onClick={handleResetPassword}
                  className="w-full py-3.5 rounded-lg font-semibold text-white bg-gradient-to-r from-[#0f5132] to-[#198754] hover:opacity-90 transition disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? "Resetting..." : "Reset Password"}
                </button>

                <button
                  onClick={() => setResetStep(1)}
                  className="w-full text-sm text-[#198754] hover:text-[#0f5132] hover:underline"
                  disabled={loading}
                >
                  ← Back to email entry
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Add this CSS for modal animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Login;