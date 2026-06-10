function SizeQuantity({
  orderData,
  setOrderData,
}) {
  const increaseQty = () => {
    const qty = orderData.quantity + 1;

    setOrderData({
      ...orderData,
      quantity: qty,
      totalPrice: qty * orderData.pricePerPiece,
    });
  };

  const decreaseQty = () => {
    if (orderData.quantity <= 1) return;

    const qty = orderData.quantity - 1;

    setOrderData({
      ...orderData,
      quantity: qty,
      totalPrice: qty * orderData.pricePerPiece,
    });
  };

  return (
    <section className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-8">
        Size & Quantity
      </h2>

      <div className="border rounded-2xl p-6">

        <div className="flex items-center justify-between">

          <button
            onClick={decreaseQty}
            className="
            w-12
            h-12
            rounded-xl
            bg-red-100
            text-red-600
            text-2xl
            font-bold
            hover:bg-red-200
            transition
            "
          >
            -
          </button>

          <div className="text-center">

            <p className="text-gray-500">
              Quantity
            </p>

            <p className="text-4xl font-bold text-green-700">
              {orderData.quantity}
            </p>

          </div>

          <button
            onClick={increaseQty}
            className="
            w-12
            h-12
            rounded-xl
            bg-green-100
            text-green-700
            text-2xl
            font-bold
            hover:bg-green-200
            transition
            "
          >
            +
          </button>

        </div>

      </div>

      <div className="mt-8 grid grid-cols-5 gap-3">

        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <div
            key={size}
            className="
            border
            rounded-xl
            py-3
            text-center
            font-semibold
            hover:bg-green-50
            cursor-pointer
            transition
            "
          >
            {size}
          </div>
        ))}

      </div>

      <div className="mt-8 bg-green-50 rounded-2xl p-5">

        <div className="flex justify-between items-center">

          <span className="font-medium">
            Total Quantity
          </span>

          <span className="text-2xl font-bold text-green-700">
            {orderData.quantity} Pcs
          </span>

        </div>

      </div>

    </section>
  );
}

export default SizeQuantity;