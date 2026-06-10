
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

function BadgePage() {
  const variants = [
    { name: "Round Badge", price: "₹20" },
    { name: "Photo Badge", price: "₹30" },
    { name: "School Badge", price: "₹40" },
    { name: "Corporate Name Badge", price: "₹50" },
    { name: "Metal Badge", price: "₹99" },
    { name: "Premium Custom Badge", price: "₹149" },
  ];

  return (
    <>
      <Navbar />

<Breadcrumb currentPage="Badge Printing" />

      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="/images/badge-banner.jpg"
            alt="Badge Printing Banner"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Badge Printing
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl">
            Custom badges for schools, colleges, events,
            businesses and branding purposes.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Product Image */}
            <div>
              <img
                src="/images/badge-main.jpg"
                alt="Badge Printing"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            {/* Pricing Table */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-3xl font-bold text-green-900 mb-2">
                Badge Printing
              </h2>

              <p className="text-gray-600 mb-6">
                High-quality custom badge printing with
                durable materials and vibrant designs.
              </p>

              <div className="overflow-hidden rounded-xl border">

                <div className="bg-green-900 text-white flex justify-between px-5 py-3 font-semibold">
                  <span>Badge Type</span>
                  <span>Starting Price</span>
                </div>

                {variants.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between px-5 py-4 border-b last:border-b-0"
                  >
                    <span>{item.name}</span>

                    <span className="font-bold text-orange-500">
                      {item.price}
                    </span>
                  </div>
                ))}

              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4 mt-8">

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ Premium Quality Material
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ HD Printing
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ Bulk Orders Available
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ Fast Delivery
                </div>

              </div>

              <div className="mt-8">
                <Link
                 to="/order/badge"
                 className="inline-block bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
                 >
                 Get Quote →
                 </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">

          <h2 className="text-4xl font-bold text-center mb-10">
            Sample Badge Designs
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="/images/badge-gallery1.jpg"
              alt="Badge Sample 1"
              className="rounded-2xl shadow-md"
            />

            <img
              src="/images/badge-gallery2.jpg"
              alt="Badge Sample 2"
              className="rounded-2xl shadow-md"
            />

            <img
              src="/images/badge-gallery3.jpg"
              alt="Badge Sample 3"
              className="rounded-2xl shadow-md"
            />

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-5">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Our Badge Printing?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Durable and long-lasting badges.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Vibrant Printing
              </h3>
              <p className="text-gray-600">
                Sharp and colorful designs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Bulk Orders
              </h3>
              <p className="text-gray-600">
                Special pricing for large quantities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick turnaround across Chennai.
              </p>
            </div>

          </div>

        </div>
      </section>
{/* Related Services */}
<section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-5">

    <h2 className="text-4xl font-bold text-center mb-10">
      Explore Other Services
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      <Link
        to="/mug-printing"
        className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center"
      >
        ☕ Mug Printing
      </Link>

      <Link
        to="/cap-printing"
        className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center"
      >
        🧢 Cap Printing
      </Link>

      <Link
        to="/plate-printing"
        className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center"
      >
        🍽️ Plate Printing
      </Link>

      <Link
        to="/tshirt-printing"
        className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center"
      >
        👕 T-Shirt Printing
      </Link>

    </div>

  </div>
</section>
      {/* CTA */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <h2 className="text-5xl font-bold mb-4">
            Need Custom Badges?
          </h2>

          <p className="text-lg mb-8">
            Perfect for schools, events, offices and branding.
          </p>

          <a
            href="https://wa.me/919790654639"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-green-900 px-8 py-4 rounded-xl font-bold"
          >
            Request Quote Now
          </a>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default BadgePage;
