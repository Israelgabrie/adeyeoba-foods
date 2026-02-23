import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Shop", "Meals", "About Us", "Contact"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; }

        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #fff;
          border-bottom: 1px solid #ececec;
          transition: box-shadow 0.3s ease;
        }

        .nav-root.scrolled {
          box-shadow: 0 2px 20px rgba(0,0,0,0.07);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          height: 68px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .logo-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-icon {
          width: 38px;
          height: 38px;
          background: #2d7a2d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .logo-text-block {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .logo-name {
          font-size: 15px;
          font-weight: 800;
          color: #1c4c1c;
          letter-spacing: 0.04em;
        }

        .logo-name span { color: #2d7a2d; }

        .logo-sub {
          font-size: 10px;
          font-weight: 500;
          color: #999;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: #555;
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
          position: relative;
          letter-spacing: 0.01em;
        }

        .nav-link:hover { color: #2d7a2d; background: #f2faf2; }

        .nav-link.active {
          color: #2d7a2d;
          font-weight: 600;
          background: #edf7ed;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          width: 38px; height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
          position: relative;
        }

        .icon-btn:hover { color: #2d7a2d; background: #f2faf2; }

        .cart-badge {
          position: absolute;
          top: 5px; right: 5px;
          width: 15px; height: 15px;
          background: #e07b20;
          color: #fff;
          font-size: 9px;
          font-weight: 700;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-signin {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #2d7a2d;
          background: none;
          border: 1.5px solid #2d7a2d;
          padding: 8px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-signin:hover { background: #2d7a2d; color: #fff; }

        .btn-order {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          background: #e07b20;
          border: none;
          padding: 9px 22px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .btn-order:hover { background: #c96d18; }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .hamburger span {
          width: 22px; height: 2px;
          background: #333;
          display: block;
          transition: all 0.3s ease;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          background: #fff;
          border-top: 1px solid #eee;
          padding: 12px 24px 20px;
        }

        .mobile-menu.open { display: flex; }

        .mobile-link {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #333;
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
          transition: color 0.2s ease;
        }

        .mobile-link:hover { color: #2d7a2d; }

        .mobile-order {
          margin-top: 14px;
          background: #e07b20;
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          border: none;
          padding: 13px;
          border-radius: 8px;
          cursor: pointer;
          text-align: center;
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .btn-signin { display: none; }
          .nav-inner { padding: 0 24px; }
          .top-bar { padding: 7px 24px; }
          .hamburger { display: flex; }
          .desktop-only { display: none !important; }
        }

        @media (max-width: 480px) {
          .top-bar { display: none; }
        }
      `}</style>

      <nav className={`nav-root ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#" className="logo-wrap">
            <div className="logo-icon">🌾</div>
            <div className="logo-text-block">
              <span className="logo-name">
                ADEYEOBA <span>FOODS</span>
              </span>
              <span className="logo-sub">High Quality · Farm Fresh</span>
            </div>
          </a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className={`nav-link ${link === "Home" ? "active" : ""}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button className="icon-btn desktop-only" title="Search">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button className="icon-btn" title="Cart">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="cart-badge">2</span>
            </button>
            <button className="btn-signin">Sign In</button>
            <button className="btn-order">Order Meal</button>
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
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="mobile-order" onClick={() => setMenuOpen(false)}>
            Order a Meal
          </button>
        </div>
      </nav>
    </>
  );
}
