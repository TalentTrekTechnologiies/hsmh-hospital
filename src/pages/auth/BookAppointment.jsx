import React, { useState } from "react";
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";


const BookAppointment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    date: "",
    slot: "",
  });

  const departments = ["Cardiology", "Orthopedics", "Neurology", "Pediatrics"];
  const doctors = {
    Cardiology: ["Dr. Priya Sharma", "Dr. Rajesh Kumar"],
    Orthopedics: ["Dr. Arjun Rao", "Dr. Sneha Reddy"],
    Neurology: ["Dr. Kavya Nair", "Dr. Vikram Mehta"],
    Pediatrics: ["Dr. Anjali Joshi", "Dr. Sanjay Gupta"],
  };
  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
  ];

  const handleDepartmentChange = (e) => {
    setFormData({ ...formData, department: e.target.value, doctor: "" });
  };

  const isStepComplete = (step) => {
    switch (step) {
      case 1:
        return formData.department;
      case 2:
        return formData.doctor;
      case 3:
        return formData.date;
      case 4:
        return formData.slot;
      default:
        return false;
    }
  };

  const handleContinue = () => {
    if (currentStep < 5 && isStepComplete(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
   <div className='min-h-screen bg-[#fff8f0] flex flex-col'>
         <Header />
<div className="bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-30">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 px-8 py-6">
          <h1 className="text-3xl font-bold text-white">Book Appointment</h1>
          <p className="text-indigo-100 mt-1">Step-by-Step Booking</p>
        </div>

        {/* Progress Steps */}
        <div className="px-8 pt-8 pb-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((step) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      currentStep >= step
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step}
                  </div>
                  <span className="text-xs mt-2 text-gray-600">
                    {step === 1 && "Department"}
                    {step === 2 && "Doctor"}
                    {step === 3 && "Date"}
                    {step === 4 && "Slots"}
                    {step === 5 && "Confirm"}
                  </span>
                </div>
                {step < 5 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      currentStep > step ? "bg-indigo-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Step 1: Department */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Step 1: Select Department
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Choose the medical department you'd like to consult
                </p>
              </div>
              <div className="space-y-3">
                {departments.map((dept) => (
                  <label
                    key={dept}
                    className={`block p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.department === dept
                        ? "border-indigo-600 bg-indigo-50"
                        : "border-gray-200 hover:border-indigo-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="department"
                      value={dept}
                      checked={formData.department === dept}
                      onChange={handleDepartmentChange}
                      className="hidden"
                    />
                    <span className="font-medium text-gray-800">{dept}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Doctor */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Step 2: Select Doctor
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Choose your preferred specialist
                </p>
              </div>
              {formData.department ? (
                <div className="space-y-3">
                  {doctors[formData.department]?.map((doc) => (
                    <label
                      key={doc}
                      className={`block p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.doctor === doc
                          ? "border-indigo-600 bg-indigo-50"
                          : "border-gray-200 hover:border-indigo-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="doctor"
                        value={doc}
                        checked={formData.doctor === doc}
                        onChange={(e) =>
                          setFormData({ ...formData, doctor: e.target.value })
                        }
                        className="hidden"
                      />
                      <span className="font-medium text-gray-800">{doc}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  Please select a department first
                </p>
              )}
            </div>
          )}

          {/* Step 3: Date */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Step 3: Select Date
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Pick a date for your appointment
                </p>
              </div>
              <div className="relative">
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none text-gray-800"
                  min={new Date().toISOString().split("T")[0]}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  dd-mm-yyyy
                </span>
              </div>
            </div>
          )}

          {/* Step 4: Slots */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Step 4: Available Slots
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Choose a convenient time
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setFormData({ ...formData, slot })}
                    className={`p-3 border-2 rounded-xl font-medium transition-all ${
                      formData.slot === slot
                        ? "border-indigo-600 bg-indigo-600 text-white"
                        : "border-gray-200 hover:border-indigo-300 text-gray-700"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Confirm */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Step 5: Confirm Details
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  Please review your appointment details
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Department</span>
                  <span className="font-semibold text-gray-800">
                    {formData.department || "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Doctor</span>
                  <span className="font-semibold text-gray-800">
                    {formData.doctor || "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Date</span>
                  <span className="font-semibold text-gray-800">
                    {formData.date
                      ? new Date(formData.date).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })
                      : "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time Slot</span>
                  <span className="font-semibold text-gray-800">
                    {formData.slot || "Not selected"}
                  </span>
                </div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-xl">
                <h3 className="font-semibold text-indigo-800 mb-2">
                  Payment Summary
                </h3>
                <div className="flex justify-between items-center text-indigo-700">
                  <span>Consultation Fee</span>
                  <span className="font-bold">₹500</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                currentStep > 1
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
              disabled={currentStep === 1}
            >
              ← Back
            </button>

            {currentStep < 5 ? (
              <button
                onClick={handleContinue}
                className={`px-6 py-3 rounded-xl font-semibold text-white transition-all ${
                  isStepComplete(currentStep)
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "bg-indigo-300 cursor-not-allowed"
                }`}
                disabled={!isStepComplete(currentStep)}
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={() => alert("Appointment Booked Successfully!")}
                className="px-6 py-3 rounded-xl font-semibold text-white bg-green-600 hover:bg-green-700 transition-all"
              >
                Confirm Booking
              </button>
            )}
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default BookAppointment;