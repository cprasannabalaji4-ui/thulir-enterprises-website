import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

function MugPage() {
  const variants = [
    { name: "White Ceramic Mug", price: "₹199" },
    { name: "Magic Mug", price: "₹299" },
    { name: "Photo Printed Mug", price: "₹249" },
    { name: "Couple Mug", price: "₹349" },
    { name: "Corporate Logo Mug", price: "₹399" },
    { name: "Premium Gift Mug", price: "₹499" },
  ];

  return (
    <>
      <Navbar />
      
<Breadcrumb currentPage="Mug Printing" />

      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="/images/mug-banner.jpg"
            alt="Mug Printing Banner"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Mug Printing
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl">
            Personalized mugs for gifts, events,
            businesses and promotional branding.
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
                src="/images/mug-main.jpg"
                alt="Mug Printing"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            {/* Pricing */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                Custom Mug Printing
              </h2>

              <p className="text-gray-600 mb-6">
                High-quality ceramic mug printing
                with vibrant colors and long-lasting designs.
              </p>

              <div className="overflow-hidden rounded-xl border">

                <div className="bg-blue-900 text-white flex justify-between px-5 py-3 font-semibold">
                  <span>Mug Type</span>
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
                  ✓ Premium Ceramic Quality
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ HD Print Finish
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ Microwave Safe
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ Bulk Orders Available
                </div>

              </div>

              <div className="mt-8">
                <Link
                to="/order/mug"
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
            Sample Mug Designs
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="/images/mug-gallery1.jpg"
              alt="Mug Sample 1"
              className="rounded-2xl shadow-md"
            />

            <img
              src="/images/mug-gallery2.jpg"
              alt="Mug Sample 2"
              className="rounded-2xl shadow-md"
            />

            <img
              src="/images/mug-gallery3.jpg"
              alt="Mug Sample 3"
              className="rounded-2xl shadow-md"
            />

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-5">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Our Mug Printing?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Durable ceramic mugs with long-lasting prints.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Vibrant Colors
              </h3>
              <p className="text-gray-600">
                Sharp and high-definition printing quality.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Custom Designs
              </h3>
              <p className="text-gray-600">
                Add photos, logos, names and messages.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick production and delivery service.
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
        to="/tshirt-printing"
        className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center"
      >
        👕 T-Shirt Printing
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
        to="/badge-printing"
        className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center"
      >
        🏅 Badge Printing
      </Link>

    </div>

  </div>
</section>
      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <h2 className="text-5xl font-bold mb-4">
            Ready To Create Your Mug?
          </h2>

          <p className="text-lg mb-8">
            Turn your memories into personalized mugs today.
          </p>

          <a
            href="https://wa.me/919790654639"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold"
          >
            Request Quote Now
          </a>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default MugPage;