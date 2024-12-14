"use client";

import { Code, Paintbrush, Search } from "lucide-react";

const services = [
  {
    title: "Web Design",
    description:
      "I create visually stunning and responsive websites tailored to your brand and audience. With a focus on functionality and aesthetics, I design intuitive websites that provide seamless user experiences across all devices.",
    icon: <Code className="w-8 h-8 text-black" />,
  },
  {
    title: "UI/UX Designer",
    description:
      "As a UI/UX designer, I craft user-centered interfaces that enhance usability and improve the overall user experience. I prioritize clear navigation and visually engaging designs to create websites and apps that are both beautiful and easy to use.",
    icon: <Paintbrush className="w-8 h-8 text-black" />,
  },
  {
    title: "User Research",
    description:
      "I conduct in-depth user research to gain valuable insights into your audience’s needs and behaviors. By understanding user pain points and motivations, I help create data-driven designs that provide effective and user-friendly solutions.",
    icon: <Search className="w-8 h-8 text-black" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3  className="text-4xl font-bold text-center mb-8"
        style={{ fontFamily: "'Sour Gummy', cursive" }}>
            Services
          </h3>
          <h2 className="text-2xl font-bold text-gray-900 leading-tight mt-2">
            Get a powerful website that delivers results with an all in one
            solution
          </h2>
        </div>

        {/* Services List */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
