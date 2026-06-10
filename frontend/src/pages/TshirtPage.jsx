
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

function TshirtPage() {
  const variants = [
    { name: "Round Neck White T-Shirt", price: "₹249" },
    { name: "Round Neck Colored T-Shirt", price: "₹299" },
    { name: "Polo Collar T-Shirt", price: "₹399" },
    { name: "Drop Shoulder T-Shirt", price: "₹449" },
    { name: "Oversized T-Shirt", price: "₹499" },
    { name: "Corporate Uniform Printing", price: "₹549" },
    { name: "Premium Cotton T-Shirt", price: "₹599" },
  ];

  return (
    <>
      <Navbar />

<Breadcrumb currentPage="T-Shirt Printing" />
      
      {/* Hero */}
      <section className="relative py-24 bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="/images/tshirt-banner.jpg"
            alt="Banner"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            T-Shirt Printing
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl">
            Premium quality custom t-shirt printing for businesses,
            schools, events, teams and personal brands.
          </p>
        </div>
      </section>

      {/* Main Service Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Product Image */}
            <div>
              <img
                src="/images/tshirt-main.jpg"
                alt="T-Shirt Printing"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            {/* Variants Table */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-3xl font-bold text-green-900 mb-2">
                T-Shirt Printing
              </h2>

              <p className="text-gray-600 mb-6">
                High quality prints for every style and occasion.
              </p>

              <div className="overflow-hidden rounded-xl border">

                <div className="bg-green-900 text-white flex justify-between px-5 py-3 font-semibold">
                  <span>Variants</span>
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
                  ✓ Premium Fabric
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ HD Print Quality
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ Bulk Orders Available
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  ✓ Fast Delivery
                </div>

              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/919790654639"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-green-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-800 transition"
                >
                  <Link to="/order/tshirt">
                   Order Now
                   </Link>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">

          <h2 className="text-4xl font-bold text-center mb-10">
            Our Recent Prints
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="/images/gallery1.jpg"
              alt=""
              className="rounded-2xl shadow-md"
            />

            <img
              src="/images/gallery2.jpg"
              alt=""
              className="rounded-2xl shadow-md"
            />

            <img
              src="/images/gallery3.jpg"
              alt=""
              className="rounded-2xl shadow-md"
            />

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-5">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Best materials and long lasting prints.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick turnaround for all orders.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Bulk Orders
              </h3>
              <p className="text-gray-600">
                Corporate and event printing support.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold mb-2">
                Affordable Pricing
              </h3>
              <p className="text-gray-600">
                Competitive pricing for every budget.
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
            Need Bulk Printing?
          </h2>

          <p className="text-lg mb-8">
            Get special pricing for schools,
            companies and events.
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

export default TshirtPage;
