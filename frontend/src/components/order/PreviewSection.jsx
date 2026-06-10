import { useState } from "react";

function PreviewSection({ orderData }) {
  const [view, setView] = useState("front");

  return (
    <section className="bg-white rounded-3xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-3xl font-bold">
            Live Preview
          </h2>

          <p className="text-gray-500 mt-2">
            See how your design looks on the T-shirt
          </p>

        </div>

        <button
          className="
          border
          px-5
          py-2
          rounded-xl
          hover:bg-gray-100
          "
        >
          Change View
        </button>

      </div>

      {/* Color Selection */}

      <div className="flex gap-3 mb-8 overflow-auto">

        <button
          className="
          w-14
          h-14
          rounded-xl
          border-2
          border-green-600
          bg-white
          "
        />

        <button
          className="
          w-14
          h-14
          rounded-xl
          bg-black
          "
        />

        <button
          className="
          w-14
          h-14
          rounded-xl
          bg-blue-900
          "
        />

        <button
          className="
          w-14
          h-14
          rounded-xl
          bg-green-800
          "
        />

      </div>

      {/* Tshirt Preview */}

      <div
        className="
        relative
        flex
        justify-center
        items-center
        min-h-[500px]
        bg-gray-50
        rounded-2xl
        "
      >

        <img
          src="/images/products/tshirt-white.png"
          alt="Tshirt"
          className="w-[350px] md:w-[450px]"
        />

        {/* Uploaded Logo Position */}

        <div
          className="
          absolute
          top-[35%]
          left-1/2
          -translate-x-1/2
          "
        >

{orderData.logo ? (
  <img
    src={orderData.logo}
    alt="logo"
    className="
    w-32
    h-32
    object-contain
    "
  />
) : (
  <div
    className="
    bg-linear-to-r
    from-orange-500
    via-pink-500
    to-blue-500
    text-white
    px-5
    py-4
    rounded-xl
    font-bold
    "
  >
    YOUR
    <br />
    DESIGN
    <br />
    HERE
  </div>
)}
        </div>

      </div>

      {/* Front Back Buttons */}

      <div className="flex justify-center mt-8">

        <div
          className="
          border
          rounded-xl
          overflow-hidden
          flex
          "
        >

          <button
            onClick={() => setView("front")}
            className={`
              px-10
              py-3
              font-semibold
              ${
                view === "front"
                  ? "bg-green-600 text-white"
                  : "bg-white"
              }
            `}
          >
            Front View
          </button>

          <button
            onClick={() => setView("back")}
            className={`
              px-10
              py-3
              font-semibold
              ${
                view === "back"
                  ? "bg-green-600 text-white"
                  : "bg-white"
              }
            `}
          >
            Back View
          </button>

        </div>

      </div>

    </section>
  );
}

export default PreviewSection;