import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  const phNumber = process.env.NEXT_PUBLIC_PH_NUMBER || "N/A";
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "N/A";
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Our Company";
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{companyName}</h3>
            <p className="text-sm opacity-90 mb-4">
              Premium iron fabrication and official Hindware dealership serving
              quality and excellence.
            </p>
            <div className="flex gap-4">
              <a
                target="_blank"
                href="https://www.facebook.com/annapurnaempire/"
                className="hover:opacity-80 transition-opacity"
              >
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram size={20} />
              </a>
              {/* <a href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:opacity-80 transition-opacity"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/iron-fabrication"
                  className="hover:opacity-80 transition-opacity"
                >
                  Iron Works
                </Link>
              </li>
              <li>
                <Link
                  href="/hindware-products"
                  className="hover:opacity-80 transition-opacity"
                >
                  Hindware
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/hindware-products?category=bathware"
                  className="hover:opacity-80 transition-opacity"
                >
                  Bathware
                </Link>
              </li>
              <li>
                <Link
                  href="/hindware-products?category=faucets"
                  className="hover:opacity-80 transition-opacity"
                >
                  Faucets & Showers
                </Link>
              </li>
              <li>
                <Link
                  href="/hindware-products?category=tiles"
                  className="hover:opacity-80 transition-opacity"
                >
                  Tiles & Doors
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:opacity-80 transition-opacity"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>
                  {" "}
                  Samri Road Kusmi, Distt. - Balrampur (C.G.) 497224{" "}
                </span>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="shrink-0 mt-0.5" />
                <a
                  href="tel:+919876543210"
                  className="hover:opacity-80 transition-opacity"
                >
                  {phNumber}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="shrink-0 mt-0.5" />
                <a
                  href="mailto:info@ironhindware.com"
                  className="hover:opacity-80 transition-opacity"
                >
                  {emailAddress}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>© 2025 {companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
