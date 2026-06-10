function EnquiryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">

      <div className="bg-white p-8 rounded-2xl w-full max-w-lg">

        <h2 className="text-3xl font-bold mb-6">
          Get A Quote
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            rows="4"
            placeholder="Requirement"
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="
            w-full
            bg-green-600
            text-white
            py-3
            rounded-lg
            "
          >
            Submit Enquiry
          </button>

        </form>

        <button
          onClick={onClose}
          className="mt-4 text-red-500"
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default EnquiryModal;