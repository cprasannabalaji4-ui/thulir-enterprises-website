import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "T-Shirt Printing",
    image: "/images/tshirt.jpg",
    link: "/tshirt-printing",
  },
  {
    title: "Mug Printing",
    image: "/images/mug.png",
    link: "/mug-printing",
  },
  {
    title: "Cap Printing",
    image: "/images/cap.jpg",
    link: "/cap-printing",
  },
  {
    title: "Plate Printing",
    image: "/images/plate.jpg",
    link: "/plate-printing",
  },
  {
    title: "Badges",
    image: "/images/badges.jpg",
    link: "/badge-printing",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-14">

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Printing Solutions Crafted
            <br />
            For Every Need
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

        </div>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          gap-6
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-md
              hover:shadow-2xl
              transition-all
              duration-300
              hover:-translate-y-2
              "
            >
              <img
                src={service.image}
                alt={service.title}
                className="
                h-56
                w-full
                object-cover
                "
              />

              <div className="p-5 text-center">

                <h3 className="font-bold text-lg">
                  {service.title}
                </h3>

                <Link
                  to={service.link}
                  className="
                  mt-4
                  inline-block
                  text-orange-500
                  font-semibold
                  hover:text-orange-600
                  transition-all
                  duration-300
                  "
                >
                  Learn More →
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;