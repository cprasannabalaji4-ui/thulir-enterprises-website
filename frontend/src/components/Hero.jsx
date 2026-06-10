function Hero() {
  return (
    <section
      id="home"
      className="bg-linear-to-r from-black via-teal-950 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-5 py-16 lg:py-24">

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

              <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-lg font-semibold">
                Get a Quote →
              </button>

              <button className="border border-orange-500 hover:bg-orange-500 transition px-8 py-4 rounded-lg font-semibold">
                Contact Us
              </button>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">

            <img
              src="/images/hero-products.png"
              alt="Printing Products"
              className="w-full max-w-xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;