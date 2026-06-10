import { Link } from "react-router-dom";

function Breadcrumb({ currentPage }) {
  return (
    <section className="bg-gray-100 border-b">
      <div className="max-w-7xl mx-auto px-5 py-4">

        <div className="flex items-center gap-2 text-sm md:text-base">

          <Link
            to="/"
            className="text-gray-600 hover:text-orange-500"
          >
            Home
          </Link>

          <span className="text-gray-400">›</span>

          <Link
            to="/#services"
            className="text-gray-600 hover:text-orange-500"
          >
            Services
          </Link>

          <span className="text-gray-400">›</span>

          <span className="font-semibold text-orange-500">
            {currentPage}
          </span>

        </div>

      </div>
    </section>
  );
}

export default Breadcrumb;