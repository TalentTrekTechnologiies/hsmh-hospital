import { useState, useRef, useEffect } from "react";

export default function HospitalChatbot() {
  const INACTIVE_TIME = 25000; // 25 seconds auto-close

  const hospital = {
    name: "Harsha Multi Speciality Hospital",
    phone: "+91 9640540475",
    emergency: "108",
    insuranceDesk: "+91 9640540475",
    address: "📍 2/207, Bollavaram,Jammalamadugu Road,Proddatur📞 9640540475",
    opd: "Mon–Sat: 8:00 AM – 9:00 PM | Sun: 9:00 AM – 1:00 PM",
  };

  const initialMessage = `Welcome to ${hospital.name}.\nPlease select an option below for quick assistance.`;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: initialMessage },
  ]);

  const timerRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Auto close timer
  const resetTimer = () => {
    clearTimeout(timerRef.current);
    if (isOpen) {
      timerRef.current = setTimeout(() => {
        setIsOpen(false);
        setMessages([{ sender: "bot", text: initialMessage }]);
      }, INACTIVE_TIME);
    }
  };

  useEffect(() => {
    resetTimer();
    return () => clearTimeout(timerRef.current);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleButtonClick = (userText, botResponse, action = null) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userText },
      { sender: "bot", text: botResponse, action },
    ]);
  };

  const handleAction = (action) => {
    switch (action) {
      case "call":
        window.location.href = `tel:${hospital.phone}`;
        break;
      case "emergency":
        window.location.href = `tel:${hospital.emergency}`;
        break;
      case "map":
        window.open(`https://maps.google.com/?q=${encodeURIComponent(hospital.address)}`, '_blank');
        break;
      case "booking":
        window.location.href = "/book-appointment";
        break;
      case "doctors":
        window.location.href = "/doctors";
        break;
      default:
        break;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end">
      {isOpen && (
        <div
          className="
            w-[340px] max-w-[92vw]
            h-[480px]
            bg-white rounded-2xl shadow-2xl
            flex flex-col mb-3 border border-gray-200
            overflow-hidden
            animate-slideUp
          "
        >
          {/* HEADER - Small and clean */}
          <div className="flex-shrink-0 flex items-center justify-between px-3 py-2 border-b border-gray-200 bg-white">
            <span className="text-xs font-semibold text-gray-700">
              How can we help?
            </span>
            <button
              onClick={() => {
                setIsOpen(false);
                setMessages([{ sender: "bot", text: initialMessage }]);
              }}
              className="text-gray-400 hover:text-gray-600 transition-colors p-0.5"
              aria-label="Close chat"
            >
              <span className="text-base">✕</span>
            </button>
          </div>

          {/* RESPONSE AREA - Scrollable */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className="flex flex-col">
                <div
                  className={`max-w-[85%] px-3 py-2 text-xs leading-relaxed ${
                    m.sender === "user"
                      ? "ml-auto bg-[#007A55] text-white rounded-xl rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-xl rounded-bl-none shadow-sm"
                  }`}
                >
                  <div className="whitespace-pre-line break-words">{m.text}</div>
                </div>
                
                {/* Action button inside response */}
                {m.sender === "bot" && m.action && (
                  <div className="mt-1.5 ml-2">
                    <button
                      onClick={() => handleAction(m.action)}
                      className="text-[10px] bg-[#007A55] text-white px-3 py-1.5 rounded-lg hover:bg-[#006347] transition-colors font-medium"
                    >
                      {m.action === "call" && "📞 Call Now"}
                      {m.action === "emergency" && "🚨 Call Emergency"}
                      {m.action === "map" && "📍 Open Maps"}
                      {m.action === "booking" && "📅 Book Now"}
                      {m.action === "doctors" && "👨‍⚕️ View Doctors"}
                    </button>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* BUTTON PANEL - Always visible, never disappears */}
          <div className="flex-shrink-0 border-t border-gray-200 p-2 bg-white">
            <div className="grid grid-cols-2 gap-1.5">
              {/* Book Online Appointment */}
              <button
                className="quick-btn"
                onClick={() =>
                  handleButtonClick(
                    "Book Online Appointment",
                    "You can book your online consultation easily.\nClick below to proceed.",
                    "booking"
                  )
                }
              >
                <span>📅</span> Book Online Appointment
              </button>

              {/* View Doctors */}
              <button
                className="quick-btn"
                onClick={() =>
                  handleButtonClick(
                    "View Doctors",
                    "Explore our specialist doctors.\n• Cardiology\n• Neurology\n• Orthopedics\n• Pediatrics",
                    "doctors"
                  )
                }
              >
                <span>👨‍⚕️</span> View Doctors
              </button>

              {/* View Departments */}
              <button
                className="quick-btn"
                onClick={() =>
                  handleButtonClick(
                    "View Departments",
                    "Our departments:\n• Cardiology\n• Neurology\n• Orthopedics\n• Pediatrics\n• Gynecology\n• General Medicine"
                  )
                }
              >
                <span>🏥</span> View Departments
              </button>

              {/* Consultation Services */}
              <button
                className="quick-btn"
                onClick={() =>
                  handleButtonClick(
                    "Consultation Services",
                    "We offer:\n• Online Consultation\n• In-clinic Consultation\n• Emergency Services\n• Second Opinion",
                    "booking"
                  )
                }
              >
                <span>🩺</span> Consultation Services
              </button>

              {/* Insurance & Cashless Info */}
              <button
                className="quick-btn"
                onClick={() =>
                  handleButtonClick(
                    "Insurance & Cashless Info",
                    `We support cashless treatment for selected insurance providers:\n\n• Vidal Health Insurance TPA\n• Vipul Medicare Insurance TPA\n• Ericson Insurance TPA\n• SBI General Insurance TPA\n• FHP Insurance\n\nInsurance Desk: ${hospital.insuranceDesk}`,
                    "call"
                  )
                }
              >
                <span>💰</span> Insurance & Cashless
              </button>

              {/* Emergency Contact */}
              <button
                className="quick-btn"
                onClick={() =>
                  handleButtonClick(
                    "Emergency Contact",
                    `🚨 Emergency Helpline: ${hospital.emergency}\nAmbulance: ${hospital.emergency}\n24x7 Emergency Services Available`,
                    "emergency"
                  )
                }
              >
                <span>🚑</span> Emergency Contact
              </button>

              {/* Hospital Location */}
              <button
                className="quick-btn"
                onClick={() =>
                  handleButtonClick(
                    "Hospital Location",
                    `${hospital.address}\n\n`,
                    "map"
                  )
                }
              >
                <span>📍</span> Hospital Location
              </button>

              {/* OPD Timings */}
              <button
                className="quick-btn"
                onClick={() =>
                  handleButtonClick(
                    "OPD Timings",
                    `OPD Hours:\n${hospital.opd}\n\nEmergency: 24x7`
                  )
                }
              >
                <span>⏰</span> OPD Timings
              </button>

              {/* Contact Reception */}
              <button
                className="quick-btn"
                onClick={() =>
                  handleButtonClick(
                    "Contact Reception",
                    `Reception: ${hospital.phone}\nTimings: 8:00 AM – 9:00 PM\nFor appointments and inquiries`,
                    "call"
                  )
                }
              >
                <span>📞</span> Contact Reception
              </button>

              {/* About Hospital */}
              <button
                className="quick-btn"
                onClick={() =>
                  handleButtonClick(
                    "About Hospital",
                    `${hospital.name}\n\nMulti-speciality hospital with 100+ beds\n24x7 Emergency & Trauma Care\nAdvanced Diagnostic Centre\nPharmacy & Laboratory Services`
                  )
                }
              >
                <span>ℹ️</span> About Hospital
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-[#007A55] hover:bg-[#006347] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 text-xl"
        aria-label="Open help chat"
      >
        💬
      </button>

      <style jsx>{`
        .quick-btn {
          background: white;
          border: 1px solid #e2e8f0;
          padding: 8px 6px;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 500;
          color: #1e293b;
          transition: all 0.15s ease;
          text-align: left;
          line-height: 1.3;
          white-space: normal;
          word-break: break-word;
          display: flex;
          align-items: center;
          gap: 4px;
          min-height: 42px;
          cursor: pointer;
          width: 100%;
        }
        .quick-btn:hover {
          background: #f0fdf4;
          border-color: #007A55;
          color: #007A55;
        }
        .quick-btn span {
          font-size: 1rem;
          flex-shrink: 0;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}