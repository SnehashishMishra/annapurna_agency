"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import {
  ArrowRight,
  Hammer,
  Droplet,
  Star,
  MessageCircleMore,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const phNumber = process.env.NEXT_PUBLIC_PH_NUMBER || "+919876543210";
  const [showInquiry, setShowInquiry] = useState(false);

  const testimonials = [
    {
      name: "Md. Taffajul",
      role: "Homeowner",
      text: "Excellent craftsmanship on the iron gates. The team was professional and delivered on time.",
      rating: 5,
    },
    {
      name: "Aditya Mishra",
      role: "Interior Designer",
      text: "The products are premium quality. Great selection and competitive pricing.",
      rating: 5,
    },
    {
      name: "Amit Shah",
      role: "Architect",
      text: "Custom iron work exceeded expectations. Highly recommend for any fabrication project.",
      rating: 5,
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen bg-linear-to-br from-primary via-secondary to-primary overflow-hidden flex items-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Crafted Excellence in Iron & Hindware
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Premium custom iron fabrication and official Hindware
                  dealership. Transform your spaces with quality and precision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/iron-fabrication"
                    className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Explore Iron Works <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/hindware-products"
                    className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Hindware Products <ArrowRight size={20} />
                  </Link>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-br from-accent to-accent/50 rounded-2xl blur-2xl opacity-30"></div>
                  <img
                    src="/shop-image-1.png"
                    alt="Iron fabrication showcase"
                    className="relative rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link
                href="/iron-fabrication"
                className="group p-8 bg-linear-to-br from-primary to-secondary rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                    <Hammer className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Iron Fabrication
                    </h3>
                    <p className="text-white/80 mb-4">
                      Custom gates, grills, railings, and bespoke iron
                      structures crafted with precision.
                    </p>
                    <span className="text-accent font-semibold flex items-center gap-2">
                      Learn More <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href="/hindware-products"
                className="group p-8 bg-linear-to-br from-secondary to-primary rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                    <Droplet className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Hindware Products
                    </h3>
                    <p className="text-white/80 mb-4">
                      Premium bathware, faucets, tiles, and complete bathroom
                      solutions from Hindware.
                    </p>
                    <span className="text-accent font-semibold flex items-center gap-2">
                      Explore <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Hammer,
                  title: "Expert Craftsmanship",
                  desc: "Years of experience in custom iron fabrication",
                },
                {
                  icon: Star,
                  title: "Premium Quality",
                  desc: "Official Hindware dealership with authentic products",
                },
                {
                  icon: Droplet,
                  title: "Complete Solutions",
                  desc: "From design to installation, we handle everything",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-8 bg-white rounded-xl text-center hover:shadow-lg transition-shadow"
                >
                  <feature.icon
                    className="text-accent mx-auto mb-4"
                    size={40}
                  />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Customer Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="p-8 bg-muted rounded-xl">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star
                        key={j}
                        size={18}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with us for custom quotes and consultations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
              <a
                href={`https://wa.me/${phNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-10 h-10 bg-[#25D366] text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40 p-5"
        title="Chat on WhatsApp"
      >
        <div className="w-7 h-7">
          <MessageCircleMore />
        </div>
      </a>
    </>
  );
}
