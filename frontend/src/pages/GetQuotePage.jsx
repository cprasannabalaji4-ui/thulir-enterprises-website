import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Building2, User, Store, Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

function GetQuotePage() {
  const businessTypes = [
    {
      title: "Small Business",
      icon: Store,
      color: "green",
      description:
        "Shops, Startups, Local Brands and Small Scale Businesses",
      features: [
        "Low Minimum Quantity",
        "Affordable Pricing",
        "Quick Turnaround",
      ],
    },

    {
      title: "Individual",
      icon: User,
      color: "orange",
      description:
        "Personal Gifts, Events, Custom Orders and More",
      features: [
        "Custom Designs",
        "Personalized Printing",
        "Perfect For Any Occasion",
      ],
    },

    {
      title: "Corporate Companies",
      icon: Building2,
      color: "teal",
      description:
        "Companies, Organizations and Bulk Branding Solutions",
      features: [
        "Bulk Order Discounts",
        "Branding Solutions",
        "Dedicated Support",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="relative h-150 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?q=80&w=1600"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 h-full flex items-center">

          <div className="max-w-2xl">

            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">

              Get Your

              <span className="block text-green-400">
                Custom
              </span>

              Printing Quote

            </h1>

            <div className="w-24 h-1 bg-orange-500 mt-8 mb-8" />

            <p className="text-white/90 text-lg md:text-2xl leading-relaxed">

              Tell us about your requirements and receive a
              personalized quote tailored to your needs.

            </p>

          </div>

        </div>
      </section>

      {/* STEP TITLE */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center mb-14">

            <p className="font-semibold tracking-widest text-green-700">
              STEP 1
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mt-3">

              Choose Your

              <span className="text-green-700">
                {" "}
                Business Type
              </span>

            </h2>

            <div className="w-28 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />

          </div>

          {/* CARDS */}

          <div className="grid lg:grid-cols-3 gap-8">

            {businessTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-3xl
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-3
                    transition-all
                    duration-300
                    p-10
                    border
                  "
                >
                  <div className="flex justify-center">

                    <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center">

                      <Icon
                        size={55}
                        className="text-green-700"
                      />

                    </div>

                  </div>

                  <h3 className="text-3xl font-bold text-center mt-8">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-center mt-5 leading-8">
                    {item.description}
                  </p>

                  <div className="w-16 h-0.5 bg-orange-500 mx-auto my-8" />

                  <div className="space-y-4">

                    {item.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          size={20}
                          className="text-green-600"
                        />

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
  to={
    item.title === "Small Business"
      ? "/quote-form?type=small"
      : item.title === "Individual"
      ? "/quote-form?type=individual"
      : "/quote-form?type=corporate"
  }
>
  <button
    className="
      mt-10
      w-full
      bg-linear-to-r
      from-green-700
      to-green-900
      text-white
      py-4
      rounded-xl
      font-semibold
      flex
      items-center
      justify-center
      gap-3
      hover:scale-105
      transition
    "
  >
    Select This Option

    <ArrowRight size={20} />
  </button>
</Link>
                </div>
              );
            })}
          </div>

          {/* HELP SECTION */}

          <div className="mt-16 bg-white rounded-3xl shadow-lg p-8">

            <div className="grid md:grid-cols-3 gap-8">

              <div>
                <h3 className="text-3xl font-bold">
                  Not Sure Which Category To Choose?
                </h3>

                <p className="text-gray-600 mt-3">
                  Our team is ready to help you choose
                  the best solution for your needs.
                </p>
              </div>

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Phone className="text-green-700" />
                </div>

                <div>
                  <p className="font-semibold">Call Us</p>

                  <p className="text-2xl font-bold text-green-700">
                    9790654639
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                  <Mail className="text-orange-600" />
                </div>

                <div>
                  <p className="font-semibold">
                    Email Us
                  </p>

                  <p className="font-bold text-orange-600 break-all">
                    thulirenterprises4@gmail.com
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default GetQuotePage;