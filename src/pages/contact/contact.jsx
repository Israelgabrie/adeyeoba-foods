import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CONTACT_INFO = [
  {
    icon: "📍",
    label: "Store Address",
    value: "13b Shina E. Ezeani Cl, Eti-Osa, Lagos 101233",
    link: "https://maps.google.com/maps?q=6.4281,3.5563",
  },
  {
    icon: "📞",
    label: "Phone / WhatsApp",
    value: "0707 529 6366",
    link: "tel:+2347075296366",
  },
  {
    icon: "📧",
    label: "Email",
    value: "adeyeobafoodsng@gmail.com",
    link: "mailto:adeyeobafoodsng@gmail.com",
  },
  {
    icon: "🕐",
    label: "Opening Hours",
    value: "Open 24 Hours · 7 Days a Week",
    link: null,
  },
];

const SOCIALS = [
  {
    icon: "📸",
    name: "Instagram",
    handle: "@adeyeoba_food3465",
    desc: "Follow us for daily product photos, meal drops & behind-the-scenes.",
    link: "https://www.instagram.com/adeyeoba_food3465",
    color: "#E1306C",
    bg: "#fdf0f5",
    border: "#f9c8da",
  },
  {
    icon: "👍",
    name: "Facebook",
    handle: "Adeyeoba High Quality Foods",
    desc: "Like our page for updates, promos and community announcements.",
    link: "https://www.facebook.com/adeyeobafoodsng",
    color: "#1877F2",
    bg: "#f0f5ff",
    border: "#c5d8fc",
  },
  {
    icon: "✈️",
    name: "Telegram",
    handle: "@adeyeobafoodsng",
    desc: "Join our Telegram group for exclusive deals and order updates.",
    link: "https://t.me/adeyeobafoodsng",
    color: "#229ED9",
    bg: "#f0f8fd",
    border: "#b8dfef",
  },
  {
    icon: "🐦",
    name: "X (Twitter)",
    handle: "@adeyeobafoodsng",
    desc: "Stay in the loop with news, restocks and promotions.",
    link: "https://x.com/adeyeobafoodsng",
    color: "#000000",
    bg: "#f5f5f5",
    border: "#d0d0d0",
  },
  {
    icon: "🎵",
    name: "TikTok",
    handle: "@adeyeobafoodsng",
    desc: "Watch us cook, pack and deliver — real food, real people.",
    link: "https://www.tiktok.com/@adeyeobafoodsng",
    color: "#010101",
    bg: "#f5f5f5",
    border: "#d0d0d0",
  },
  {
    icon: "💬",
    name: "WhatsApp",
    handle: "+234 707 529 6366",
    desc: "Message us directly on WhatsApp to place an order or ask a question.",
    link: "https://wa.me/2347075296366",
    color: "#25D366",
    bg: "#f0fdf4",
    border: "#b8edc8",
  },
];

