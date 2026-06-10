function PriceDetails({ orderData }) {
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
    <section className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-3xl font-bold mb-8">
        Price Details
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Product Cost</span>
          <span>₹{productCost}</span>
        </div>

        <div className="flex justify-between">
          <span>Printing Cost</span>
          <span>₹{printingCost}</span>
        </div>

        <div className="flex justify-between">
          <span>GST (18%)</span>
          <span>₹{gst}</span>
        </div>

      </div>

      <hr className="my-6" />

      <div className="flex justify-between text-2xl font-bold text-green-700">

        <span>Grand Total</span>

        <span>₹{grandTotal}</span>

      </div>

    </section>
  );
}

export default PriceDetails;