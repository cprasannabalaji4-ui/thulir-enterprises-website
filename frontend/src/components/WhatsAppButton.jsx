import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      bg-green-500
      hover:bg-green-600
      text-white
      p-4
      rounded-full
      shadow-lg
      z-50
      transition
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
}

export default WhatsAppButton;