import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MugOrderPage() {
  const [logo, setLogo] = useState(null);
  const [mugType, setMugType] = useState("White Ceramic Mug");
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
    if (quantity >= 100) return 179;
    if (quantity >= 50) return 189;
    return 199;
  };

  const pricePerPiece = getPrice();
  const totalPrice = quantity * pricePerPiece;

  const sendWhatsApp = () => {
    const message = `Custom Mug Order

Name: ${customer.name}
Phone: ${customer.phone}
Email: ${customer.email}
Company: ${customer.company}

Mug Type: ${mugType}
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
          <h1 className="text-5xl font-bold">Custom Mug Order</h1>
          <p className="mt-4 text-blue-100">
            Upload your design and request a quote instantly.
          </p>
        </div>
      </section>

      <main className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-5 space-y-8">

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Live Mug Preview</h2>

              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="/images/mug-preview.jpg"
                    alt="Mug Preview"
                    className="w-80"
                  />

                  {logo && (
                    <img
                      src={logo}
                      alt="Logo"
                      className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-24 object-contain"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Upload Design</h2>

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

              <p className="text-sm text-gray-500 mt-3">
                Supported: PNG, JPG, JPEG
              </p>
            </div>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Mug Type</h2>

              <select
                value={mugType}
                onChange={(e) => setMugType(e.target.value)}
                className="w-full border rounded-xl p-3"
              >
                <option>White Ceramic Mug</option>
                <option>Magic Mug</option>
                <option>Photo Mug</option>
                <option>Corporate Mug</option>
              </select>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Quantity</h2>

              <div className="flex items-center justify-center gap-5">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-12 h-12 rounded-xl bg-red-100 text-2xl"
                >
                  -
                </button>

                <span className="text-4xl font-bold">{quantity}</span>

                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-12 h-12 rounded-xl bg-green-100 text-2xl"
                >
                  +
                </button>
              </div>
            </div>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Customer Details</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input placeholder="Name" className="border rounded-xl p-3"
                  onChange={(e)=>setCustomer({...customer,name:e.target.value})} />
                <input placeholder="Phone" className="border rounded-xl p-3"
                  onChange={(e)=>setCustomer({...customer,phone:e.target.value})} />
                <input placeholder="Email" className="border rounded-xl p-3"
                  onChange={(e)=>setCustomer({...customer,email:e.target.value})} />
                <input placeholder="Company Name" className="border rounded-xl p-3"
                  onChange={(e)=>setCustomer({...customer,company:e.target.value})} />
                <input type="date" className="border rounded-xl p-3 md:col-span-2"
                  onChange={(e)=>setCustomer({...customer,date:e.target.value})} />
                <textarea placeholder="Address" className="border rounded-xl p-3 md:col-span-2"
                  onChange={(e)=>setCustomer({...customer,address:e.target.value})} />
                <textarea placeholder="Additional Notes" className="border rounded-xl p-3 md:col-span-2"
                  onChange={(e)=>setCustomer({...customer,notes:e.target.value})} />
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Mug Type</span>
                  <span>{mugType}</span>
                </div>

                <div className="flex justify-between">
                  <span>Quantity</span>
                  <span>{quantity}</span>
                </div>

                <div className="flex justify-between">
                  <span>Price/Piece</span>
                  <span>₹{pricePerPiece}</span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold text-green-700">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>

              <button
                onClick={sendWhatsApp}
                className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl font-semibold"
              >
                Order via WhatsApp
              </button>

              <p className="text-xs text-gray-500 mt-3">
                EmailJS integration can be added later for email notifications.
              </p>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default MugOrderPage;
