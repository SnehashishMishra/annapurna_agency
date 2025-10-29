"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Award, Users, Zap, Heart } from "lucide-react";
import Link from "next/link";

export default function About() {
  const phNumber = process.env.NEXT_PUBLIC_PH_NUMBER || "";
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "";
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in craftsmanship and product quality",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority in every project we undertake",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay updated with latest techniques and design trends",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We believe in honest dealings and transparent communication",
    },
  ];

  const team = [
    {
      name: "Shatrughan Kumar",
      role: "Master Craftsman",
      experience: "25+ years in iron fabrication",
    },
    {
      name: "Amit Sahu",
      role: "Operations Manager",
      experience: "15+ years as sales and operations head",
    },
    {
      name: "Nath Dev",
      role: "Accountant",
      experience: "12+ years in Accounting",
    },
    {
      name: "Biju Singh",
      role: "Helper Staff",
      experience: "10+ years in service",
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
                About {companyName}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Your trusted partner for premium iron fabrication and official
                Hindware dealership since 2002.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Founded in 2002, {companyName} started as a small iron
                  fabrication workshop with a vision to deliver premium quality
                  products and services. Over the years, we've grown into a
                  trusted name in the industry, serving thousands of satisfied
                  customers.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our journey has been marked by continuous innovation,
                  dedication to excellence, and a commitment to customer
                  satisfaction. We've expanded our services to include an
                  official Hindware dealership, bringing premium bathroom and
                  kitchen solutions to our clients.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we pride ourselves on our team of skilled craftsmen,
                  state-of-the-art facilities, and a portfolio of over 500
                  completed projects that showcase our expertise and passion for
                  quality.
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-accent to-accent/50 rounded-2xl blur-2xl opacity-30"></div>
                <img
                  src="/shop-image-2.jpg"
                  alt="Our workshop"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
                >
                  <value.icon className="text-accent mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-accent mb-2">20+</div>
                <p className="text-lg text-muted-foreground">
                  Years of Experience
                </p>
              </div>
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
                <div className="text-5xl font-bold text-accent mb-2">50+</div>
                <p className="text-lg text-muted-foreground">Team Members</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-24 h-24 bg-linear-to-br from-accent to-accent/50 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-accent mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.experience}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Expert Craftsmanship",
                  description:
                    "Our team consists of highly skilled craftsmen with years of experience in iron fabrication and installation.",
                },
                {
                  title: "Quality Assurance",
                  description:
                    "Every project undergoes rigorous quality checks to ensure it meets our high standards and your expectations.",
                },
                {
                  title: "Official Hindware Dealer",
                  description:
                    "We are an authorized Hindware dealership, guaranteeing authentic products with full warranty support.",
                },
                {
                  title: "Timely Delivery",
                  description:
                    "We respect your time and ensure all projects are completed and delivered on schedule without compromises.",
                },
                {
                  title: "Custom Solutions",
                  description:
                    "We offer fully customizable designs tailored to your specific requirements and aesthetic preferences.",
                },
                {
                  title: "After-Sales Support",
                  description:
                    "Our commitment doesn't end with installation. We provide comprehensive maintenance and support services.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-accent-foreground">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and bring your vision to life with our
              expertise and quality.
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
