function UploadSection({
  orderData,
  setOrderData,
}) {
  const uploadCards = [
    {
      title: "Upload Front Design",
    },
    {
      title: "Upload Back Design",
    },
    {
      title: "Upload Logo",
    },
    {
      title: "Reference Image",
    },
  ];

  return (
    <section className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-3xl font-bold mb-2">
        Upload Your Design
      </h2>

      <p className="text-gray-500 mb-8">
        Upload your logo or design files to get started
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {uploadCards.map((item, index) => (
          <label
            key={index}
            className="
            border-2
            border-dashed
            border-gray-300
            rounded-2xl
            p-10
            text-center
            cursor-pointer
            hover:border-green-600
            hover:bg-green-50
            transition
            "
          >

            <div className="text-5xl mb-4">
              ☁️
            </div>

            <h3 className="font-bold text-xl">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-3">
              PNG, JPG, SVG, PDF, AI
            </p>

            <p className="text-sm text-gray-400 mt-2">
              Max Size 10MB
            </p>

           <input
  type="file"
  accept="image/*"
  className="hidden"
  onChange={(e) => {
    const file = e.target.files[0];

    if (!file) return;

    setOrderData({
      ...orderData,

      logo: URL.createObjectURL(file),
    });
  }}
/>

          </label>
        ))}

      </div>

      <div
        className="
        mt-6
        border
        rounded-xl
        p-4
        text-sm
        text-gray-600
        bg-gray-50
        "
      >
        ℹ️ For best results, use high-resolution files.
      </div>

    </section>
  );
}

export default UploadSection;