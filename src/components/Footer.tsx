import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const FooterForm = () => {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-24">
        {/* Left Section: Form */}
        <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <h2 className="text-2xl font-bold mb-6">Let's Discuss Projects</h2>
          <p className="text-gray-600 mb-8">
            Get in touch with us for any kind of help. We are here to give you
            the best and also here to help you to find your projects.
          </p>
          <form
            action="https://formspree.io/f/xdkovlww" // Replace {your-form-id} with your actual Formspree form ID
            method="POST"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              required
              className="w-full border border-gray-300 px-4 py-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              name="message"
              placeholder="Your message *"
              required
              rows={4}
              className="w-full border border-gray-300 px-4 py-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section: Contact Details */}
        <div>
          <h3 className="text-5xl font-bold mb-6">Let's Discuss Your Project</h3>
          <ul className="space-y-4 mb-20">
            <li className="flex items-start space-x-3">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <h4 className="font-semibold">Mail</h4>
                <p>ismailaitrehail2830@gmail.com</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>0651233514</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FooterForm;
