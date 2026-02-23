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

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .hs-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #f7f7f4;
          padding-top: 68px;
        }

        /* ── HERO ── */
        .hero-band {
          background: #fff;
          border-bottom: 1px solid #ececec;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 580px;
          overflow: hidden;
        }

        .hero-left {
          padding: 64px 56px 56px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #edf7ed;
          color: #2d7a2d;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 14px;
          margin-bottom: 24px;
          width: fit-content;
          border-radius: 6px;
          border-left: 3px solid #2d7a2d;
        }

        .hero-headline {
          font-size: clamp(34px, 4.5vw, 54px);
          font-weight: 800;
          color: #111;
          line-height: 1.08;
          letter-spacing: -0.025em;
          margin: 0 0 8px 0;
        }

        .hero-headline-accent { color: #2d7a2d; }

        .hero-sub {
          font-size: 15px;
          color: #666;
          line-height: 1.75;
          margin: 16px 0 36px;
          max-width: 440px;
          font-weight: 400;
        }

        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .btn-primary {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          background: #2d7a2d;
          color: #fff;
          border: none;
          padding: 13px 28px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .btn-primary:hover { background: #256325; }

        .btn-outline {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          background: none;
          color: #e07b20;
          border: 1.5px solid #e07b20;
          padding: 12px 24px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-outline:hover { background: #e07b20; color: #fff; }

        .perks-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 28px;
        }

        .perk-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #444;
        }

        .hero-right {
          position: relative;
          overflow: hidden;
          background: #f0f7f0;
          border-left: 1px solid #e4f0e4;
        }

        .hero-img-main {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-img-overlay-card {
          position: absolute;
          bottom: 28px;
          left: 28px;
          background: rgba(255,255,255,0.95);
          border-radius: 12px;
          padding: 14px 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 12px;
          backdrop-filter: blur(8px);
        }

        .overlay-icon {
          width: 40px; height: 40px;
          background: #edf7ed;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .overlay-text-main { font-size: 15px; font-weight: 800; color: #111; line-height: 1.1; }
        .overlay-text-sub  { font-size: 12px; color: #888; font-weight: 400; margin-top: 2px; }

        /* ── BANNER STRIP ── */
        .banner-strip {
          background: #1c4c1c;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .banner-item {
          padding: 28px 32px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-right: 1px solid rgba(255,255,255,0.07);
        }

        .banner-item:last-child { border-right: none; }
        .banner-icon  { font-size: 26px; flex-shrink: 0; }
        .banner-title { font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 2px; }
        .banner-desc  { font-size: 12px; color: rgba(255,255,255,0.5); }

        /* ── STORY ── */
        .story-section {
          background: #fff;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 480px;
        }

        .story-img-wrap {
          position: relative;
          overflow: hidden;
        }

        .story-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }

        .story-img-badge {
          position: absolute;
          top: 24px; right: 24px;
          background: #2d7a2d;
          color: #fff;
          font-size: 12px; font-weight: 700;
          padding: 8px 16px;
          border-radius: 50px;
          letter-spacing: 0.04em;
        }

        .story-content {
          padding: 72px 72px 72px 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #2d7a2d;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .section-label-line { width: 32px; height: 2px; background: #2d7a2d; flex-shrink: 0; }

        .section-heading {
          font-size: clamp(26px, 3vw, 40px);
          font-weight: 800;
          color: #111;
          line-height: 1.12;
          letter-spacing: -0.02em;
          margin: 0 0 20px 0;
        }

        .section-heading span { color: #2d7a2d; }

        .section-text {
          font-size: 15px;
          color: #666;
          line-height: 1.75;
          margin: 0 0 32px 0;
          max-width: 420px;
        }

        .story-stats { display: flex; gap: 40px; }

        .stat-num {
          font-size: 32px;
          font-weight: 800;
          color: #2d7a2d;
          line-height: 1;
          display: block;
        }

        .stat-label {
          font-size: 12px;
          color: #888;
          font-weight: 500;
          margin-top: 4px;
          display: block;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* ── CATEGORIES ── */
        .section {
          max-width: 1300px;
          margin: 0 auto;
          padding: 64px 48px;
        }

        .section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .section-title {
          font-size: 22px;
          font-weight: 800;
          color: #111;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .section-title span { color: #2d7a2d; }

        .see-all {
          font-size: 13px;
          font-weight: 600;
          color: #2d7a2d;
          text-decoration: none;
          border-bottom: 1.5px solid #2d7a2d;
          padding-bottom: 1px;
        }

        .tabs {
          display: flex;
          gap: 6px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .tab-btn {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #777;
          background: #f3f3f3;
          border: none;
          padding: 9px 18px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .tab-btn:hover { color: #2d7a2d; background: #edf7ed; }
        .tab-btn.active { color: #2d7a2d; background: #edf7ed; font-weight: 700; }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }

        .cat-card {
          background: #fff;
          border: 1px solid #ececec;
          padding: 28px 16px 24px;
          text-align: center;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .cat-card:hover {
          border-color: #b8ddb8;
          box-shadow: 0 6px 24px rgba(45,122,45,0.09);
          transform: translateY(-3px);
        }

        .cat-icon { font-size: 38px; margin-bottom: 14px; display: block; }
        .cat-name { font-size: 13px; font-weight: 700; color: #222; margin-bottom: 6px; }
        .cat-desc { font-size: 11px; color: #999; line-height: 1.5; font-weight: 400; }

        /* ── DELIVERY ── */
        .delivery-section {
          background: #f7f7f4;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 440px;
          border-top: 1px solid #ececec;
          border-bottom: 1px solid #ececec;
        }

        .delivery-content {
          padding: 72px 64px 72px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .delivery-img-wrap { overflow: hidden; position: relative; }
        .delivery-img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .delivery-steps { display: flex; flex-direction: column; gap: 20px; margin-top: 32px; }

        .step-item { display: flex; align-items: flex-start; gap: 16px; }

        .step-num {
          width: 36px; height: 36px;
          background: #2d7a2d;
          color: #fff;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 800;
          flex-shrink: 0;
        }

        .step-title { font-size: 14px; font-weight: 700; color: #222; margin-bottom: 3px; }
        .step-desc  { font-size: 13px; color: #888; line-height: 1.5; }

        /* ── COMMUNITY STRIP ── */
        .community-strip {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 360px;
          overflow: hidden;
        }

        .community-img-wrap {
          overflow: hidden;
          position: relative;
        }

        .community-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }

        .community-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(28,76,28,0.65) 0%, transparent 70%);
          display: flex;
          align-items: center;
          padding: 0 48px;
        }

        .community-label {
          color: rgba(255,255,255,0.75);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .community-heading {
          color: #fff;
          font-size: 26px;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.02em;
          max-width: 260px;
        }

        /* ── FEATURED PRODUCTS ── */
        .products-section { background: #fff; }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .product-card {
          background: #fff;
          border: 1px solid #ececec;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .product-card:hover {
          box-shadow: 0 10px 32px rgba(0,0,0,0.09);
          transform: translateY(-3px);
          border-color: #ddd;
        }

        .product-img-wrap {
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: #f7f7f4;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }

        .product-card:hover .product-img { transform: scale(1.05); }

        .product-body { padding: 20px 22px 24px; }

        .product-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #2d7a2d;
          background: #edf7ed;
          padding: 3px 10px;
          border-radius: 5px;
          margin-bottom: 12px;
        }

        .product-name  { font-size: 15px; font-weight: 700; color: #111; margin-bottom: 4px; }
        .product-desc  { font-size: 12px; color: #999; line-height: 1.5; margin-bottom: 16px; }
        .product-price { font-size: 18px; font-weight: 800; color: #e07b20; margin-bottom: 16px; }

        .product-add {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          background: #2d7a2d;
          color: #fff;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease;
          width: 100%;
        }

        .product-add:hover { background: #256325; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .category-grid  { grid-template-columns: repeat(3, 1fr); }
          .products-grid  { grid-template-columns: repeat(2, 1fr); }
          .banner-strip   { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .hero-band        { grid-template-columns: 1fr; }
          .hero-right       { display: none; }
          .hero-left        { padding: 48px 24px; }
          .story-section    { grid-template-columns: 1fr; }
          .story-img-wrap   { min-height: 260px; }
          .story-content    { padding: 40px 24px; }
          .delivery-section { grid-template-columns: 1fr; }
          .delivery-img-wrap{ min-height: 240px; order: -1; }
          .delivery-content { padding: 40px 24px; }
          .community-strip  { grid-template-columns: 1fr; height: auto; }
          .section          { padding: 40px 24px; }
          .category-grid    { grid-template-columns: repeat(2, 1fr); }
          .products-grid    { grid-template-columns: 1fr; }
          .banner-strip     { grid-template-columns: 1fr; }
          .perks-list       { grid-template-columns: 1fr; }
          .story-stats      { gap: 24px; }
        }
      `}</style>

      <div className="hs-root">

        {/* ── HERO ── */}
        <div className="hero-band">
          <div className="hero-left">
            <div className="hero-eyebrow">🌾 Exclusive — 10% Off This Week</div>
            <h1 className="hero-headline">
              Let your <span className="hero-headline-accent">groceries</span>
              <br />come to you
            </h1>
            <p className="hero-sub">
              We grow, harvest, and deliver premium raw and repackaged food products
              to homes and businesses across Nigeria and beyond — and cook fresh meals
              delivered hot within Lagos State.
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
            <img src={IMAGES.family2} alt="Family enjoying fresh food" className="hero-img-main" />
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
            <img src={IMAGES.family1} alt="Family eating together" className="story-img" />
            <div className="story-img-badge">Est. 2009 · Lagos, Nigeria</div>
          </div>
          <div className="story-content">
            <div className="section-label">
              <div className="section-label-line" />
              Our Story
            </div>
            <h2 className="section-heading">
              Real food, straight<br />
              from <span>Nigerian farms</span>
            </h2>
            <p className="section-text">
              ADEYEOBA High Quality Foods was built on a simple belief — every family
              deserves access to fresh, natural food. We source directly from trusted
              Nigerian farmers, repackage with care, and deliver to your door.
              Whether you want raw crops, packaged staples, or a hot meal in Lagos,
              we've got you covered.
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
            <h2 className="section-title">Browse by <span>Category</span></h2>
            <a href="#shop" className="see-all">See All →</a>
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
              Hot meals,<br /><span>your doorstep</span>
            </h2>
            <p className="section-text">
              Place an order for any meal you're craving and our kitchen handles the rest.
              We prepare it fresh and deliver it hot — anywhere within Lagos State.
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
            <img src={IMAGES.delivery} alt="Fresh food delivery" className="delivery-img" />
          </div>
        </div>

        {/* ── COMMUNITY STRIP ── */}
        <div className="community-strip">
          <div className="community-img-wrap">
            <img src={IMAGES.community} alt="Community with fresh produce" className="community-img" />
            <div className="community-overlay">
              <div>
                <div className="community-label">Our Community</div>
                <div className="community-heading">Food that brings people together</div>
              </div>
            </div>
          </div>
          <div className="community-img-wrap">
            <img src={IMAGES.family2} alt="Happy family with fresh vegetables" className="community-img"
              style={{ objectPosition: "center top" }} />
          </div>
        </div>

        {/* ── FEATURED PRODUCTS ── */}
        <div className="products-section">
          <div className="section">
            <div className="section-header">
              <h2 className="section-title">Featured <span>Products</span></h2>
              <a href="#shop" className="see-all">View All Products →</a>
            </div>
            <div className="products-grid">
              {FEATURED.map((p) => (
                <div key={p.name} className="product-card">
                  <div className="product-img-wrap">
                    <img src={p.img} alt={p.name} className="product-img" />
                  </div>
                  <div className="product-body">
                    <div className="product-tag">{p.tag}</div>
                    <div className="product-name">{p.name}</div>
                    <div className="product-desc">{p.desc}</div>
                    <div className="product-price">{p.price}</div>
                    <button className="product-add">+ Add to Cart</button>
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