export default function ContactPage() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(null);

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div
      className="min-h-screen bg-[#f7f7f4]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", paddingTop: 68 }}
    >
      {/* ── HERO ── */}
      <div className="bg-[#1c4c1c] relative overflow-hidden">
        <div className="absolute right-24 top-1/2 -translate-y-1/2 text-[200px] opacity-[0.04] select-none">
          📞
        </div>
        <div className="max-w-[1280px] mx-auto px-20 py-16">
          <div className="inline-flex items-center gap-2 bg-[#edf7ed] text-[#2d7a2d] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-6 border-l-4 border-[#2d7a2d] w-fit">
            🌿 We'd love to hear from you
          </div>
          <h1
            className="text-5xl font-extrabold text-white leading-tight mb-4"
            style={{ letterSpacing: "-0.025em", fontWeight: 800 }}
          >
            Get in <span className="text-[#e07b20]">touch</span>
          </h1>
          <p
            className="text-white/70 text-[15px] leading-relaxed max-w-lg"
            style={{ fontWeight: 400 }}
          >
            Whether you want to place an order, ask about a product, or just say
            hello — we're always available. Reach us by phone, WhatsApp, email,
            or any of our social channels below.
          </p>
        </div>
      </div>

      {/* ── BANNER STRIP ── */}
      <div className="bg-[#1c4c1c] border-t border-white/10 grid grid-cols-3">
        {[
          {
            icon: "📞",
            title: "Call or WhatsApp",
            desc: "0707 529 6366 · Available 24/7",
          },
          {
            icon: "📧",
            title: "Send an Email",
            desc: "adeyeobafoodsng@gmail.com",
          },
          {
            icon: "📍",
            title: "Visit the Store",
            desc: "13b Shina E. Ezeani Cl, Eti-Osa, Lagos",
          },
        ].map((b, i) => (
          <div
            key={i}
            className="px-10 py-7 flex items-center gap-4 border-r border-white/10 last:border-r-0"
          >
            <span className="text-2xl flex-shrink-0">{b.icon}</span>
            <div>
              <div className="text-white text-[13px] font-bold mb-0.5">
                {b.title}
              </div>
              <div className="text-white/50 text-xs">{b.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── MAIN GRID ── */}
      <div className="max-w-[1280px] mx-auto px-20 py-16 grid grid-cols-[1fr_1.5fr] gap-12 items-start">
        {/* LEFT — contact details */}
        <div className="flex flex-col gap-5">
          {/* section label */}
          <div>
            <div className="inline-flex items-center gap-2 text-[#2d7a2d] text-xs font-bold tracking-[0.1em] uppercase mb-3">
              <span className="w-8 h-0.5 bg-[#2d7a2d] inline-block" />
              Contact Details
            </div>
            <h2
              className="text-[28px] font-extrabold text-[#111] leading-tight"
              style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              Reach us <span className="text-[#2d7a2d]">directly</span>
            </h2>
          </div>

          {/* info cards */}
          {CONTACT_INFO.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-[#ececec] flex items-start gap-4 hover:border-[#2d7a2d] hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-200"
            >
              <div className="w-11 h-11 bg-[#edf7ed] rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                {c.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] text-[#999] font-bold tracking-widest uppercase mb-1">
                  {c.label}
                </div>
                <div className="text-[14px] text-[#222] font-semibold leading-snug break-all">
                  {c.value}
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                {c.link && (
                  <a
                    href={c.link}
                    target={c.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="text-[12px] font-bold bg-[#2d7a2d] text-white px-3 py-1.5 rounded-lg no-underline hover:bg-[#256325] transition-colors"
                  >
                    {c.link.startsWith("mailto")
                      ? "Email"
                      : c.link.startsWith("tel")
                        ? "Call"
                        : "Open"}
                  </a>
                )}
                <button
                  onClick={() => copy(c.value, i)}
                  className="text-[12px] font-bold bg-[#f7f7f4] border border-[#e0e0e0] text-[#555] px-3 py-1.5 rounded-lg hover:bg-[#eee] transition-colors cursor-pointer"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {copied === i ? "✓" : "Copy"}
                </button>
              </div>
            </div>
          ))}

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/2347075296366"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl no-underline font-extrabold text-[15px] shadow-[0_4px_16px_rgba(37,211,102,0.30)] hover:bg-[#1fba59] transition-colors"
            style={{ fontWeight: 800 }}
          >
            <span>💬</span> Chat with us on WhatsApp
          </a>

          {/* map embed */}
          <div className="rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] relative">
            <div className="absolute top-3 left-3 z-10 bg-[#1c4c1c] text-white text-[12px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
              📍 Adeyeoba Foods
            </div>
            <iframe
              title="Adeyeoba Foods"
              width="100%"
              height="240"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=6.4281,3.5563&z=16&output=embed"
            />
          </div>
        </div>

        {/* RIGHT — socials */}
        <div>
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 text-[#2d7a2d] text-xs font-bold tracking-[0.1em] uppercase mb-3">
              <span className="w-8 h-0.5 bg-[#2d7a2d] inline-block" />
              Social Media
            </div>
            <h2
              className="text-[28px] font-extrabold text-[#111] leading-tight"
              style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              Find us <span className="text-[#2d7a2d]">everywhere</span>
            </h2>
            <p
              className="text-[14px] text-[#888] mt-2 leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              Follow us on any of our channels to stay updated on new products,
              meal drops, promos and more.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {SOCIALS.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline group"
              >
                <div
                  className="rounded-2xl p-5 border transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] h-full"
                  style={{ background: s.bg, borderColor: s.border }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm"
                      style={{
                        background: s.color + "18",
                        border: `1.5px solid ${s.color}30`,
                      }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <div
                        className="text-[14px] font-extrabold text-[#111]"
                        style={{ fontWeight: 800 }}
                      >
                        {s.name}
                      </div>
                      <div
                        className="text-[12px] font-semibold"
                        style={{ color: s.color }}
                      >
                        {s.handle}
                      </div>
                    </div>
                  </div>
                  <p
                    className="text-[12px] text-[#666] leading-relaxed mb-3"
                    style={{ fontWeight: 400 }}
                  >
                    {s.desc}
                  </p>
                  <div
                    className="inline-flex items-center gap-1.5 text-[12px] font-bold"
                    style={{ color: s.color }}
                  >
                    Follow us <span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="bg-[#1c4c1c] px-20 py-14 flex items-center justify-between gap-10">
        <div>
          <div className="text-[#a8d5a8] text-xs font-bold tracking-widest uppercase mb-3">
            Ready to order?
          </div>
          <h3
            className="text-white text-[30px] font-extrabold leading-tight"
            style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            Fresh food is just{" "}
            <span className="text-[#e07b20]">one message away</span>
          </h3>
          <p className="text-white/60 text-[14px] mt-2 max-w-lg leading-relaxed">
            Call, WhatsApp, or place your order online — we'll take it from
            there.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => navigate("/shop")}
            className="bg-white text-[#1c4c1c] text-[14px] font-bold px-7 py-3.5 rounded-lg hover:bg-[#f0f7f0] transition-colors cursor-pointer border-none"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Shop Produce
          </button>
          <button
            onClick={() => navigate("/order")}
            className="bg-[#e07b20] text-white text-[14px] font-bold px-7 py-3.5 rounded-lg hover:bg-[#c96d18] transition-colors cursor-pointer border-none"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Order a Meal
          </button>
        </div>
      </div>
    </div>
  );
}
