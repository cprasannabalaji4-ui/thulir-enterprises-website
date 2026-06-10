import { FaBullseye, FaEye } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div>
            <img
              src="/images/about.jpg"
              alt="Printing Machine"
              className="rounded-3xl shadow-lg w-full"
            />
          </div>

          {/* Right Content */}
          <div>

            <p className="text-orange-500 font-semibold tracking-widest uppercase">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Who <span className="text-teal-800">We Are</span>
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Thulir Enterprises is a Chennai-based printing service provider
              offering customized printing solutions for individuals,
              businesses and events.
            </p>

            <div className="w-16 h-1 bg-orange-500 mt-6 rounded-full"></div>

            <p className="text-gray-600 mt-6 leading-8">
              We specialize in high-quality, affordable and personalized
              printing services with fast delivery and customer satisfaction
              as our priority.
            </p>

            {/* Cards */}

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              <div className="bg-white shadow-lg border border-gray-100 p-6 rounded-2xl">

                <FaBullseye
                  className="text-orange-500 mb-4"
                  size={35}
                />

                <h3 className="font-bold text-xl mb-3">
                  Our Mission
                </h3>

                <p className="text-gray-600">
                  To deliver creative and reliable printing solutions that
                  bring customer ideas to life.
                </p>

              </div>

              <div className="bg-white shadow-lg border border-gray-100 p-6 rounded-2xl">

                <FaEye
                  className="text-orange-500 mb-4"
                  size={35}
                />

                <h3 className="font-bold text-xl mb-3">
                  Our Vision
                </h3>

                <p className="text-gray-600">
                  To become a trusted local brand for customized printing
                  services across Tamil Nadu.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;