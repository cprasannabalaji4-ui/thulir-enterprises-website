import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#021615] via-[#063A39] to-[#021615] text-white"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[180px]" />
      <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-teal-500/10 blur-[160px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-900/40 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-orange-400"></span>

              <span className="text-sm font-semibold tracking-[3px] uppercase">
                Premium Printing Solutions
              </span>
            </div>

            <h1 className="text-5xl font-black leading-none md:text-7xl">
              Thulir
              <br />
              <span className="text-orange-500">
                Enterprises
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-300">
              We deliver premium quality custom printing solutions for
              T-Shirts, Mugs, Caps, Badges, Plates and promotional
              products with creative designs and exceptional finishing.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-10 w-1 rounded bg-orange-500"></div>

              <p className="text-2xl italic text-orange-400">
                Turning Your Ideas into Printed Reality
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                to="/get-quote"
                className="rounded-xl bg-orange-500 px-8 py-4 font-bold transition hover:scale-105 hover:bg-orange-600"
              >
                Get Quote →
              </Link>

              <a
                href="#services"
                className="rounded-xl border border-orange-500 px-8 py-4 font-bold transition hover:bg-orange-500"
              >
                Explore Services →
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            {/* Glow Circle */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-400/40"></div>

            {/* Product Card */}
            <div className="rounded-[35px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">

              <img
                src="/images/hero-products.png"
                alt="Products"
                className="mx-auto w-full max-w-[650px] object-contain"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}