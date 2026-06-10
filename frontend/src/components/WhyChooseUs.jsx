import {
  FaCheckCircle,
  FaRupeeSign,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle size={40} />,
    title: "High Quality Printing",
    description:
      "Premium materials and sharp print quality for every product.",
  },
  {
    icon: <FaRupeeSign size={40} />,
    title: "Affordable Pricing",
    description:
      "Competitive pricing without compromising quality.",
  },
  {
    icon: <FaClock size={40} />,
    title: "Fast Delivery",
    description:
      "Quick turnaround and timely order completion.",
  },
  {
    icon: <FaMapMarkerAlt size={40} />,
    title: "Chennai Based Service",
    description:
      "Local support and easy communication for all projects.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-14">

          <p className="text-orange-500 uppercase tracking-widest font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Why Choose
            <span className="text-teal-800">
              {" "}Thulir Enterprises?
            </span>
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="
              bg-gray-50
              rounded-2xl
              p-8
              text-center
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
              hover:-translate-y-2
              "
            >
              <div className="flex justify-center text-orange-500 mb-5">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;