import { FaTimes } from "react-icons/fa";

function QuoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-5">

      <div className="bg-white rounded-2xl p-8 w-full max-w-lg relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          <FaTimes />
        </button>

        <h2 className="text-3xl font-bold mb-6">
          Request a Quote
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

          <select
            className="w-full border p-3 rounded-lg"
          >
            <option>T-Shirt Printing</option>
            <option>Mug Printing</option>
            <option>Cap Printing</option>
            <option>Plate Printing</option>
            <option>Badges</option>
          </select>

          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="
            w-full
            bg-orange-500
            hover:bg-orange-600
            text-white
            py-3
            rounded-lg
            "
          >
            Submit Quote
          </button>

        </form>

      </div>

    </div>
  );
}

export default QuoteModal;