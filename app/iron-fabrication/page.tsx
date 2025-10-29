"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Clock, Users } from "lucide-react";
import { useState } from "react";

export default function IronFabrication() {
  const phNumber = process.env.NEXT_PUBLIC_PH_NUMBER || "";
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "gates", name: "Gates & Doors", icon: "🚪" },
    { id: "railings", name: "Railings", icon: "🛡️" },
    { id: "grills", name: "Grills & Windows", icon: "🪟" },
    { id: "custom", name: "Custom Work", icon: "✨" },
  ];

  const products = [
    {
      id: 1,
      category: "gates",
      name: "Decorative Iron Gates",
      description:
        "Custom designed entrance gates with intricate patterns and finishes",
      image: "/decorative_iron_gates.png",
      features: ["Custom designs", "Weather-resistant", "Durable finish"],
    },
    {
      id: 2,
      category: "gates",
      name: "Sliding Iron Gates",
      description:
        "Modern sliding gates perfect for residential and commercial spaces",
      image: "/sliding_iron_gates.png",
      features: ["Smooth operation", "Space-saving", "Secure locking"],
    },
    {
      id: 3,
      category: "railings",
      name: "Staircase Railings",
      description: "Elegant iron railings for staircases with safety and style",
      image: "/staircase_railings.png",
      features: ["Safety certified", "Elegant designs", "Easy maintenance"],
    },
    {
      id: 4,
      category: "railings",
      name: "Balcony Railings",
      description: "Sturdy and stylish railings for balconies and terraces",
      image: "/balcony_railings.png",
      features: ["Weather-proof", "Modern designs", "Rust-resistant"],
    },
    {
      id: 5,
      category: "grills",
      name: "Window Grills",
      description:
        "Protective and decorative window grills for homes and offices",
      image: "/window_grill.png",
      features: ["Security focused", "Ventilation friendly", "Customizable"],
    },
    {
      id: 6,
      category: "grills",
      name: "Door Grills",
      description:
        "Secure door grills combining protection with aesthetic appeal",
      image: "/door_grill.png",
      features: ["High security", "Easy operation", "Stylish designs"],
    },
    {
      id: 7,
      category: "custom",
      name: "Architectural Elements",
      description: "Bespoke iron work for unique architectural requirements",
      image: "/architectural_elements.png",
      features: [
        "Fully customizable",
        "Expert craftsmanship",
        "Unique designs",
      ],
    },
    {
      id: 8,
      category: "custom",
      name: "Decorative Screens",
      description: "Ornamental iron screens for interior and exterior spaces",
      image: "/decorative_screen.png",
      features: ["Artistic designs", "Space dividers", "Privacy solutions"],
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const features = [
    {
      icon: Zap,
      title: "Expert Craftsmanship",
      description:
        "Years of experience in precision iron fabrication and welding",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every piece undergoes rigorous quality checks and testing",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We meet deadlines without compromising on quality",
    },
    {
      icon: Users,
      title: "Custom Solutions",
      description: "Tailored designs to match your specific requirements",
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
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Premium Iron Fabrication
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Custom-designed iron work for residential and commercial
                projects. From gates to railings, we deliver excellence in every
                piece.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="p-6 bg-muted rounded-xl text-center hover:shadow-lg transition-shadow"
                >
                  <feature.icon
                    className="text-accent mx-auto mb-4"
                    size={40}
                  />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Products
            </h2>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === "all"
                    ? "bg-accent text-accent-foreground"
                    : "bg-white text-foreground hover:bg-muted-foreground/10"
                }`}
              >
                All Products
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-white text-foreground hover:bg-muted-foreground/10"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <a href="/contact">
                      <button className="w-full py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                        Get Quote
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  desc: "Discuss your requirements and vision",
                },
                {
                  step: "02",
                  title: "Design",
                  desc: "Create custom designs tailored to you",
                },
                {
                  step: "03",
                  title: "Fabrication",
                  desc: "Expert craftsmanship and precision work",
                },
                {
                  step: "04",
                  title: "Installation",
                  desc: "Professional installation and finishing",
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="text-5xl font-bold text-accent/20 mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 -right-4 text-accent/30">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free consultation and custom quote for your iron fabrication
              needs.
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
    </>
  );
}
