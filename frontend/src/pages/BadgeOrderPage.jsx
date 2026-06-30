import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BadgeOrderPage() {
  const [logo, setLogo] = useState(null);
  const [badgeType, setBadgeType] = useState("Pin Badge");
  const [badgeSize, setBadgeSize] = useState("44mm");
  const [quantity, setQuantity] = useState(50);

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
    if (quantity >= 500) return 12;
    if (quantity >= 200) return 15;
    return 20;
  };

  const pricePerPiece = getPrice();
  const totalPrice = quantity * pricePerPiece;

  const sendWhatsApp = () => {
    const message = `Badge Order

Name: ${customer.name}
Phone: ${customer.phone}
Email: ${customer.email}
Company: ${customer.company}

Badge Type: ${badgeType}
Badge Size: ${badgeSize}
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
          <h1 className="text-5xl font-bold">Custom Badge Order</h1>
          <p className="mt-4 text-orange-100">
            Design and order custom badges for events, schools and companies.
          </p>
        </div>
      </section>

      <main className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-5 space-y-8">

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Badge Preview</h2>

              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="/images/badge-preview.jpg"
                    alt="Badge Preview"
                    className="w-72"
                  />

                  {logo && (
                    <img
                      src={logo}
                      alt="Logo"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 object-contain"
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
                  if (file) setLogo(URL.createObjectURL(file));
                }}
              />
            </div>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Badge Details</h2>

              <select
                value={badgeType}
                onChange={(e) => setBadgeType(e.target.value)}
                className="w-full border rounded-xl p-3 mb-4"
              >
                <option>Pin Badge</option>
                <option>Magnet Badge</option>
                <option>Corporate Badge</option>
                <option>Event Badge</option>
              </select>

              <select
                value={badgeSize}
                onChange={(e) => setBadgeSize(e.target.value)}
                className="w-full border rounded-xl p-3"
              >
                <option>32mm</option>
                <option>44mm</option>
                <option>58mm</option>
                <option>75mm</option>
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
                  <span>Badge Type</span>
                  <span>{badgeType}</span>
                </div>

                <div className="flex justify-between">
                  <span>Size</span>
                  <span>{badgeSize}</span>
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
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default BadgeOrderPage;
