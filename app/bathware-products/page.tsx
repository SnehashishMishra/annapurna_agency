"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Droplet, Wind, Zap, Shield } from "lucide-react";
import { useState } from "react";

export default function HindwareProducts() {
  const phNumber = process.env.NEXT_PUBLIC_PH_NUMBER || "";
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "bathware", name: "Bathware", icon: "🛁" },
    { id: "faucets", name: "Faucets & Showers", icon: "🚿" },
    { id: "tiles", name: "Tiles & Doors", icon: "🪟" },
    { id: "accessories", name: "Accessories", icon: "✨" },
  ];

  const products = [
    {
      id: 1,
      category: "bathware",
      name: "Luxury Bathtubs",
      description: "Premium acrylic and ceramic bathtubs with modern designs",
      image: "/modern-luxury-bathtub.jpg",
      features: ["Durable acrylic", "Modern designs", "Easy maintenance"],
      price: "₹15,000 - ₹45,000",
    },
    {
      id: 2,
      category: "bathware",
      name: "Sanitaryware Suite",
      description:
        "Complete bathroom sanitaryware including WC, basin, and bidet",
      image: "/bathroom-sanitaryware.jpg",
      features: ["Ceramic quality", "Water-efficient", "Elegant finish"],
      price: "₹8,000 - ₹25,000",
    },
    {
      id: 3,
      category: "faucets",
      name: "Designer Faucets",
      description: "Contemporary faucet designs for sinks and wash basins",
      image: "/modern-designer-faucet.jpg",
      features: ["Chrome finish", "Smooth operation", "Leak-proof"],
      price: "₹3,000 - ₹12,000",
    },
    {
      id: 4,
      category: "faucets",
      name: "Rainfall Showerheads",
      description: "Luxurious rainfall shower systems with adjustable flow",
      image: "/rainfall-shower-head.jpg",
      features: ["Wide coverage", "Water-saving", "Easy installation"],
      price: "₹5,000 - ₹18,000",
    },
    {
      id: 5,
      category: "faucets",
      name: "Thermostatic Mixers",
      description:
        "Smart temperature control mixers for safe and comfortable bathing",
      image: "/chrome-thermostatic-mixer-faucet.jpg",
      features: ["Temperature control", "Safety certified", "Durable"],
      price: "₹4,500 - ₹14,000",
    },
    {
      id: 6,
      category: "tiles",
      name: "Ceramic Tiles",
      description: "Premium ceramic tiles for bathrooms and kitchens",
      image: "/ceramic-bathroom-tiles.jpg",
      features: ["Slip-resistant", "Easy to clean", "Variety of designs"],
      price: "₹200 - ₹800 per sq.ft",
    },
    {
      id: 7,
      category: "tiles",
      name: "Wooden Doors",
      description:
        "High-quality wooden doors with modern and traditional designs",
      image: "/wooden-door-design.jpg",
      features: ["Solid wood", "Weather-resistant", "Custom sizes"],
      price: "₹8,000 - ₹35,000",
    },
    {
      id: 8,
      category: "accessories",
      name: "Bathroom Accessories",
      description:
        "Complete range of towel racks, soap dispensers, and mirrors",
      image: "/bathroom_accessories.png",
      features: ["Stainless steel", "Modern designs", "Durable"],
      price: "₹500 - ₹5,000",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const features = [
    {
      icon: Droplet,
      title: "Water-Efficient",
      description:
        "All products designed to conserve water without compromising performance",
    },
    {
      icon: Wind,
      title: "Premium Quality",
      description:
        "Official Hindware products with guaranteed authenticity and warranty",
    },
    {
      icon: Zap,
      title: "Modern Design",
      description:
        "Contemporary designs that complement any bathroom aesthetic",
    },
    {
      icon: Shield,
      title: "Certified Safe",
      description:
        "All products meet international safety and quality standards",
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-linear-to-br from-secondary via-primary to-secondary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Premium Hindware Products
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Official Hindware dealership offering premium bathware, faucets,
                tiles, and complete bathroom solutions for modern living.
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
              Our Collection
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
                    <p className="text-sm text-muted-foreground mb-3">
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
                    <div className="mb-4 p-3 bg-muted rounded-lg">
                      <p className="text-sm font-semibold text-accent">
                        {product.price}
                      </p>
                    </div>
                    <button className="w-full py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                      Inquire Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Hindware Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Choose Hindware?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-accent-foreground">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Trusted Brand</h3>
                    <p className="text-muted-foreground">
                      Hindware is a leading brand in India with decades of
                      experience in bathroom and kitchen solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-accent-foreground">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Wide Range</h3>
                    <p className="text-muted-foreground">
                      Extensive collection of products to suit every budget and
                      design preference.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-accent-foreground">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Warranty Support</h3>
                    <p className="text-muted-foreground">
                      Comprehensive warranty and after-sales support for all
                      products.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-accent-foreground">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      Expert Consultation
                    </h3>
                    <p className="text-muted-foreground">
                      Our team provides expert advice to help you choose the
                      right products for your space.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-accent-foreground">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      Competitive Pricing
                    </h3>
                    <p className="text-muted-foreground">
                      Best prices in the market with regular offers and
                      discounts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-accent-foreground">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      Installation Service
                    </h3>
                    <p className="text-muted-foreground">
                      Professional installation service available for all major
                      products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Transform Your Bathroom Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Explore our complete range of Hindware products and create your
              dream bathroom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get Consultation
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
