"use client";

import type React from "react";
import emailjs from "@emailjs/browser";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const phNumber = process.env.NEXT_PUBLIC_PH_NUMBER;
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });

          setTimeout(() => {
            setSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.error("Email send failed ❌", error);
          setSubmitted(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: " Samri Road Kusmi, Distt. - Balrampur (C.G.) 497224",
    },
    {
      icon: Phone,
      title: "Phone",
      details: phNumber || "N/A",
    },
    {
      icon: Mail,
      title: "Email",
      details: emailAddress,
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 8:00 PM, Sun: Closed",
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-linear-to-br from-primary via-secondary to-primary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Get in Touch
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Have questions about our iron fabrication or Hindware products?
                We'd love to hear from you. Contact us today for a free
                consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="p-6 bg-muted rounded-xl text-center hover:shadow-lg transition-shadow"
                >
                  <info.icon className="text-accent mx-auto mb-4" size={40} />
                  <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {info.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="text-green-600 font-semibold mb-2">
                      Message Sent Successfully!
                    </div>
                    <p className="text-green-700">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select a subject</option>
                        <option value="iron-fabrication">
                          Iron Fabrication Inquiry
                        </option>
                        <option value="hindware-products">
                          Hindware Products
                        </option>
                        <option value="custom-project">Custom Project</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Map and Additional Info */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
                  <p className="text-muted-foreground mb-6">
                    We typically respond to inquiries within 24 hours. For
                    urgent matters, please call us directly or use WhatsApp.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors text-center"
                    >
                      Chat on WhatsApp
                    </a>
                    <a
                      href={`tel:+${phNumber}`}
                      className="block w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
                    >
                      Call Us Now
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-md">
                  <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Residential Projects
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Commercial Installations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Custom Fabrication
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Maintenance & Repair
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
