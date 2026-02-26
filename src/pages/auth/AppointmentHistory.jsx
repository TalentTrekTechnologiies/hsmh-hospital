// AppointmentHistory.jsx
import React, { useState } from 'react';
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([
    {
      id: "BK20260220A01",
      name: "Mohanraj M",
      doctor: "Dr. Priya Sharma",
      department: "Cardiology",
      date: "20 Feb 2026",
      time: "10:00 AM",
      status: "upcoming",
      payment: "Paid",
      instructions: "Join 10 minutes early and keep previous reports ready."
    },
    {
      id: "BK20260215B02",
      name: "Vijay Kumar M",
      doctor: "Dr. Priya Sharma",
      department: "Neurology",
      date: "15 Feb 2026",
      time: "11:00 AM",
      status: "completed",
      payment: "Paid",
      instructions: "Prescription available in dashboard."
    },
    {
      id: "BK20260215B04",
      name: "Vijay Kumar M",
      doctor: "Dr. Priya Sharma",
      department: "Neurology",
      date: "15 Feb 2026",
      time: "11:00 AM",
      status: "cancelled",
      payment: "Refunded",
      instructions: "Cancelled by patient."
    }
  ]);

  const [currentFilter, setCurrentFilter] = useState('upcoming');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  const getFilteredAppointments = () => {
    return appointments.filter(app => app.status === currentFilter);
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  const openModal = (id) => {
    const appointment = appointments.find(app => app.id === id);
    setSelectedAppointment(appointment);
    setIsBookingModalOpen(true);
  };

  const closeModal = () => {
    setIsBookingModalOpen(false);
    setSelectedAppointment(null);
  };

  const cancelAppointment = () => {
    if (selectedAppointment?.status !== 'upcoming') {
      alert('This appointment cannot be cancelled.');
      return;
    }

    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      setAppointments(prevAppointments =>
        prevAppointments.map(app =>
          app.id === selectedAppointment.id
            ? { ...app, status: 'cancelled', payment: 'Refund Initiated' }
            : app
        )
      );

      alert('Appointment cancelled successfully.\nRefund will be processed in 3-5 working days.');
      closeModal();
    }
  };

  const openReschedulePopup = () => {
    if (selectedAppointment?.status !== 'upcoming') {
      alert('Only upcoming appointments can be rescheduled.');
      return;
    }

    closeModal();
    setNewDate('');
    setNewTime('');
    setIsRescheduleModalOpen(true);
  };

  const closeRescheduleModal = () => {
    setIsRescheduleModalOpen(false);
    setSelectedAppointment(null);
  };

  const confirmReschedule = () => {
    if (!newDate || !newTime) {
      alert('Please select both new date and time slot.');
      return;
    }

    if (selectedAppointment) {
      const dateObj = new Date(newDate);
      const formattedDate = dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

      setAppointments(prevAppointments =>
        prevAppointments.map(app =>
          app.id === selectedAppointment.id
            ? { ...app, date: formattedDate, time: newTime }
            : app
        )
      );

      alert(`Appointment rescheduled successfully to ${formattedDate} at ${newTime}`);
    }

    closeRescheduleModal();
  };

  const getStatusClass = (status) => {
    switch(status) {
      case 'upcoming':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return '';
    }
  };

  const getStatusCount = (status) => {
    return appointments.filter(a => a.status === status).length;
  };

  const filteredAppointments = getFilteredAppointments();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* Main Content - Added proper padding top */}
      <main className="flex-1 pt-20 md:pt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
         

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">My Appointments</h1>
            <p className="text-gray-600 mt-1">Track and manage your consultations</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left Section */}
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
                      Your Health<br />Journey
                    </h1>
                    <p className="text-green-100 text-sm md:text-base">
                      Track, manage and review your consultations all in one place.
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm">Real-time appointment tracking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm">Easy rescheduling & cancellation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-sm">Access prescriptions & reports</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex-1 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointment History</h2>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {['upcoming', 'completed', 'cancelled'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => handleFilterChange(filter)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                        currentFilter === filter
                          ? 'bg-green-600 text-white shadow-md'
                          : 'bg-white text-gray-600 border border-gray-200 hover:bg-green-50 hover:border-green-300'
                      }`}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                    <p className="text-2xl font-bold text-green-600">{getStatusCount('upcoming')}</p>
                    <p className="text-xs text-gray-500">Upcoming</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                    <p className="text-2xl font-bold text-green-600">{getStatusCount('completed')}</p>
                    <p className="text-xs text-gray-500">Completed</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                    <p className="text-2xl font-bold text-green-600">{getStatusCount('cancelled')}</p>
                    <p className="text-xs text-gray-500">Cancelled</p>
                  </div>
                </div>

                {/* Appointment Cards */}
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                  {filteredAppointments.length === 0 ? (
                    <div className="bg-white p-8 rounded-xl text-center border border-gray-200">
                      <p className="text-gray-500">No {currentFilter} appointments found.</p>
                    </div>
                  ) : (
                    filteredAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                          <div>
                            <span className="text-xs text-gray-500">Booking ID</span>
                            <p className="text-sm font-mono text-gray-700">{appointment.id}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold self-start ${getStatusClass(appointment.status)}`}>
                            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div>
                            <p className="text-xs text-gray-500">Patient</p>
                            <p className="font-medium text-gray-800 text-sm">{appointment.name}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Doctor</p>
                            <p className="font-medium text-gray-800 text-sm">{appointment.doctor}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Date</p>
                            <p className="font-medium text-gray-800 text-sm">{appointment.date}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Time</p>
                            <p className="font-medium text-gray-800 text-sm">{appointment.time}</p>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <button
                            onClick={() => openModal(appointment.id)}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors cursor-pointer"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Booking Details Modal */}
      {isBookingModalOpen && selectedAppointment && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md p-6 rounded-xl relative animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-2xl text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              ×
            </button>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Appointment Details</h3>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-gray-500 col-span-1">Booking ID:</span>
                <span className="font-mono text-gray-800 col-span-2">{selectedAppointment.id}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-gray-500">Status:</span>
                <span className={`col-span-2 font-medium ${
                  selectedAppointment.status === 'upcoming' ? 'text-yellow-600' :
                  selectedAppointment.status === 'completed' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {selectedAppointment.status.charAt(0).toUpperCase() + selectedAppointment.status.slice(1)}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-gray-500">Doctor:</span>
                <span className="text-gray-800 col-span-2">{selectedAppointment.doctor}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-gray-500">Department:</span>
                <span className="text-gray-800 col-span-2">{selectedAppointment.department}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-gray-500">Date:</span>
                <span className="text-gray-800 col-span-2">{selectedAppointment.date}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-gray-500">Time:</span>
                <span className="text-gray-800 col-span-2">{selectedAppointment.time}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-gray-500">Payment:</span>
                <span className="text-gray-800 col-span-2">{selectedAppointment.payment}</span>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-4">
              <p className="text-sm font-medium text-green-800 mb-1">Instructions:</p>
              <p className="text-sm text-green-700">{selectedAppointment.instructions}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              {selectedAppointment.status === 'upcoming' && (
                <>
                  <button
                    onClick={cancelAppointment}
                    className="w-full sm:flex-1 px-4 py-2.5 border border-red-300 text-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors text-sm cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={openReschedulePopup}
                    className="w-full sm:flex-1 px-4 py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-sm cursor-pointer"
                  >
                    Reschedule
                  </button>
                </>
              )}
              {selectedAppointment.status !== 'upcoming' && (
                <button
                  onClick={closeModal}
                  className="w-full px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm cursor-pointer"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Reschedule Modal */}
      {isRescheduleModalOpen && selectedAppointment && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md p-6 rounded-xl relative animate-fadeIn">
            <button
              onClick={closeRescheduleModal}
              className="absolute right-4 top-4 text-2xl text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              ×
            </button>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Reschedule Appointment</h3>
            </div>

            {/* Current booking summary */}
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-600 mb-6">
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Patient:</span> {selectedAppointment.name}</p>
              <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Doctor:</span> {selectedAppointment.doctor}</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Current:</span> {selectedAppointment.date} at {selectedAppointment.time}</p>
            </div>

            {/* New Date Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-sm"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            {/* Time Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Slot <span className="text-red-500">*</span>
              </label>
              <select
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-white text-sm"
              >
                <option value="">Select a time slot</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:30 PM">03:30 PM</option>
                <option value="05:00 PM">05:00 PM</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={closeRescheduleModal}
                className="w-full sm:flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmReschedule}
                className="w-full sm:flex-1 px-4 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-sm cursor-pointer"
              >
                Confirm
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

export default AppointmentHistory;