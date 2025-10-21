import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiShoppingBag,
  FiGrid,
  FiShoppingCart,
  FiSearch,
  FiMoon,
  FiSun,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { MyProductContext } from "../Screens/ContextData/ContextFiles";
import { ThemeContext } from "../Screens/ContextData/ThemeContext";

const Navbar = () => {
  const { cart, search, setSearch } = useContext(MyProductContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between dark:bg-gray-900 relative">
      {/* Brand */}
      <div className="text-2xl font-bold text-blue-600">ShopEase</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-600 dark:text-gray-300">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 flex items-center gap-1"
                : "flex items-center gap-1"
            }
          >
            <FiHome /> Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/deals"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 flex items-center gap-1"
                : "flex items-center gap-1"
            }
          >
            <FiShoppingBag /> Deals & Offers
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/comingSoon"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 flex items-center gap-1"
                : "flex items-center gap-1"
            }
          >
            <FiGrid /> Coming Soon
          </NavLink>
        </li>
      </ul>

      {/* Desktop Search */}
      <div className="hidden md:flex items-center border border-gray-300 dark:border-gray-600 rounded-full px-3 py-1">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="outline-none px-2 text-black dark:text-white bg-transparent"
          value={search}
        />
        <FiSearch className="text-gray-500" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 text-gray-900 dark:text-white text-xl">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-pressed={theme === "dark"}
          aria-label="Toggle Theme"
          className="p-2 rounded-full hover:opacity-80 transition"
        >
          {theme === "dark" ? (
            <FiSun size={18} className="text-yellow-400" />
          ) : (
            <FiMoon size={18} className="text-gray-700" />
          )}
        </button>

        {/* Cart */}
        <NavLink
          to="/cartPage"
          className={({ isActive }) =>
            isActive ? "text-blue-500 relative" : "relative"
          }
        >
          <FiShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
              {cartCount}
            </span>
          )}
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 md:hidden">
          <ul className="flex flex-col p-4 gap-4 text-gray-700 dark:text-gray-200">
            <li>
              <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                <FiHome className="inline mr-2" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/deals" onClick={() => setMenuOpen(false)}>
                <FiShoppingBag className="inline mr-2" /> Deals & Offers
              </NavLink>
            </li>
            <li>
              <NavLink to="/comingSoon" onClick={() => setMenuOpen(false)}>
                <FiGrid className="inline mr-2" /> Coming Soon
              </NavLink>
            </li>
            <li>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full">
                Special Button
              </button>
            </li>
            {/* Mobile Search */}
            <li>
              <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-full px-3 py-1">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search products..."
                  className="outline-none px-2 text-black dark:text-white bg-transparent w-full"
                  value={search}
                />
                <FiSearch className="text-gray-500" />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
