import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function QuoteFormPage() {
const [searchParams] = useSearchParams();

const businessType =
searchParams.get("type") || "small";

const [formData, setFormData] = useState({
companyName: "",
clientName: "",
phone: "",
email: "",
address: "",
productType: "",
designType: "",
quantity: "",
deliveryDate: "",
requirements: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = (e) => {
e.preventDefault();

const qty = Number(formData.quantity);

if (
  businessType === "small" &&
  qty < 10
) {
  alert(
    "Small Business minimum order is 10 pieces."
  );
  return;
}

if (
  businessType === "individual" &&
  (qty < 50 || qty > 100)
) {
  alert(
    "Individual orders must be between 50 and 100 pieces."
  );
  return;
}

const message = `

Business Type: ${businessType}

Company Name:
${formData.companyName}

Client Name:
${formData.clientName}

Phone:
${formData.phone}

Email:
${formData.email}

Address:
${formData.address}

Product:
${formData.productType}

Design:
${formData.designType}

Quantity:
${formData.quantity}

Delivery Date:
${formData.deliveryDate}

Requirements:
${formData.requirements}
`;

window.open(
  `https://wa.me/919790654639?text=${encodeURIComponent(
    message
  )}`
);

};

return (
<> <Navbar />

  <section className="bg-gray-100 py-20">

    <div className="max-w-5xl mx-auto px-5">

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8">

          <div className="text-center">

            <img
              src="/images/logo.png"
              alt="logo"
              className="h-20 mx-auto mb-4"
            />

            <h1 className="text-4xl font-bold">
              Print Quote Request Form
            </h1>

            <p className="mt-2 font-medium">
              {businessType
                .replace("-", " ")
                .toUpperCase()}
            </p>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 md:p-12"
        >

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <label>
                Company / Organization Name
              </label>

              <input
                type="text"
                name="companyName"
                onChange={handleChange}
                className="w-full border p-3 mt-2"
                required
              />
            </div>

            <div>
              <label>Date</label>

              <input
                type="date"
                name="deliveryDate"
                onChange={handleChange}
                className="w-full border p-3 mt-2"
                required
              />
            </div>

            <div>
              <label>Client Name</label>

              <input
                type="text"
                name="clientName"
                onChange={handleChange}
                className="w-full border p-3 mt-2"
                required
              />
            </div>

            <div>
              <label>Contact Number</label>

              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                className="w-full border p-3 mt-2"
                required
              />
            </div>

            <div>
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full border p-3 mt-2"
                required
              />
            </div>

            <div>
              <label>Product Type</label>

              <select
                name="productType"
                onChange={handleChange}
                className="w-full border p-3 mt-2"
                required
              >
                <option value="">
                  Select Product
                </option>

                <option>
                  T-Shirt Printing
                </option>

                <option>
                  Mug Printing
                </option>

                <option>
                  Cap Printing
                </option>

                <option>
                  Badge Printing
                </option>

                <option>
                  Name Plate Printing
                </option>
              </select>
            </div>

          </div>

          <div className="mt-8">

            <label>Company Address</label>

            <textarea
              rows="4"
              name="address"
              onChange={handleChange}
              className="w-full border p-3 mt-2"
              required
            />

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">

            <div>
              <label>Design Type</label>

              <select
                name="designType"
                onChange={handleChange}
                className="w-full border p-3 mt-2"
                required
              >
                <option value="">
                  Select
                </option>

                <option>
                  Company Logo
                </option>

                <option>
                  Custom Design
                </option>

                <option>
                  Logo + Text
                </option>

                <option>
                  Text Only
                </option>
              </select>
            </div>

            <div>
              <label>
                Required Quantity
              </label>

              <input
                type="number"
                name="quantity"
                onChange={handleChange}
                className="w-full border p-3 mt-2"
                required
              />
            </div>

          </div>

          <div className="mt-8">

            <label>
              Additional Requirements
            </label>

            <textarea
              rows="6"
              name="requirements"
              onChange={handleChange}
              className="w-full border p-3 mt-2"
            />

          </div>

          <button
            type="submit"
            className="
            mt-10
            w-full
            bg-gradient-to-r
            from-teal-800
            to-teal-900
            text-white
            py-4
            rounded-xl
            font-semibold
            "
          >
            Submit Request
          </button>

        </form>

      </div>

    </div>

  </section>

  <Footer />
</>

);
}

export default QuoteFormPage;
