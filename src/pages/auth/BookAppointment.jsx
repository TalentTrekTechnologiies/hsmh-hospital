import React, { useState, useEffect } from "react";
import Header from "../../commoncomponents/Header";
import Footer from "../../commoncomponents/Footer";

const API = "http://localhost:8081/api";

const BookConsultation = () => {

  const token = localStorage.getItem("token");
  const patientId = localStorage.getItem("patientId");

  const [step, setStep] = useState(1);
  const [showAddPatientModal, setShowAddPatientModal] = useState(false);

  const [newPatientName, setNewPatientName] = useState("");
  const [newPatientRelation, setNewPatientRelation] = useState("self");

  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [slots, setSlots] = useState([]);

  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [appointmentId, setAppointmentId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    patientName: "",
    departmentId: "",
    department: "",
    doctorId: "",
    doctor: "",
    fee: 0,
    date: "",
    time: "",
    contact: "",
    consent: false
  });

  /* ---------------- LOAD DEPARTMENTS ---------------- */

  useEffect(() => {

    fetch(`${API}/departments`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setDepartments(data))
      .catch(() => console.log("Department fetch failed"));

  }, []);

  /* ---------------- LOAD DOCTORS ---------------- */

  useEffect(() => {

    if (!formData.departmentId) return;

    fetch(`${API}/doctors?departmentId=${formData.departmentId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setDoctors(data))
      .catch(() => console.log("Doctors fetch failed"));

  }, [formData.departmentId]);

  /* ---------------- LOAD SLOTS ---------------- */

  useEffect(() => {

    if (!formData.doctorId || !formData.date) return;

    fetch(`${API}/slots/doctor/${formData.doctorId}/available?date=${formData.date}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setSlots(data))
      .catch(() => console.log("Slots fetch failed"));

  }, [formData.doctorId, formData.date]);

  /* ---------------- HANDLE INPUT ---------------- */

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });

  };

  /* ---------------- ADD PATIENT ---------------- */

  const handleAddPatient = () => {

    if (!newPatientName.trim()) return;

    setFormData({
      ...formData,
      patientName: newPatientName
    });

    setNewPatientName("");
    setShowAddPatientModal(false);

  };

  /* ---------------- LOCK SLOT ---------------- */

  const lockSlot = async () => {

    if (!patientId) {
      alert("Patient not found. Please login again.");
      return;
    }

    setIsLoading(true);

    try {

      const res = await fetch(
        `${API}/slots/${selectedSlotId}/lock?patientId=${patientId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Slot already booked");
        return;
      }

      setAppointmentId(data.appointmentId);

      setStep(2);

    } catch {

      alert("Slot lock failed");

    } finally {

      setIsLoading(false);

    }

  };

  /* ---------------- PAYMENT ---------------- */

  const openPayment = async () => {

    setIsLoading(true);

    try {

      const res = await fetch(`${API}/appointments/confirm?paymentId=1`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Payment failed");
        return;
      }

      setStep(4);

    } catch {

      alert("Payment error");

    } finally {

      setIsLoading(false);

    }

  };

  /* ---------------- VALIDATION ---------------- */

  const validateStep1 = () => {

    return (
      formData.patientName &&
      formData.departmentId &&
      formData.doctorId &&
      formData.date &&
      selectedSlotId &&
      formData.contact &&
      formData.consent
    );

  };

  const isValidPhoneNumber = (num) => /^\d{10}$/.test(num);

  const getTodayDate = () => {

    const today = new Date();

    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');

    return `${yyyy}-${mm}-${dd}`;

  };

  return (

    <div className="min-h-screen bg-gray-50 flex flex-col">

      <Header />

      <main className="flex-1 pt-20 md:pt-24">

        <div className="w-full max-w-7xl mx-auto px-4 py-6">

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            <div className="flex flex-col md:flex-row">

              {/* LEFT IMAGE */}

              <div
                className="md:w-2/5 bg-cover bg-center relative text-white min-h-[600px]"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80')"
                }}
              >

                <div className="absolute inset-0 bg-green-900/90"></div>

                <div className="relative z-10 p-8">

                  <h1 className="text-3xl font-bold mb-4">
                    Your Health,<br />Our Priority
                  </h1>

                  <p className="text-green-100">
                    Premium online consultation with expert specialists.
                  </p>

                </div>

              </div>

              {/* RIGHT SECTION */}

              <div className="flex-1 p-8">

                {/* STEPPER */}

                <div className="flex items-center justify-between mb-8">

                  {[1, 2, 3].map((item, index) => (

                    <React.Fragment key={item}>

                      <div className="flex flex-col items-center">

                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold
                          ${step >= item ? "bg-green-600 text-white" : "bg-gray-200 text-gray-400"}`}>

                          {item}

                        </div>

                        <span className="text-xs mt-2">
                          {item === 1 ? "Details" : item === 2 ? "Confirmation" : "Payment"}
                        </span>

                      </div>

                      {index < 2 && (
                        <div className={`flex-1 h-1 mx-2 ${step > item ? "bg-green-600" : "bg-gray-200"}`}></div>
                      )}

                    </React.Fragment>

                  ))}

                </div>

                {/* STEP 1 */}

                {step === 1 && (

                  <div className="space-y-4">

                    <div>

                      <label className="block mb-2 text-sm font-medium">
                        Patient Name *
                      </label>

                      <div className="flex gap-3">

                        <input
                          name="patientName"
                          value={formData.patientName}
                          onChange={handleChange}
                          placeholder="Enter Patient Name"
                          className="flex-1 h-12 px-4 border rounded-xl bg-gray-50"
                        />

                        <button
                          onClick={() => setShowAddPatientModal(true)}
                          className="px-4 bg-green-50 text-green-600 rounded-xl border"
                        >
                          + Add
                        </button>

                      </div>

                    </div>

                    {/* Department */}

                    <select
                      value={formData.departmentId}
                      onChange={(e) => {

                        const id = e.target.value;
                        const dep = departments.find(d => d.id === Number(id));

                        setFormData({
                          ...formData,
                          departmentId: id,
                          department: dep?.name || "",
                          doctorId: "",
                          doctor: "",
                          fee: 0
                        });

                      }}
                      className="w-full h-12 px-4 border rounded-xl"
                    >

                      <option value="">Select Department</option>

                      {departments.map(dep => (
                        <option key={dep.id} value={dep.id}>{dep.name}</option>
                      ))}

                    </select>

                    {/* Doctor */}

                    <select
                      value={formData.doctorId}
                      onChange={(e) => {

                        const id = e.target.value;
                        const doc = doctors.find(d => d.id === Number(id));

                        setFormData({
                          ...formData,
                          doctorId: id,
                          doctor: doc?.name || "",
                          fee: doc?.fee || 0
                        });

                      }}
                      className="w-full h-12 px-4 border rounded-xl"
                    >

                      <option value="">Select Doctor</option>

                      {doctors.map(doc => (
                        <option key={doc.id} value={doc.id}>{doc.name}</option>
                      ))}

                    </select>

                    {/* DATE */}

                    <input
                      type="date"
                      value={formData.date}
                      min={getTodayDate()}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full h-12 px-4 border rounded-xl"
                    />

                    {/* SLOTS */}

                    <div className="grid grid-cols-3 gap-2">

                      {slots.length === 0 && (
                        <div className="col-span-3 text-gray-500">
                          No slots available
                        </div>
                      )}

                      {slots.map(slot => (

                        <button
                          key={slot.id}
                          onClick={() => {

                            setSelectedSlotId(slot.id);

                            setFormData({
                              ...formData,
                              time: slot.startTime
                            });

                          }}
                          className={`border p-2 rounded-xl
                            ${selectedSlotId === slot.id ? "bg-green-600 text-white" : ""}`}
                        >

                          {slot.startTime}

                        </button>

                      ))}

                    </div>

                    {/* CONTACT */}

                    <input
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="WhatsApp Number"
                      className="w-full h-12 px-4 border rounded-xl"
                    />

                    {/* CONSENT */}

                    <label className="flex gap-2">

                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                      />

                      I agree to consultation policy

                    </label>

                    <button
                      disabled={!validateStep1() || !isValidPhoneNumber(formData.contact) || isLoading}
                      onClick={lockSlot}
                      className="w-full h-12 bg-green-600 text-white rounded-xl"
                    >
                      {isLoading ? "Processing..." : "Continue"}
                    </button>

                  </div>

                )}

                {/* STEP 2 */}

                {step === 2 && (

                  <div>

                    <h2 className="text-2xl font-bold mb-6">
                      Confirm Appointment
                    </h2>

                    <p>Patient: {formData.patientName}</p>
                    <p>Date: {formData.date}</p>
                    <p>Time: {formData.time}</p>

                    <button
                      onClick={() => setStep(3)}
                      className="mt-4 bg-green-600 text-white px-6 py-2 rounded"
                    >
                      Proceed to Payment
                    </button>

                  </div>

                )}

                {/* STEP 3 */}

                {step === 3 && (

                  <div className="text-center">

                    <h2 className="text-2xl font-bold mb-6">
                      Consultation Fee ₹{formData.fee}
                    </h2>

                    <button
                      onClick={openPayment}
                      className="bg-green-600 text-white px-6 py-3 rounded"
                    >
                      Pay Now
                    </button>

                  </div>

                )}

                {/* STEP 4 */}

                {step === 4 && (

                  <div className="text-center">

                    <h2 className="text-2xl font-bold text-green-600">
                      Appointment Confirmed
                    </h2>

                    <p className="mt-4">
                      Booking ID: {appointmentId}
                    </p>

                    <p className="mt-2">
                      Doctor will contact you on WhatsApp
                    </p>

                  </div>

                )}

              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </div>

  );

};

export default BookConsultation;