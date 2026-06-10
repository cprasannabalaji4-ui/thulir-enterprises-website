import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PlateOrderPage() {
  const [logo, setLogo] = useState(null);
  const [plateType, setPlateType] = useState("Ceramic Plate");
  const [plateSize, setPlateSize] = useState("8 Inch");
  const [quantity, setQuantity] = useState(10);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    address: "",
    date: "",
    notes: "",
  });

  const getPrice = () => {
    if (quantity >= 100) return 299;
    if (quantity >= 50) return 349;
    return 399;
  };

  const pricePerPiece = getPrice();
  const totalPrice = quantity * pricePerPiece;

  const sendWhatsApp = () => {
    const message = `Plate Order

Name: ${customer.name}
Phone: ${customer.phone}
Email: ${customer.email}
Company: ${customer.company}

Plate Type: ${plateType}
Plate Size: ${plateSize}
Quantity: ${quantity}

Address:
${customer.address}

Required Date:
${customer.date}

Notes:
${customer.notes}

Estimated Total:
₹${totalPrice}`;

    window.open(
      `https://wa.me/919790654639?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      <Navbar />

       <section className="bg-gradient-to-r from-slate-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-5xl font-bold">Custom Plate Order</h1>

          <p className="mt-4 text-purple-100">
            Personalized printed plates for gifts,
            awards and special events.
          </p>
        </div>
      </section>

      <main className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-5 space-y-8">

          {/* Preview + Upload */}

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6">
                Plate Preview
              </h2>

              <div className="flex justify-center">

                <div className="relative">

                  <img
                    src="/images/plate-preview.png"
                    alt="Plate Preview"
                    className="w-80"
                  />

                  {logo && (
                    <img
                      src={logo}
                      alt="Logo"
                      className="
                      absolute
                      top-1/2
                      left-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-28
                      h-28
                      object-contain
                      "
                    />
                  )}

                </div>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6">
                Upload Design
              </h2>

              <input
                type="file"
                accept="image/*"
                className="w-full border rounded-xl p-3"
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (file) {
                    setLogo(URL.createObjectURL(file));
                  }
                }}
              />

            </div>

          </div>

          {/* Plate Details + Quantity */}

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6">
                Plate Details
              </h2>

              <select
                value={plateType}
                onChange={(e) => setPlateType(e.target.value)}
                className="w-full border rounded-xl p-3 mb-4"
              >
                <option>Ceramic Plate</option>
                <option>Photo Plate</option>
                <option>Award Plate</option>
                <option>Premium Display Plate</option>
              </select>

              <select
                value={plateSize}
                onChange={(e) => setPlateSize(e.target.value)}
                className="w-full border rounded-xl p-3"
              >
                <option>8 Inch</option>
                <option>10 Inch</option>
                <option>12 Inch</option>
                <option>14 Inch</option>
              </select>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6">
                Quantity
              </h2>

              <div className="flex items-center justify-center gap-5">

                <button
                  onClick={() =>
                    setQuantity((q) => Math.max(1, q - 1))
                  }
                  className="
                  w-12
                  h-12
                  rounded-xl
                  bg-red-100
                  text-2xl
                  "
                >
                  -
                </button>

                <span className="text-4xl font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((q) => q + 1)
                  }
                  className="
                  w-12
                  h-12
                  rounded-xl
                  bg-green-100
                  text-2xl
                  "
                >
                  +
                </button>

              </div>

            </div>

          </div>

          {/* Customer + Summary */}

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6">
                Customer Details
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  placeholder="Customer Name"
                  className="border rounded-xl p-3"
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      name: e.target.value,
                    })
                  }
                />

                <input
                  placeholder="Mobile Number"
                  className="border rounded-xl p-3"
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      phone: e.target.value,
                    })
                  }
                />

                <input
                  placeholder="Email Address"
                  className="border rounded-xl p-3"
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      email: e.target.value,
                    })
                  }
                />

                <input
                  placeholder="Company Name"
                  className="border rounded-xl p-3"
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      company: e.target.value,
                    })
                  }
                />

                <input
                  type="date"
                  className="border rounded-xl p-3 md:col-span-2"
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      date: e.target.value,
                    })
                  }
                />

                <textarea
                  placeholder="Address"
                  className="border rounded-xl p-3 md:col-span-2"
                  rows="3"
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      address: e.target.value,
                    })
                  }
                />

                <textarea
                  placeholder="Additional Notes"
                  className="border rounded-xl p-3 md:col-span-2"
                  rows="3"
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      notes: e.target.value,
                    })
                  }
                />

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span>Plate Type</span>
                  <span>{plateType}</span>
                </div>

                <div className="flex justify-between">
                  <span>Plate Size</span>
                  <span>{plateSize}</span>
                </div>

                <div className="flex justify-between">
                  <span>Quantity</span>
                  <span>{quantity}</span>
                </div>

                <div className="flex justify-between">
                  <span>Price / Piece</span>
                  <span>₹{pricePerPiece}</span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold text-green-700">

                  <span>Total</span>

                  <span>
                    ₹{totalPrice}
                  </span>

                </div>

              </div>

              <button
                onClick={sendWhatsApp}
                className="
                w-full
                mt-6
                bg-green-600
                text-white
                py-3
                rounded-xl
                font-semibold
                hover:bg-green-700
                transition
                "
              >
                Order via WhatsApp
              </button>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default PlateOrderPage;