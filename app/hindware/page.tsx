"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
// import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

const categories = [
  { id: "bathware", name: "Bathware", count: 24 },
  { id: "sanitaryware", name: "Sanitaryware", count: 18 },
  { id: "faucets", name: "Faucets & Showers", count: 32 },
  { id: "tiles", name: "Tiles & Doors", count: 28 },
];

const products = [
  {
    id: 1,
    category: "bathware",
    name: "Premium Bathtubs",
    description: "Luxurious bathtubs with modern designs and superior comfort.",
    price: "₹15,000 - ₹45,000",
    image: "/modern-luxury-bathtub.jpg",
  },
  {
    id: 2,
    category: "sanitaryware",
    name: "Designer Wash Basins",
    description: "Contemporary wash basins in various sizes and finishes.",
    price: "₹5,000 - ₹18,000",
    image: "/modern-ceramic-wash-basin.jpg",
  },
  {
    id: 3,
    category: "faucets",
    name: "Thermostatic Mixers",
    description: "Advanced thermostatic mixers with temperature control.",
    price: "₹8,000 - ₹22,000",
    image: "/chrome-thermostatic-mixer-faucet.jpg",
  },
  {
    id: 4,
    category: "faucets",
    name: "Rainfall Showers",
    description: "Luxurious rainfall shower heads for spa-like experience.",
    price: "₹6,000 - ₹16,000",
    image: "/modern-rainfall-shower-head.jpg",
  },
  {
    id: 5,
    category: "tiles",
    name: "Ceramic Wall Tiles",
    description: "Premium ceramic tiles with elegant patterns and finishes.",
    price: "₹200 - ₹800 per sq.ft",
    image: "/modern-ceramic-bathroom-tiles.jpg",
  },
  {
    id: 6,
    category: "tiles",
    name: "Wooden Doors",
    description: "High-quality wooden doors with contemporary designs.",
    price: "₹12,000 - ₹35,000",
    image: "/modern-wooden-door-design.jpg",
  },
  {
    id: 7,
    category: "bathware",
    name: "Shower Enclosures",
    description: "Frameless and framed shower enclosures with safety glass.",
    price: "₹20,000 - ₹60,000",
    image: "/modern-glass-shower-enclosure.jpg",
  },
  {
    id: 8,
    category: "sanitaryware",
    name: "Water Closets",
    description: "Modern water closets with dual flush and soft-close seats.",
    price: "₹8,000 - ₹25,000",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function Hindware() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-primary to-secondary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hindware Products
            </h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Official Hindware dealership offering the complete range of
              premium bathware, sanitaryware, and bathroom solutions.
            </p>
          </div>
        </section>

        {/* Categories & Products */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`p-4 rounded-lg font-medium transition-colors ${
                    selectedCategory === null
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  All Products
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`p-4 rounded-lg font-medium transition-colors ${
                      selectedCategory === cat.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-40 bg-muted overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-accent font-semibold mb-1 uppercase">
                      {product.category}
                    </p>
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <p className="font-semibold text-primary mb-4">
                      {product.price}
                    </p>
                    <Button className="w-full" size="sm">
                      <Link href="/contact">Inquire Now</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Expert Advice?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our Hindware specialists can help you choose the perfect products
              for your bathroom.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Expert Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
