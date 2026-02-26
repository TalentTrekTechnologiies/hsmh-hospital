// BookConsultation.jsx
import React, { useState } from "react";
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";

const BookConsultation = () => {
  const [step, setStep] = useState(1);
  const [showPatientDropdown, setShowPatientDropdown] = useState(false);
  const [showAddPatientModal, setShowAddPatientModal] = useState(false);
  const [newPatientName, setNewPatientName] = useState("");
  const [newPatientRelation, setNewPatientRelation] = useState("self");

  const [formData, setFormData] = useState({
    patientName: "",
    department: "Cardiology",
    doctor: "Dr. Priya Sharma",
    date: "",
    time: "10:00 AM",
    contact: "",
    consent: false,
  });

  const [savedPatients, setSavedPatients] = useState([
    { id: 1, name: "Mohanraj M", relation: "Self" },
    { id: 2, name: "Ravi Kumar", relation: "Father" },
    { id: 3, name: "Sneha Reddy", relation: "Mother" },
    { id: 4, name: "Arjun Nair", relation: "Brother" }
  ]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePatientSelect = (patient) => {
    setFormData({ ...formData, patientName: patient.name });
    setShowPatientDropdown(false);
  };

  const handleAddPatient = () => {
    if (newPatientName.trim()) {
      const newPatient = {
        id: savedPatients.length + 1,
        name: newPatientName,
        relation: newPatientRelation
      };
      setSavedPatients([...savedPatients, newPatient]);
      setFormData({ ...formData, patientName: newPatientName });
      setShowAddPatientModal(false);
      setNewPatientName("");
      setNewPatientRelation("self");
    }
  };

  const openRazorpay = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: 50000,
      currency: "INR",
      name: "Harsha Multi Speciality Hospital",
      description: "Consultation Fee",
      handler: function () {
        setStep(4);
      },
      theme: {
        color: "#15803d",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const validateStep1 = () => {
    return formData.patientName && formData.contact && formData.consent;
  };

  // Validate Indian phone number (10 digits)
  const isValidPhoneNumber = (number) => {
    return /^\d{10}$/.test(number);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* Main Content - Added proper padding top to account for fixed header */}
      <main className="flex-1 pt-20 md:pt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* LEFT IMAGE SECTION */}
              <div className="md:w-2/5 bg-cover bg-center relative text-white min-h-[300px] md:min-h-[600px]" 
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-green-800/90"></div>
                <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <span className="text-xl font-bold">H</span>
                      </div>
                      <div>
                        <span className="text-lg font-semibold block">HMSH</span>
                        <span className="text-xs text-green-100">Harsha Multi Speciality Hospital</span>
                      </div>
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold mb-3">
                      Your Health,<br />Our Priority
                    </h1>
                    <p className="text-green-100 text-sm md:text-base">
                      Premium online consultation with expert specialists.
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <p className="text-sm text-green-100 mb-1">Emergency</p>
                      <p className="text-xl font-bold flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        964 054 0475
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT FORM SECTION */}
              <div className="flex-1 p-6 md:p-8">
                {/* STEPPER */}
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    {[
                      { step: 1, label: "Details" },
                      { step: 2, label: "Confirmation" },
                      { step: 3, label: "Payment" },
                    ].map((item, index) => (
                      <React.Fragment key={item.step}>
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                              step >= item.step
                                ? "bg-green-600 text-white shadow-md"
                                : "bg-gray-100 text-gray-400"
                            }`}
                          >
                            {step > item.step ? (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              item.step
                            )}
                          </div>
                          <span className={`text-xs mt-2 ${
                            step >= item.step ? "text-green-600 font-medium" : "text-gray-400"
                          }`}>
                            {item.label}
                          </span>
                        </div>
                        {index < 2 && (
                          <div className={`flex-1 h-1 mx-2 rounded-full ${
                            step > item.step ? "bg-green-600" : "bg-gray-200"
                          }`} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* STEP 1 - Details */}
                {step === 1 && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Book Consultation
                    </h2>

                    <div className="space-y-5">
                      {/* Patient Name with Dropdown */}
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Patient Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="flex gap-3">
                            <div className="flex-1 relative">
                              <button
                                type="button"
                                onClick={() => setShowPatientDropdown(!showPatientDropdown)}
                                className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-left flex items-center justify-between focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-sm"
                              >
                                <span className={formData.patientName ? "text-gray-800" : "text-gray-400"}>
                                  {formData.patientName || "Select Patient"}
                                </span>
                                <svg className={`w-5 h-5 text-gray-400 transition-transform ${showPatientDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              
                              {/* Dropdown */}
                              {showPatientDropdown && (
                                <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-48 overflow-y-auto">
                                  {savedPatients.map((patient) => (
                                    <button
                                      key={patient.id}
                                      type="button"
                                      onClick={() => handlePatientSelect(patient)}
                                      className="w-full px-4 py-3 text-left text-sm hover:bg-green-50 transition-colors border-b border-gray-100 last:border-0"
                                    >
                                      <span className="font-medium">{patient.name}</span>
                                      <span className="text-xs text-gray-500 ml-2">({patient.relation})</span>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                            <button
                              type="button"
                              onClick={() => setShowAddPatientModal(true)}
                              className="px-6 h-12 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition font-medium border-2 border-green-200 text-sm whitespace-nowrap"
                            >
                              + Add
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Department */}
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Department <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-sm"
                        >
                          <option>Cardiology</option>
                          <option>Orthopedics</option>
                          <option>Neurology</option>
                          <option>Pediatrics</option>
                          <option>Dermatology</option>
                        </select>
                      </div>

                      {/* Doctor */}
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Doctor Name <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="doctor"
                          value={formData.doctor}
                          onChange={handleChange}
                          className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-sm"
                        >
                          <option>Dr. Priya Sharma - Cardiologist</option>
                          <option>Dr. Arjun Rao - Orthopedic</option>
                          <option>Dr. Kavya Reddy - Neurologist</option>
                          <option>Dr. Sanjay Gupta - Pediatrician</option>
                        </select>
                      </div>

                      {/* Date and Time */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-700">
                            Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-sm"
                            min={new Date().toISOString().split("T")[0]}
                          />
                        </div>
                        
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-700">
                            Time <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-sm"
                          >
                            <option>09:00 AM</option>
                            <option>10:00 AM</option>
                            <option>11:00 AM</option>
                            <option>02:00 PM</option>
                            <option>03:00 PM</option>
                            <option>04:00 PM</option>
                          </select>
                        </div>
                      </div>

                      {/* Contact with important note */}
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          WhatsApp Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">+91</span>
                          <input
                            type="tel"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="9876543210"
                            className={`w-full h-12 pl-12 pr-4 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-sm ${
                              formData.contact && !isValidPhoneNumber(formData.contact) 
                                ? "border-red-500 bg-red-50" 
                                : "border-gray-200"
                            }`}
                          />
                        </div>
                        
                        {/* Important note about WhatsApp number - FIXED */}
                        <div className="mt-2 flex items-start gap-2 text-xs">
                          <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div className="text-gray-600">
                            <span className="font-medium text-gray-700">Note:</span> Your consultation will be conducted via WhatsApp video call. The doctor will call you on this number at the scheduled time. Please ensure your WhatsApp is active.
                          </div>
                        </div>
                        
                        {formData.contact && !isValidPhoneNumber(formData.contact) && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Please enter a valid 10-digit mobile number
                          </p>
                        )}
                      </div>

                      {/* Consent */}
                      <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                        <label className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            className="w-5 h-5 mt-0.5 text-green-600 rounded border-gray-300 focus:ring-green-500 flex-shrink-0"
                          />
                          <span className="text-sm text-gray-600">
                            I agree to consultation terms & cancellation policy
                          </span>
                        </label>
                      </div>

                      <button
                        disabled={!validateStep1() || (formData.contact && !isValidPhoneNumber(formData.contact))}
                        onClick={() => setStep(2)}
                        className={`w-full h-14 rounded-xl font-semibold text-white transition-all ${
                          validateStep1() && isValidPhoneNumber(formData.contact)
                            ? "bg-green-600 hover:bg-green-700 shadow-md cursor-pointer"
                            : "bg-gray-300 cursor-not-allowed"
                        }`}
                      >
                        Continue to Confirmation
                      </button>
                    </div>
                  </>
                )}

                {/* STEP 2 - Confirmation */}
                {step === 2 && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Confirm Appointment
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                      <div className="flex justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-600 text-sm">Patient Name</span>
                        <span className="font-semibold text-gray-800 text-sm">{formData.patientName}</span>
                      </div>

                      <div className="flex justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-600 text-sm">Doctor</span>
                        <span className="font-semibold text-gray-800 text-sm">{formData.doctor}</span>
                      </div>

                      <div className="flex justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-600 text-sm">Department</span>
                        <span className="font-semibold text-gray-800 text-sm">{formData.department}</span>
                      </div>

                      <div className="flex justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-600 text-sm">Date & Time</span>
                        <span className="font-semibold text-gray-800 text-sm">
                          {formData.date || "Not selected"} • {formData.time}
                        </span>
                      </div>

                      <div className="flex justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-600 text-sm">WhatsApp Number</span>
                        <span className="font-semibold text-gray-800 text-sm">+91 {formData.contact}</span>
                      </div>

                      <div className="bg-green-100 p-4 rounded-lg mt-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-green-800 text-sm">Consultation Fee</span>
                          <span className="text-2xl font-bold text-green-800">₹500</span>
                        </div>
                      </div>
                      
                      {/* WhatsApp reminder - FIXED */}
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 mt-2">
                        <p className="text-xs text-blue-700 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span><span className="font-medium">WhatsApp Video Call:</span> Dr. {formData.doctor.split(' ')[1]} will call you on <span className="font-medium">+91 {formData.contact}</span> at exactly {formData.time}. Please keep your WhatsApp open.</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <button
                        onClick={() => setStep(1)}
                        className="w-full sm:flex-1 h-12 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition text-sm cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        className="w-full sm:flex-1 h-12 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition shadow-md text-sm cursor-pointer"
                      >
                        Proceed to Payment
                      </button>
                    </div>
                  </>
                )}

                {/* STEP 3 - Payment */}
                {step === 3 && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Secure Payment
                    </h2>

                    <div className="space-y-6">
                      <div className="bg-green-600 p-6 rounded-xl text-white">
                        <p className="text-green-100 mb-2 text-sm">Total Amount</p>
                        <p className="text-4xl font-bold">₹500</p>
                      </div>

                      <button
                        onClick={openRazorpay}
                        className="w-full h-14 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition shadow-md cursor-pointer"
                      >
                        Pay Securely with Razorpay
                      </button>

                      <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                        <span>🔒 SSL Secure</span>
                        <span>•</span>
                        <span>💳 Cards/UPI</span>
                      </div>

                      <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                        <h3 className="font-semibold text-gray-800 mb-3 text-sm">Important Instructions</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">•</span>
                            Please join 10 minutes before scheduled time
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">•</span>
                            Keep previous reports ready
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">•</span>
                            Cancellation allowed up to 2 hours before appointment
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">•</span>
                            Doctor will call you on WhatsApp at the scheduled time
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-600">•</span>
                            Ensure WhatsApp is installed and active on your phone
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {/* STEP 4 - Success */}
                {step === 4 && (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      Appointment Confirmed! 🎉
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm">Payment successful. Your appointment has been booked.</p>
                    
                    {/* WhatsApp confirmation - FIXED */}
                    <div className="bg-green-50 p-4 rounded-xl mb-4 border border-green-200">
                      <p className="text-sm text-green-700 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span><span className="font-medium">WhatsApp Video Call:</span> Dr. {formData.doctor.split(' ')[1]} will call you on <span className="font-medium">+91 {formData.contact}</span> at {formData.time}</span>
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-xl mb-6">
                      <p className="text-sm text-gray-500">Booking ID</p>
                      <p className="font-mono font-bold text-gray-800">HMS{Math.floor(Math.random() * 10000)}</p>
                    </div>
                    
                    <div className="bg-yellow-50 p-3 rounded-lg mb-4 border border-yellow-200">
                      <p className="text-xs text-yellow-700 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Please ensure WhatsApp is installed and you're available to receive the call at the scheduled time
                      </p>
                    </div>
                    
                    <button
                      onClick={() => {
                        setStep(1);
                        setFormData({
                          patientName: "",
                          department: "Cardiology",
                          doctor: "Dr. Priya Sharma",
                          date: "",
                          time: "10:00 AM",
                          contact: "",
                          consent: false,
                        });
                      }}
                      className="w-full h-12 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition cursor-pointer"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add Patient Modal */}
      {showAddPatientModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md p-6 rounded-xl relative animate-fadeIn">
            <button
              onClick={() => setShowAddPatientModal(false)}
              className="absolute right-4 top-4 text-2xl text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              ×
            </button>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Add New Patient</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Patient Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={newPatientName}
                  onChange={(e) => setNewPatientName(e.target.value)}
                  placeholder="Enter patient name"
                  className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-sm"
                  autoFocus
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Relationship
                </label>
                <select
                  value={newPatientRelation}
                  onChange={(e) => setNewPatientRelation(e.target.value)}
                  className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-sm"
                >
                  <option value="self">Self</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="brother">Brother</option>
                  <option value="sister">Sister</option>
                  <option value="spouse">Spouse</option>
                  <option value="child">Child</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddPatientModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleAddPatient}
                disabled={!newPatientName.trim()}
                className={`flex-1 px-4 py-3 rounded-lg font-medium text-sm transition-colors cursor-pointer ${
                  newPatientName.trim()
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Add Patient
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default BookConsultation;