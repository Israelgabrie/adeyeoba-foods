import { useState } from "react";

// ── All data lives in data.js — move it to src/data/homeData.js when ready
import {
  IMAGES,
  PERKS,
  BANNERS,
  STATS,
  TABS,
  CATEGORIES,
  FEATURED,
  DELIVERY_STEPS,
} from "./data";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("All");
  const navigate = useNavigate();

  return (
    <>
      <div className="hs-root">
        {/* ── HERO ── */}
        <div className="hero-band">
          <div className="hero-left">
            <div className="hero-eyebrow">🌾 Exclusive — 10% Off This Week</div>
            <h1 className="hero-headline">
              Let your <span className="hero-headline-accent">groceries</span>
              <br />
              come to you
            </h1>
            <p className="hero-sub">
              We grow, harvest, and deliver premium raw and repackaged food
              products to homes and businesses across Nigeria and beyond — and
              cook fresh meals delivered hot within Lagos State.
            </p>
            <div className="hero-ctas">
              <button className="btn-primary">Shop Produce</button>
              <button className="btn-outline">Order a Meal</button>
            </div>
            <div className="perks-list">
              {PERKS.map((p) => (
                <div key={p.text} className="perk-item">
                  <span>{p.icon}</span>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-right">
            <img
              src={IMAGES.family2}
              alt="Family enjoying fresh food"
              className="hero-img-main"
            />
            <div className="hero-img-overlay-card">
              <div className="overlay-icon">🌱</div>
              <div>
                <div className="overlay-text-main">10,000+ Happy Customers</div>
                <div className="overlay-text-sub">Across Lagos & Nigeria</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BANNER STRIP ── */}
        <div className="banner-strip">
          {BANNERS.map((b) => (
            <div key={b.title} className="banner-item">
              <span className="banner-icon">{b.icon}</span>
              <div>
                <div className="banner-title">{b.title}</div>
                <div className="banner-desc">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── OUR STORY ── */}
        <div className="story-section">
          <div className="story-img-wrap">
            <img
              src={IMAGES.family1}
              alt="Family eating together"
              className="story-img"
            />
            <div className="story-img-badge">Est. 2009 · Lagos, Nigeria</div>
          </div>
          <div className="story-content">
            <div className="section-label">
              <div className="section-label-line" />
              Our Story
            </div>
            <h2 className="section-heading">
              Real food, straight
              <br />
              from <span>Nigerian farms</span>
            </h2>
            <p className="section-text">
              ADEYEOBA High Quality Foods was built on a simple belief — every
              family deserves access to fresh, natural food. We source directly
              from trusted Nigerian farmers, repackage with care, and deliver to
              your door. Whether you want raw crops, packaged staples, or a hot
              meal in Lagos, we've got you covered.
            </p>
            <div className="story-stats">
              {STATS.map((s) => (
                <div key={s.label}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CATEGORIES ── */}
        <div className="section">
          <div className="section-header">
            <h2 className="section-title">
              Browse by <span>Category</span>
            </h2>
            <a href="#shop" className="see-all">
              See All →
            </a>
          </div>
          <div className="tabs">
            {TABS.map((t) => (
              <button
                key={t}
                className={`tab-btn ${activeTab === t ? "active" : ""}`}
                onClick={() => setActiveTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="category-grid">
            {CATEGORIES.map((c) => (
              <div key={c.name} className="cat-card">
                <span className="cat-icon">{c.icon}</span>
                <div className="cat-name">{c.name}</div>
                <div className="cat-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DELIVERY STEPS ── */}
        <div className="delivery-section">
          <div className="delivery-content">
            <div className="section-label">
              <div className="section-label-line" />
              Meal Delivery — Lagos Only
            </div>
            <h2 className="section-heading">
              Hot meals,
              <br />
              <span>your doorstep</span>
            </h2>
            <p className="section-text">
              Place an order for any meal you're craving and our kitchen handles
              the rest. We prepare it fresh and deliver it hot — anywhere within
              Lagos State.
            </p>
            <div className="delivery-steps">
              {DELIVERY_STEPS.map((s) => (
                <div key={s.n} className="step-item">
                  <div className="step-num">{s.n}</div>
                  <div>
                    <div className="step-title">{s.title}</div>
                    <div className="step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="delivery-img-wrap">
            <img
              src={IMAGES.delivery}
              alt="Fresh food delivery"
              className="delivery-img"
            />
          </div>
        </div>

        {/* ── COMMUNITY STRIP ── */}
        <div className="community-strip">
          <div className="community-img-wrap">
            <img
              src={IMAGES.community}
              alt="Community with fresh produce"
              className="community-img"
            />
            <div className="community-overlay">
              <div>
                <div className="community-label">Our Community</div>
                <div className="community-heading">
                  Food that brings people together
                </div>
              </div>
            </div>
          </div>
          <div className="community-img-wrap">
            <img
              src={IMAGES.family2}
              alt="Happy family with fresh vegetables"
              className="community-img"
              style={{ objectPosition: "center top" }}
            />
          </div>
        </div>

        {/* ── FEATURED PRODUCTS ── */}
        <div className="products-section">
          <div className="section">
            <div className="section-header">
              <h2 className="section-title">
                Featured <span>Products</span>
              </h2>
              <a href="#shop" className="see-all">
                View All Products →
              </a>
            </div>
            <div className="products-grid">
              {FEATURED.map((p) => (
                <div
                  key={p.name}
                  className="product-card"
                  onClick={() => navigate("/order")}
                  style={{ cursor: "pointer" }}
                >
                  <div className="product-img-wrap">
                    <img src={p.img} alt={p.name} className="product-img" />
                  </div>
                  <div className="product-body">
                    <div className="product-tag">{p.tag}</div>
                    <div className="product-name">{p.name}</div>
                    <div className="product-desc">{p.desc}</div>
                    <div className="product-price">{p.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
