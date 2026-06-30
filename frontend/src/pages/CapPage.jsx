import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

function CapPage() {
  const variants = [
    { name: "Cotton Cap", price: "₹199" },
    { name: "Sports Cap", price: "₹249" },
    { name: "Snapback Cap", price: "₹349" },
    { name: "Trucker Cap", price: "₹299" },
    { name: "Corporate Logo Cap", price: "₹399" },
    { name: "Premium Embroidery Cap", price: "₹499" },
  ];

  return (
    <>
      <Navbar />
      
<Breadcrumb currentPage="Cap Printing" />

      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="/images/cap-banner.png"
            alt="Cap Printing Banner"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Cap Printing
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl">
            Premium custom cap printing and embroidery
            for brands, events, teams and businesses.
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
                src="/images/cap-main.jpg"
                alt="Cap Printing"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            {/* Pricing */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-3xl font-bold text-green-900 mb-2">
                Custom Cap Printing
              </h2>

              <p className="text-gray-600 mb-6">
                Stylish and durable caps customized with
                logos, names, branding and creative designs.
              </p>

              <div className="overflow-hidden rounded-xl border">

                <div className="bg-green-900 text-white flex justify-between px-5 py-3 font-semibold">
                  <span>Cap Type</span>
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
                  ✓ Premium Fabric Quality
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ Embroidery Available
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ Multiple Color Options
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ Bulk Orders Accepted
                </div>

              </div>

              <div className="mt-8">
                <Link
  to="/order/cap"
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
            Sample Cap Designs
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="/images/cap-gallery1.jpg"
              alt="Cap Sample 1"
              className="rounded-2xl shadow-md"
            />

            <img
              src="/images/cap-gallery2.jpg"
              alt="Cap Sample 2"
              className="rounded-2xl shadow-md"
            />

            <img
              src="/images/cap-gallery3.jpg"
              alt="Cap Sample 3"
              className="rounded-2xl shadow-md"
            />

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-5">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Our Cap Printing?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Long-lasting fabric with premium finishing.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Custom Branding
              </h3>
              <p className="text-gray-600">
                Perfect for companies, teams and events.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Multiple Styles
              </h3>
              <p className="text-gray-600">
                Snapback, sports, trucker and cotton caps.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick production and delivery support.
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
        to="/tshirt-printing"
        className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center"
      >
        👕 T-Shirt Printing
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
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <h2 className="text-5xl font-bold mb-4">
            Ready To Customize Your Cap?
          </h2>

          <p className="text-lg mb-8">
            Create branded caps for your business,
            event or personal style.
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

export default CapPage;