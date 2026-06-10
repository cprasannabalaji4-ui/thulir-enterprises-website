import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb"; 

function PlatePage() {
  const variants = [
    { name: "Ceramic Plate Printing", price: "₹349" },
    { name: "Photo Printed Plate", price: "₹449" },
    { name: "Anniversary Plate", price: "₹499" },
    { name: "Wedding Gift Plate", price: "₹599" },
    { name: "Wooden Display Plate", price: "₹699" },
    { name: "Premium Gold Finish Plate", price: "₹999" },
  ];

  return (
    <>
      <Navbar />

<Breadcrumb currentPage="Plate Printing" />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="/images/plate-banner.jpg"
            alt="Plate Printing Banner"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Plate Printing
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl">
            Personalized decorative plates for weddings,
            anniversaries, birthdays and memorable gifts.
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
                src="/images/plate-main.jpg"
                alt="Plate Printing"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            {/* Pricing */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-3xl font-bold text-amber-700 mb-2">
                Custom Plate Printing
              </h2>

              <p className="text-gray-600 mb-6">
                Elegant custom plates printed with photos,
                quotes and special memories for gifting.
              </p>

              <div className="overflow-hidden rounded-xl border">

                <div className="bg-amber-700 text-white flex justify-between px-5 py-3 font-semibold">
                  <span>Plate Type</span>
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
                  ✓ Premium Finish
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ High Resolution Printing
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ Perfect Gift Option
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ Bulk Orders Available
                </div>

              </div>

              <div className="mt-8">
                <Link to="/order/plate">
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
            Sample Plate Designs
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="/images/plate-gallery1.jpg"
              alt="Plate Sample 1"
              className="rounded-2xl shadow-md"
            />

            <img
              src="/images/plate-gallery2.jpg"
              alt="Plate Sample 2"
              className="rounded-2xl shadow-md"
            />

            <img
              src="/images/plate-gallery3.jpg"
              alt="Plate Sample 3"
              className="rounded-2xl shadow-md"
            />

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-5">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Our Plate Printing?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Elegant plates with premium finishing.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Personalized Gifts
              </h3>
              <p className="text-gray-600">
                Perfect for weddings and special occasions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Vibrant Printing
              </h3>
              <p className="text-gray-600">
                Sharp and colorful high-quality prints.
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
        to="/tshirt-printing"
        className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center"
      >
        👕 T-Shirt Printing
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
      <section className="py-20 bg-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <h2 className="text-5xl font-bold mb-4">
            Looking For A Unique Gift?
          </h2>

          <p className="text-lg mb-8">
            Create beautiful personalized plates for your loved ones.
          </p>

          <a
            href="https://wa.me/919790654639"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-amber-700 px-8 py-4 rounded-xl font-bold"
          >
            Request Quote Now
          </a>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default PlatePage;