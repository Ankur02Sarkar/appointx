"use client";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy - AppointX";
    return () => {
      document.title = "AppointX";
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700">
            Welcome to AppointX. Your privacy is critically important to us.
            This Privacy Policy explains what information we collect when you
            use our services, how we use it, and the steps we take to ensure it
            is protected.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Data Collection</h2>
          <p className="text-gray-700">
            We collect various types of information in connection with the
            services we provide, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>
              Personal data such as name, email address, and contact
              information.
            </li>
            <li>
              Appointments data such as appointment details and preferences.
            </li>
            <li>
              Device and usage data, including IP addresses and browsing
              patterns.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Use of Data</h2>
          <p className="text-gray-700">
            The data we collect is used for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>To facilitate and improve our scheduling services.</li>
            <li>To provide customer support and respond to your inquiries.</li>
            <li>To analyze usage trends and improve our platform.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Data Sharing</h2>
          <p className="text-gray-700">
            We do not share your personal data with third parties except in the
            following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>With your consent or as necessary to provide our services.</li>
            <li>
              To comply with legal obligations or respond to lawful requests.
            </li>
            <li>
              With service providers that assist in delivering our services
              (e.g., hosting providers).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Data Security</h2>
          <p className="text-gray-700">
            We take the security of your data seriously and implement
            industry-standard measures to protect it from unauthorized access,
            alteration, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, correct, or delete your personal data.
            If you wish to exercise these rights, please contact us at
            privacy@appointx.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Changes to this Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by posting the updated policy on our
            website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
            <br />
            <a
              href="mailto:privacy@appointx.com"
              className="text-blue-600 underline"
            >
              privacy@appointx.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
