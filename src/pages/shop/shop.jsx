import { useState } from "react";

const COORDS = { lat: 6.4281, lng: 3.5563 };
const ADDRESS = "13b Shina E. Ezeani Cl, Eti-Osa, Lagos 101233";
const PHONE = "0707 529 6366";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${COORDS.lat},${COORDS.lng}`;

export default function ShopPage() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="min-h-screen bg-[#f7f7f4] mt-5"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* HERO BAND */}
      <div className="bg-[#1c4c1c] relative overflow-hidden">
        <div className="absolute right-20 top-1/2 -translate-y-1/2 text-[180px] opacity-[0.05] select-none">
          🛒
        </div>
        <div className="max-w-6xl mx-auto px-20 py-16">
          <div className="inline-flex items-center gap-2 bg-[#edf7ed] text-[#2d7a2d] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-6 border-l-4 border-[#2d7a2d]">
            <span>🌿</span> Visit Our Store
          </div>
          <h1
            className="text-5xl font-extrabold text-white leading-tight mb-4"
            style={{ letterSpacing: "-0.025em" }}
          >
            Find Us <span className="text-[#e07b20]">In Store</span>
          </h1>
          <p className="text-white/70 text-[15px] leading-relaxed max-w-lg font-normal">
            Visit us at our Lagos location — open 24 hours to serve you the
            freshest produce, repackaged staples, and hot cooked meals.
          </p>
        </div>
      </div>

      {/* BANNER STRIP */}
      <div className="bg-[#1c4c1c] border-t border-white/10 grid grid-cols-4">
        {[
          { icon: "🕐", title: "Open 24 Hours", desc: "Every day of the week" },
          {
            icon: "📍",
            title: "Eti-Osa, Lagos",
            desc: "13b Shina E. Ezeani Cl",
          },
          { icon: "📞", title: "0707 529 6366", desc: "Call us anytime" },
          {
            icon: "🚀",
            title: "Same-Day Delivery",
            desc: "Across Lagos State",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="px-8 py-6 flex items-center gap-4 border-r border-white/10 last:border-r-0"
          >
            <span className="text-2xl flex-shrink-0">{item.icon}</span>
            <div>
              <div className="text-white text-[13px] font-bold mb-0.5">
                {item.title}
              </div>
              <div className="text-white/50 text-xs">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto px-20 py-16 grid grid-cols-[1fr_1.6fr] gap-10 items-start">
        {/* LEFT */}
        <div className="flex flex-col gap-5">
          {/* Open badge */}
          <div className="flex items-center gap-3 bg-[#edf7ed] border border-[#b8ddb8] rounded-xl px-5 py-3.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2d7a2d] flex-shrink-0 shadow-[0_0_0_4px_rgba(45,122,45,0.2)] animate-pulse" />
            <span className="text-[#1c4c1c] font-bold text-[15px]">
              Open Now · 24 Hours
            </span>
          </div>

          {/* Store Location card */}
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#ececec]">
            <div className="inline-flex items-center gap-2 text-[#2d7a2d] text-xs font-bold tracking-[0.1em] uppercase mb-3">
              <span className="w-8 h-0.5 bg-[#2d7a2d] inline-block" />
              Store Location
            </div>
            <h2
              className="text-[22px] font-extrabold text-[#111] mb-6 leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Come See Us
            </h2>

            <div className="flex flex-col gap-5">
              <InfoRow icon="📍" label="Address" value={ADDRESS} />
              <InfoRow icon="📞" label="Phone" value={PHONE} />
              <InfoRow
                icon="🕐"
                label="Hours"
                value="Open 24 Hours, 7 Days a Week"
              />
              <InfoRow
                icon="🏙️"
                label="Area"
                value="Eti-Osa, Lagos State, Nigeria"
              />
            </div>

            <div className="flex gap-2.5 mt-6">
              <button
                onClick={copyAddress}
                className={`flex-1 text-[13px] font-bold py-2.5 rounded-lg border cursor-pointer transition-all duration-200 ${copied ? "bg-[#2d7a2d] text-white border-[#2d7a2d]" : "bg-[#f7f7f4] text-[#444] border-[#d0dcc8]"}`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {copied ? "✓ Copied!" : "Copy Address"}
              </button>
              <a
                href={`tel:${PHONE}`}
                className="flex-1 text-[13px] font-bold py-2.5 rounded-lg border border-[#d0dcc8] bg-[#f7f7f4] text-[#444] no-underline flex items-center justify-center hover:bg-[#eee] transition-colors"
              >
                Call Store
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-[13px] font-bold py-2.5 rounded-lg bg-[#2d7a2d] text-white no-underline flex items-center justify-center hover:bg-[#256325] transition-colors"
              >
                Directions →
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ececec]">
            <div className="inline-flex items-center gap-2 text-[#2d7a2d] text-xs font-bold tracking-[0.1em] uppercase mb-4">
              <span className="w-8 h-0.5 bg-[#2d7a2d] inline-block" />
              Follow Us
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/adeyeoba_food3465"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-[#ececec] no-underline text-[#333] text-[13px] font-bold hover:bg-[#f7f7f4] transition-colors"
              >
                <span className="text-lg">📸</span> Instagram
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-[#ececec] no-underline text-[#333] text-[13px] font-bold hover:bg-[#f7f7f4] transition-colors"
              >
                <span className="text-lg">👍</span> Facebook
              </a>
            </div>
          </div>

          {/* Perks grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "🌿", text: "100% Natural Products" },
              { icon: "🚀", text: "Same-Day Delivery" },
              { icon: "🧑‍🌾", text: "Trusted Farmers" },
              { icon: "🍲", text: "Hot Meals Available" },
            ].map((f) => (
              <div
                key={f.text}
                className="bg-white rounded-xl px-4 py-3.5 flex items-center gap-3 border border-[#ececec] text-[13px] font-semibold text-[#444]"
              >
                <span className="text-lg">{f.icon}</span> {f.text}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Map */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.10)] border-4 border-white relative">
            <div className="absolute top-4 left-4 z-10 bg-[#1c4c1c] text-white text-[13px] font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
              <span>📍</span> Adeyeoba Foods
            </div>
            <iframe
              title="Adeyeoba Foods Location"
              width="100%"
              height="500"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=6.4281,3.5563&z=16&output=embed"
            />
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#e07b20] text-white py-4 rounded-xl no-underline font-extrabold text-[15px] shadow-[0_4px_16px_rgba(224,123,32,0.35)] hover:bg-[#c96d18] transition-colors"
          >
            <span>🗺️</span> Open in Google Maps
          </a>
          <p className="text-center text-[#999] text-[13px] font-medium">
            13b Shina E. Ezeani Cl, Eti-Osa · Lagos 101233 · Nigeria
          </p>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="bg-[#1c4c1c]">
        <div className="max-w-4xl mx-auto px-8 py-10 grid grid-cols-4 text-center">
          {[
            { val: "500+", label: "PRODUCTS" },
            { val: "10k+", label: "CUSTOMERS" },
            { val: "15+", label: "YEARS" },
            { val: "24/7", label: "OPEN" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-[#e07b20] text-4xl font-extrabold leading-none"
                style={{ letterSpacing: "-0.02em" }}
              >
                {s.val}
              </div>
              <div className="text-white/50 text-xs font-bold tracking-[0.15em] mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex gap-3.5 items-start">
      <div className="w-9 h-9 bg-[#edf7ed] rounded-lg flex items-center justify-center text-lg flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[11px] text-[#999] font-bold tracking-widest uppercase mb-0.5">
          {label}
        </div>
        <div className="text-[14px] text-[#222] font-semibold leading-snug">
          {value}
        </div>
      </div>
    </div>
  );
}
