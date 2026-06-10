function CustomerDetails() {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-3xl font-bold mb-8">
        Customer Details
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block font-medium mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Mobile Number
          </label>

          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter email"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Company Name
          </label>

          <input
            type="text"
            placeholder="Company name"
            className="w-full border rounded-xl p-3"
          />
        </div>

      </div>

      <div className="mt-6">

        <label className="block font-medium mb-2">
          Delivery Address
        </label>

        <textarea
          rows="4"
          placeholder="Enter full address"
          className="w-full border rounded-xl p-3"
        />

      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">

        <div>
          <label className="block font-medium mb-2">
            City
          </label>

          <input
            type="text"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Pincode
          </label>

          <input
            type="text"
            className="w-full border rounded-xl p-3"
          />
        </div>

      </div>

      <div className="mt-6">

        <label className="block font-medium mb-2">
          Additional Notes
        </label>

        <textarea
          rows="5"
          placeholder="Any special instructions..."
          className="w-full border rounded-xl p-3"
        />

      </div>

    </section>
  );
}

export default CustomerDetails;