function ProductDetails() {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-3xl font-bold mb-8">
        Product Details
      </h2>

      {/* T-Shirt Type */}

      <div className="mb-6">

        <label className="font-semibold block mb-2">
          T-Shirt Type
        </label>

        <select className="w-full border rounded-xl p-3">
          <option>Round Neck</option>
          <option>Polo Neck</option>
          <option>Oversized</option>
          <option>Full Sleeve</option>
        </select>

      </div>

      {/* Colors */}

      <div className="mb-6">

        <label className="font-semibold block mb-3">
          Color
        </label>

        <div className="flex gap-4 flex-wrap">

          <button className="w-10 h-10 rounded-full border-2 border-green-600 bg-white" />

          <button className="w-10 h-10 rounded-full bg-black" />

          <button className="w-10 h-10 rounded-full bg-blue-900" />

          <button className="w-10 h-10 rounded-full bg-green-700" />

          <button className="w-10 h-10 rounded-full bg-red-600" />

          <button className="w-10 h-10 rounded-full bg-gray-400" />

        </div>

      </div>

      {/* Print Position */}

      <div>

        <label className="font-semibold block mb-3">
          Print Position
        </label>

        <div className="flex flex-wrap gap-6">

          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked />
            Front Print
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Back Print
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Sleeve Print
          </label>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;