import React from "react";
import Footer from "../../commoncomponents/Footer";
import Header from "../../commoncomponents/Header";
export default function TermsOfUse() { 
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-emerald-800 mb-6">Terms of Use</h1> 
                <p className="text-gray-700 mb-4">
                    Welcome to Harsha Multi Speciality Hospital's website. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our website.
                </p>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">1. Use of Website</h2>
                <p className="text-gray-700 mb-4">
                    You may use our website for lawful purposes only. You agree not to use our website in any way that could damage, disable, overburden, or impair the website or interfere with any other party's use and enjoyment of the website.
                </p>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">2. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                    All content on our website, including text, graphics, logos, images, and software, is the property of Harsha Multi Speciality Hospital or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content on our website without our express written permission.
                </p>   
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">3. Disclaimer of Warranties</h2>
                <p className="text-gray-700 mb-4">
                    Our website is provided on an "as is" and "as available" basis. Harsha Multi Speciality Hospital makes no representations or warranties of any kind, express or implied, regarding the operation of our website or the information, content, materials, or products included on our website.       
                </p>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">4. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">     
                    Harsha Multi Speciality Hospital shall not be liable for any damages of any kind arising from the use of our website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
                </p>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">5. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                    We reserve the right to update or change our Terms of Use at any time. Your continued use of our website after we post any modifications to the Terms of Use will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Terms of Use.
                </p>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">6. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms of Use, please contact us at       
                    <a href= '#'> Contact Us Page</a>.
                </p>
            </div>      
            <Footer />
        </div>
    )
}   