
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ openModal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isServicePage = location.pathname !== "/";

  return (
    <nav
      className="
      sticky
      top-0
      z-50
      backdrop-blur-xl
      bg-white/90
      border-b
      shadow-md
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-5
        py-4
        flex
        justify-between
        items-center
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-12"
          />

          <h2 className="font-bold text-2xl">
            <span className="text-teal-900">
              Thulir
            </span>{" "}
            <span className="text-orange-500">
              Enterprises
            </span>
          </h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-semibold text-lg">

          <li>
            <Link
              to="/"
              className={
                isHome
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "text-gray-700 hover:text-orange-500 pb-1"
              }
            >
              Home
            </Link>
          </li>

          <li>
            <a
              href="/#about"
              className="text-gray-700 hover:text-orange-500 pb-1"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/#services"
              className={
                isServicePage
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "text-gray-700 hover:text-orange-500 pb-1"
              }
            >
              Services
            </a>
          </li>

        </ul>

        <Link
  to="/get-quote"
  className="
  hidden md:block
  bg-linear-to-r
  from-teal-800
  to-teal-900
  text-white
  px-7
  py-3
  rounded-xl
  font-semibold
  hover:scale-105
  transition
  "
>
  Get Quote
</Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="
          md:hidden
          text-2xl
          text-teal-900
          "
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
          md:hidden
          bg-white
          border-t
          shadow-lg
          "
        >
          <ul className="flex flex-col p-5 gap-5">

            <li>
              <Link
                to="/"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="block"
              >
                Home
              </Link>
            </li>

            <li>
              <a
                href="/#about"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="block"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/#services"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="block"
              >
                Services
              </a>
            </li>

            <button
              onClick={() => {
                setMenuOpen(false);

                if (openModal) {
                  openModal();
                }
              }}
              className="
              bg-linear-to-r
              from-teal-800
              to-teal-900
              text-white
              py-3
              rounded-xl
              "
            >
              Get Quote
            </button>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
