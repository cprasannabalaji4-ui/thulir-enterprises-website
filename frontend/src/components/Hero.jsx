import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="relative bg-linear-to-r from-black via-teal-950 to-black text-white overflow-hidden min-h-162.5"
    >
      <div className="max-w-7xl mx-auto px-5 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Thulir
              <br />
              <span className="text-orange-500">
                Enterprises
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl">
              Custom Printing Solutions for Everyday Needs
            </p>

            <p className="mt-4 text-orange-400 italic text-xl md:text-2xl">
              Turning Your Ideas into Printed Reality
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              {/* Get Quote Button */}
              <Link
                to="/getquote"
                className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-lg font-semibold text-center"
              >
                Get a Quote →
              </Link>

              {/* Contact Us Button */}
              <a
                href="#contact"
                className="border border-orange-500 hover:bg-orange-500 transition px-8 py-4 rounded-lg font-semibold text-center"
              >
                Contact Us
              </a>

            </div>
          </div>

<div className="flex justify-center lg:justify-end items-center">
  <img
    src="/images/hero-products.jpg"
    alt="Printing Products"
    className="w-full max-w-200 h-auto object-contain"
  />
</div>  

        </div>
      </div>
    </section>
  );
}

export default Hero;