import React from "react";
import Footer from "../../commoncomponents/Footer";
import Header from "../../commoncomponents/Header";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-10 pt-30 text-gray-800">

        <h1 className="text-3xl font-bold text-emerald-800 mb-2">
          Terms of Use & Medical Disclaimer
        </h1>  
        <p className="text-sm mb-6"> 
          Effective Date: [Insert Effective Date]   {/*NEED TO ENTER DATE*/}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance</h2>
        <p>
          By accessing this website or using the appointment system, you agree to these Terms of Use.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Nature of Services</h2>
        <ul className="list-disc ml-6">
          <li>Hospital information</li>
          <li>Appointment scheduling</li>
          <li>Coordination of virtual consultations</li>
        </ul>
        <p className="mt-2">
          All medical services are provided solely by HARSHA MULTI SPECIALITY HOSPITAL and its doctors.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Not for Emergency Use</h2>
        <p>
          This platform is not intended for emergency medical situations.
          If you are experiencing a medical emergency, immediately visit the nearest hospital or contact local emergency services in India.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Nature of Virtual Consultation</h2>
        <p>
          Virtual consultations provide preliminary medical guidance only.
          They may not replace physical examination.
          The doctor may advise in-person consultation where necessary.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. User Responsibilities</h2>
        <ul className="list-disc ml-6">
          <li>Provide accurate information</li>
          <li>Keep login credentials secure</li>
          <li>Update personal details when necessary</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Appointment Rules</h2>
        <p>
          Appointments may be rescheduled or cancelled.
          The Hospital may modify scheduling where necessary.
          Repeated misuse may result in account restriction.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Medical Responsibility</h2>
        <p>
          All medical advice, diagnosis, and prescriptions are provided solely by the Hospital and its doctors.
          The platform provider does not provide medical services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Prescription & Records</h2>
        <p>
          Prescription details may be stored for record-keeping.
          Consultation video recordings are not stored in this platform.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Limitation of Liability</h2>
        <p>
          The platform is provided on an “as available” basis.
          The Hospital does not guarantee uninterrupted or error-free service.
          Liability is limited to the extent permitted under applicable laws of India.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">10. Intellectual Property</h2>
        <p>
          All website content belongs to HARSHA MULTI SPECIALITY HOSPITAL unless otherwise stated.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">11. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India.
          Courts located in Proddatur, Kadapa District, Andhra Pradesh, India shall have exclusive jurisdiction.
        </p>

      </div>
      <Footer />
    </div>
  );
}