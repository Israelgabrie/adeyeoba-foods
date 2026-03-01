import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Meals", path: "/meals" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`nav-root ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="logo-wrap" onClick={() => navigate("/")}>
          <div className="logo-icon">🌾</div>
          <div className="logo-text-block">
            <span className="logo-name">
              ADEYEOBA <span>FOODS</span>
            </span>
            <span className="logo-sub">High Quality · Farm Fresh</span>
          </div>
        </div>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => navigate(link.path)}
                className={`nav-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="btn-order"
            onClick={() => navigate("/meals")}
          >
            Order Meal
          </button>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              style={{
                transform: menuOpen
                  ? "rotate(45deg) translateY(7px)"
                  : "none",
              }}
            />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span
              style={{
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-7px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <button
            key={link.name}
            className={`mobile-link ${
              location.pathname === link.path ? "active" : ""
            }`}
            onClick={() => {
              navigate(link.path);
              setMenuOpen(false);
            }}
          >
            {link.name}
          </button>
        ))}
        <button
          className="mobile-order"
          onClick={() => {
            navigate("/meals");
            setMenuOpen(false);
          }}
        >
          Order a Meal
        </button>
      </div>
    </nav>
  );
}