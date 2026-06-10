function PrintingMethod() {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-3xl font-bold mb-8">
        Printing Method
      </h2>

      <div className="space-y-5">

        <label className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <input
              type="radio"
              name="printMethod"
              defaultChecked
            />

            <span className="font-medium">
              DTF Printing
            </span>

          </div>

          <span
            className="
            bg-green-100
            text-green-700
            px-3
            py-1
            rounded-full
            text-sm
            "
          >
            Recommended
          </span>

        </label>

        <label className="flex items-center gap-3">
          <input type="radio" name="printMethod" />
          <span>Screen Printing</span>
        </label>

        <label className="flex items-center gap-3">
          <input type="radio" name="printMethod" />
          <span>Vinyl Printing</span>
        </label>

        <label className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <input type="radio" name="printMethod" />

            <span>Embroidery</span>

          </div>

          <span className="text-green-700 font-semibold">
            + ₹100 / pc
          </span>

        </label>

      </div>

    </section>
  );
}

export default PrintingMethod;