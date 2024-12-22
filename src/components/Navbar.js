import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import data from '../data/products.json';
import './Navbar.css';

const Navbar = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle navbar

  const toggleNavbar = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className={`navbar ${isNavOpen ? 'open' : ''}`}>
      {/* Hamburger Icon for Small Screens */}
      <button className="navbar-toggler" onClick={toggleNavbar}>
        ☰
      </button>

      <div className="shopname">ElectroShop</div>
      <div className="links">
        <Link to="/">Home</Link>
        {Object.keys(data.categories).map((category) => (
          <div
            className="dropdown"
            key={category}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => {
              setHoveredCategory(null);
              setHoveredBrand(null);
            }}
          >
            <Link to={`/${category.toLowerCase()}`}>{category}</Link>
            {hoveredCategory === category && (
              <div className="dropdown-menu">
                {data.categories[category].map((brand) => (
                  <div
                    className="dropdown-item"
                    key={brand}
                    onMouseEnter={() => setHoveredBrand(brand)}
                    onMouseLeave={() => setHoveredBrand(null)}
                  >
                    {brand}
                    {hoveredBrand === brand &&
                      data.products[category] && // Ensure category exists in products
                      data.products[category][brand] && ( // Ensure brand exists in the category
                        <div className="dropdown-submenu">
                          {data.products[category][brand].map((product) => (
                            <Link
                              to={`/${category.toLowerCase()}/${brand.toLowerCase()}/${product.id}`}
                              key={product.id}
                            >
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link to="/contact">Contact Us</Link>
        <div id="cart">
          <Link to="/cart">
            <ShoppingCart size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
