function OrderSummary({ orderData }) {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919790654639",
      "_blank"
    );
  };
const productCost = orderData.totalPrice;

const printingCost = Math.round(
  productCost * 0.15
);

const gst = Math.round(
  (productCost + printingCost) * 0.18
);

const grandTotal =
  productCost +
  printingCost +
  gst;

  return (
    <section className="bg-white rounded-3xl shadow-lg p-6 sticky top-24">

      <h2 className="text-3xl font-bold mb-8">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Product</span>
          <span>T-Shirt</span>
        </div>

        <div className="flex justify-between">
          <span>Color</span>
          <span>White</span>
        </div>

        <div className="flex justify-between">
          <span>Print Type</span>
          <span>DTF</span>
        </div>

        <div className="flex justify-between">
          <span>Quantity</span>
          <span>{orderData.quantity} pcs</span>
        </div>

      </div>

      <hr className="my-6" />

      <div className="flex justify-between text-3xl font-bold text-green-700">

        <span>Total</span>

        <span>₹{grandTotal}</span>

      </div>

      <div className="mt-8">

        <label className="flex items-start gap-3">

          <input
            type="checkbox"
            className="mt-1"
          />

          <span className="text-sm text-gray-600">
            I agree to the terms and conditions
          </span>

        </label>

      </div>

      <button
        onClick={handleWhatsApp}
        className="
        w-full
        mt-8
        bg-green-600
        hover:bg-green-700
        text-white
        py-4
        rounded-xl
        font-semibold
        text-lg
        "
      >
        Order Via WhatsApp
      </button>

      <button
        className="
        w-full
        mt-4
        border-2
        border-green-600
        text-green-700
        py-4
        rounded-xl
        font-semibold
        "
      >
        Request Quote
      </button>

    </section>
  );
}

export default OrderSummary;