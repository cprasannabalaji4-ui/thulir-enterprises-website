import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-5 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold">
              <span className="text-teal-400">
                Thulir
              </span>{" "}
              <span className="text-orange-500">
                Enterprises
              </span>
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Custom printing solutions for T-Shirts, Mugs,
              Caps, Corporate Gifts and Promotional Products.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>T-Shirt Printing</li>
              <li>Mug Printing</li>
              <li>Cap Printing</li>
              <li>Plate Printing</li>
              <li>Badge Printing</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <p className="flex items-center gap-3">
                <FaPhoneAlt />
                +91 9876543210
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope />
                info@thulirenterprises.com
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt />
                Chennai, Tamil Nadu
              </p>

            </div>

          </div>

        </div>

        {/* Social Icons */}

        <div className="flex justify-center gap-5 mt-12">

          <a
            href="#"
            className="bg-white text-black p-3 rounded-full hover:scale-110 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="bg-white text-black p-3 rounded-full hover:scale-110 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="bg-white text-black p-3 rounded-full hover:scale-110 transition"
          >
            <FaWhatsapp />
          </a>

        </div>

      </div>

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-5 py-5 text-center text-gray-500">

          © 2026 Thulir Enterprises.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;