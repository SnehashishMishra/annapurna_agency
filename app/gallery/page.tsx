"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const phNumber = process.env.NEXT_PUBLIC_PH_NUMBER;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      category: "iron-work",
      title: "Modern Iron Gates",
      description:
        "Custom designed decorative iron gates with intricate patterns",
      image: "/modern-iron-gates-and-railings.jpg",
    },
    {
      id: 2,
      category: "iron-work",
      title: "Professional Workshop",
      description:
        "State-of-the-art fabrication workshop with expert craftsmen",
      image: "/shop-image-2.jpg",
    },
    {
      id: 3,
      category: "iron-work",
      title: "Decorative Gate Design",
      description: "Intricate decorative iron gate with artistic patterns",
      image: "/decorative_iron_gates.png",
    },
    {
      id: 4,
      category: "iron-work",
      title: "Modern Window Grills",
      description:
        "Contemporary window grills combining security and aesthetics",
      image: "/modern-window-grills.jpg",
    },
    {
      id: 5,
      category: "iron-work",
      title: "Elegant Staircase Railings",
      description: "Premium staircase railings with elegant iron work",
      image: "/staircase_railings.png",
    },
    {
      id: 6,
      category: "iron-work",
      title: "Custom Iron Structure",
      description: "Bespoke iron structure for architectural requirements",
      image: "/decorative_screen.png",
    },
    {
      id: 7,
      category: "iron-work",
      title: "Sliding Iron Gate",
      description: "Modern sliding gate system with smooth operation",
      image: "/sliding_iron_gates.png",
    },
    {
      id: 8,
      category: "iron-work",
      title: "Balcony Railings",
      description:
        "Sturdy and stylish balcony railings with weather-resistant finish",
      image: "/balcony-railings.jpg",
    },
    {
      id: 9,
      category: "hindware",
      title: "Luxury Bathtub",
      description: "Premium luxury bathtub with modern design",
      image: "/modern-luxury-bathtub.jpg",
    },
    {
      id: 10,
      category: "hindware",
      title: "Designer Faucet",
      description: "Contemporary designer faucet with chrome finish",
      image: "/modern-designer-faucet.jpg",
    },
    {
      id: 11,
      category: "hindware",
      title: "Rainfall Shower",
      description: "Luxurious rainfall shower head with adjustable flow",
      image: "/rainfall-shower-head.jpg",
    },
    {
      id: 12,
      category: "hindware",
      title: "Ceramic Tiles",
      description: "Premium ceramic tiles for bathrooms and kitchens",
      image: "/ceramic-bathroom-tiles.jpg",
    },
    {
      id: 13,
      category: "hindware",
      title: "Wooden Door",
      description: "High-quality wooden door with modern design",
      image: "/wooden-door-design.jpg",
    },
    {
      id: 14,
      category: "hindware",
      title: "Sanitaryware Suite",
      description: "Complete bathroom sanitaryware collection",
      image: "/bathroom-sanitaryware.jpg",
    },
    {
      id: 15,
      category: "hindware",
      title: "Thermostatic Mixer",
      description: "Smart temperature control mixer for safe bathing",
      image: "/chrome-thermostatic-mixer-faucet.jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

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
                Our Work Gallery
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Explore our portfolio of premium iron fabrication projects and
                Hindware installations showcasing quality craftsmanship and
                design excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === "all"
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setSelectedCategory("iron-work")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === "iron-work"
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Iron Fabrication
              </button>
              <button
                onClick={() => setSelectedCategory("hindware")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === "hindware"
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Hindware Products
              </button>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-accent mb-2">5000+</div>
                <p className="text-lg text-muted-foreground">
                  Projects Completed
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-accent mb-2">1000+</div>
                <p className="text-lg text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-accent mb-2">20+</div>
                <p className="text-lg text-muted-foreground">
                  Years of Experience
                </p>
              </div>
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
              Let us bring your vision to life with our expert craftsmanship and
              premium products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Us
              </a>
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
