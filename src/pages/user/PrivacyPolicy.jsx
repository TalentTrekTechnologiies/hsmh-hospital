import React from "react";
import Footer from "../../commoncomponents/Footer";
import Header from "../../commoncomponents/Header";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
        
        <h1 className="text-3xl font-bold text-emerald-800 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm mb-6">
          Effective Date: [Insert Effective Date]   {/*NEED TO ENTER DATE*/}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Who We Are</h2>
        <p>
          This website and appointment platform is operated by:
        </p>
        <p className="mt-2 font-medium">
          HARSHA MULTI SPECIALITY HOSPITAL
        </p>
        <p>
          Registered Address:<br />
          #2/207, Bollavaram, Jammalamadugu Bypass Road,<br />
          Proddatur, Kadapa – 516361<br />
          Andhra Pradesh, India<br />
          Email: harshamultispecialityhospital@gmail.com<br />
          Phone: 9640540475 / 9704100136
        </p>
        <p className="mt-2">
          The Hospital is responsible for handling your personal and medical information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
        <p>
          We collect only the information necessary to provide hospital and appointment services.
        </p>

        <h3 className="font-semibold mt-4">A. Contact Form</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Message</li>
        </ul>
        <p className="mt-2">
          This information is sent directly to the Hospital to respond to your enquiry.
        </p>

        <h3 className="font-semibold mt-4">B. Account Registration</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>Full Name</li>
          <li>Phone Number</li>
          <li>Email Address</li>
          <li>Date of Birth</li>
          <li>Gender</li>
          <li>Password</li>
        </ul>
        <p className="mt-2">
          You may also create additional patient profiles (for family members) under your account.
        </p>

        <h3 className="font-semibold mt-4">C. Appointment Booking</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>Selected patient profile</li>
          <li>Appointment date and time</li>
          <li>Reason for consultation</li>
          <li>Preferred WhatsApp number</li>
        </ul>
        <p className="mt-2">
          Users are responsible for providing accurate and truthful information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Medical Information Handling
        </h2>
        <ul className="list-disc ml-6">
          <li>The doctor may issue a prescription.</li>
          <li>Prescription details may be stored within the platform for record-keeping.</li>
        </ul>
        <p className="mt-2 font-medium">Important:</p>
        <ul className="list-disc ml-6">
          <li>Video calls are conducted through WhatsApp.</li>
          <li>This platform does NOT record or store consultation video calls.</li>
        </ul>
        <p className="mt-2">
          If the Hospital chooses to retain consultation recordings, they are stored independently under internal policies.
        </p>
        <p>
          Prescription records may be retained for up to 5 years in accordance with healthcare practices.
        </p>
        <p>
          Video recordings, if retained by the Hospital, may be stored for up to 6 months.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. How We Use Your Information</h2>
        <ul className="list-disc ml-6">
          <li>Schedule and manage appointments</li>
          <li>Maintain patient records</li>
          <li>Respond to enquiries</li>
          <li>Improve hospital operations</li>
        </ul>
        <p className="mt-2">
          We do NOT sell or rent personal information.
        </p>
        <p>
          We do NOT share personal data for marketing purposes.
        </p>
        <p>
          Personal data may only be disclosed where required by law.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Storage & Security</h2>
        <p>User login sessions expire after approximately 24 hours.</p>
        <p>Your data is stored on servers located in India.</p>
        <p>
          Hosting services are provided via Premium3 Web Hosting (shared hosting infrastructure through cPanel).
        </p>
        <p>
          The Hospital remains the data controller.
        </p>
        <p>
          While reasonable safeguards are implemented, no online system can guarantee complete security.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Account Inactivity & Deactivation
        </h2>
        <p>Accounts may be marked inactive after six (6) months of inactivity.</p>
        <p>
          Users may request account deactivation by contacting:
        </p>
        <p>
          harshamultispecialityhospital@gmail.com<br />
          9640540475
        </p>
        <p>
          Medical records may be retained where required under Indian healthcare laws.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Access to Data</h2>
        <p>
          Only authorized Hospital staff can access patient data.
        </p>
        <p>
          No personal data is shared with third parties for marketing purposes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Children’s Use</h2>
        <p>
          Users under 18 years must use this platform under supervision of a parent or legal guardian.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Policy Updates</h2>
        <p>
          This Privacy Policy may be updated periodically. Continued use indicates acceptance of revisions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h2>
        <p>
          HARSHA MULTI SPECIALITY HOSPITAL<br />
          #2/207, Bollavaram, Jammalamadugu Bypass Road<br />
          Proddatur, Kadapa – 516361<br />
          Andhra Pradesh, India<br />
          Email: harshamultispecialityhospital@gmail.com<br />
          Phone: 9640540475 / 9704100136
        </p>

      </div>
      <Footer />
    </div>
  );
}