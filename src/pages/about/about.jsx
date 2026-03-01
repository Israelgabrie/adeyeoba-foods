import { useNavigate } from "react-router-dom";

const PLACEHOLDER_OWNER = "/images/about/owner.jpg";
const PLACEHOLDER_TEAM = "/images/about/team.jpg";
const PLACEHOLDER_FARM = "/images/about/farm.jpg";
const PLACEHOLDER_STORE = "/images/about/store.jpg";

const TIMELINE = [
  {
    year: "2009",
    title: "Founded in Lagos",
    desc: "Adeyeoba High Quality Foods was born out of a simple desire — to give Lagos families access to real, fresh, farm-direct food.",
  },
  {
    year: "2012",
    title: "First Delivery Route",
    desc: "We launched our first home delivery service across Eti-Osa, bringing fresh produce straight from the farm to the doorstep.",
  },
  {
    year: "2016",
    title: "Repackaging Division",
    desc: "We began repackaging staple foods — grains, legumes, and spices — under strict quality standards so customers always get the best.",
  },
  {
    year: "2020",
    title: "Cooked Meals Launch",
    desc: "Our kitchen opened its doors, offering hot, freshly cooked Nigerian meals delivered within Lagos State.",
  },
  {
    year: "2024",
    title: "10,000+ Customers",
    desc: "Today we proudly serve over 10,000 customers across Nigeria and continue to grow, staying true to our founding values.",
  },
];

const VALUES = [
  {
    icon: "🌿",
    title: "100% Natural",
    desc: "No preservatives, no shortcuts. Every product we sell is as close to nature as possible.",
  },
  {
    icon: "🤝",
    title: "Farmer First",
    desc: "We source directly from trusted Nigerian farmers, cutting out middlemen and supporting local agriculture.",
  },
  {
    icon: "✅",
    title: "Quality Control",
    desc: "Every item is inspected, cleaned, and carefully repackaged before it reaches your door.",
  },
  {
    icon: "❤️",
    title: "Community",
    desc: "We believe food brings people together. Our mission goes beyond commerce — it's about nourishing families.",
  },
  {
    icon: "🚀",
    title: "Reliable Delivery",
    desc: "Same-day delivery across Lagos and nationwide shipping for our packaged products.",
  },
  {
    icon: "🍲",
    title: "Fresh Cooking",
    desc: "Our meals are cooked to order, never reheated — because you deserve food made with care.",
  },
];

const STATS = [
  { val: "15+", label: "Years in Business" },
  { val: "500+", label: "Products" },
  { val: "10k+", label: "Customers Served" },
  { val: "24/7", label: "Always Open" },
];

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-[#f7f7f4]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", paddingTop: 68 }}
    >
      {/* ── HERO ── */}
      <div
        className="bg-white border-b border-[#ececec] grid grid-cols-2 overflow-hidden"
        style={{ minHeight: 520 }}
      >
        <div className="flex flex-col justify-center px-20 py-16">
          <div className="inline-flex items-center gap-2 bg-[#edf7ed] text-[#2d7a2d] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-6 border-l-4 border-[#2d7a2d] w-fit">
            🌾 Est. 2009 · Lagos, Nigeria
          </div>
          <h1
            className="text-5xl font-extrabold text-[#111] leading-tight mb-4"
            style={{ letterSpacing: "-0.025em", fontWeight: 800 }}
          >
            More than a <br />
            <span className="text-[#2d7a2d]">food business</span>
          </h1>
          <p
            className="text-[15px] text-[#666] leading-relaxed max-w-md mb-8"
            style={{ fontWeight: 400 }}
          >
            Adeyeoba High Quality Foods was built on a simple belief — every
            Nigerian family deserves access to fresh, natural food straight from
            the farm. For over 15 years, that belief has driven everything we
            do.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/shop")}
              className="bg-[#2d7a2d] text-white text-[14px] font-bold px-7 py-3.5 rounded-lg hover:bg-[#256325] transition-colors cursor-pointer border-none"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Shop Produce
            </button>
            <button
              onClick={() => navigate("/order")}
              className="text-[14px] font-semibold border-[1.5px] border-[#e07b20] text-[#e07b20] bg-transparent px-6 py-3 rounded-lg hover:bg-[#e07b20] hover:text-white transition-all cursor-pointer"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Order a Meal
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden bg-[#f0f7f0] border-l border-[#e4f0e4]">
          <img
            src={PLACEHOLDER_STORE}
            alt="Adeyeoba Foods store"
            className="w-full h-full object-cover block"
          />
          <div className="absolute bottom-7 left-7 bg-white/95 backdrop-blur rounded-xl px-4 py-3.5 flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <div className="w-10 h-10 bg-[#edf7ed] rounded-xl flex items-center justify-center text-xl flex-shrink-0">
              📍
            </div>
            <div>
              <div
                className="text-[15px] font-extrabold text-[#111] leading-tight"
                style={{ fontWeight: 800 }}
              >
                Eti-Osa, Lagos
              </div>
              <div className="text-xs text-[#888] mt-0.5">
                13b Shina E. Ezeani Cl · Open 24hrs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="bg-[#1c4c1c] grid grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={i}
            className="px-8 py-8 text-center border-r border-white/10 last:border-r-0"
          >
            <div
              className="text-[#e07b20] text-4xl font-extrabold leading-none mb-1"
              style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              {s.val}
            </div>
            <div className="text-white/50 text-xs font-bold tracking-[0.15em] uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── OWNER SECTION ── */}
      <div className="bg-white border-b border-[#ececec]">
        <div className="max-w-[1280px] mx-auto px-20 py-20 grid grid-cols-2 gap-16 items-center">
          {/* image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-[#f0f7f0]">
              <img
                src={PLACEHOLDER_OWNER}
                alt="Business Owner"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#2d7a2d] text-white rounded-2xl px-6 py-4 shadow-xl">
              <div
                className="text-3xl font-extrabold leading-none"
                style={{ fontWeight: 800 }}
              >
                15+
              </div>
              <div className="text-white/80 text-xs mt-1 font-semibold">
                Years of excellence
              </div>
            </div>
          </div>
          {/* content */}
          <div>
            <div className="inline-flex items-center gap-2 text-[#2d7a2d] text-xs font-bold tracking-[0.1em] uppercase mb-4">
              <span className="w-8 h-0.5 bg-[#2d7a2d] inline-block" />
              Meet the Founder
            </div>
            <h2
              className="text-[38px] font-extrabold text-[#111] leading-tight mb-2"
              style={{ letterSpacing: "-0.02em", fontWeight: 800 }}
            >
              Mr. Adeyeoba <br />
              <span className="text-[#2d7a2d]">High Quality Foods</span>
            </h2>
            <div className="text-[13px] text-[#e07b20] font-bold uppercase tracking-widest mb-6">
              Founder & CEO
            </div>
            <p
              className="text-[15px] text-[#666] leading-relaxed mb-5"
              style={{ fontWeight: 400 }}
            >
              Growing up surrounded by the richness of Nigerian agriculture, our
              founder developed a deep passion for connecting people with the
              food that the land naturally provides. What started as a small
              neighbourhood supply run in Eti-Osa has grown into one of Lagos's
              most trusted food brands.
            </p>
            <p
              className="text-[15px] text-[#666] leading-relaxed mb-8"
              style={{ fontWeight: 400 }}
            >
              "I started this business because I was tired of watching my
              community pay too much for food that wasn't even fresh. We go
              directly to the farmers, we handle it ourselves, and we deliver it
              ourselves. That's the only way to guarantee quality."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-[#2d7a2d]" />
              <span className="text-[#2d7a2d] text-[13px] font-bold italic">
                Founder, Adeyeoba High Quality Foods
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── OUR STORY / TIMELINE ── */}
      <div className="max-w-[1280px] mx-auto px-20 py-20">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[#2d7a2d] text-xs font-bold tracking-[0.1em] uppercase mb-4">
            <span className="w-8 h-0.5 bg-[#2d7a2d] inline-block" />
            Our Journey
            <span className="w-8 h-0.5 bg-[#2d7a2d] inline-block" />
          </div>
          <h2
            className="text-[38px] font-extrabold text-[#111]"
            style={{ letterSpacing: "-0.02em", fontWeight: 800 }}
          >
            15 years of <span className="text-[#2d7a2d]">feeding Lagos</span>
          </h2>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#e4f0e4]" />
          <div className="flex flex-col gap-12">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-10 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* text */}
                <div
                  className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}
                >
                  <div className="text-[#e07b20] text-[13px] font-bold uppercase tracking-widest mb-1">
                    {item.year}
                  </div>
                  <div
                    className="text-[18px] font-extrabold text-[#111] mb-2"
                    style={{ fontWeight: 800 }}
                  >
                    {item.title}
                  </div>
                  <div
                    className="text-[14px] text-[#666] leading-relaxed max-w-sm ml-auto"
                    style={{
                      fontWeight: 400,
                      ...(i % 2 !== 0 && { marginLeft: 0 }),
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
                {/* dot */}
                <div className="w-12 h-12 rounded-full bg-[#2d7a2d] flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_0_6px_#edf7ed]">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                {/* spacer */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── VALUES ── */}
      <div className="bg-white border-t border-b border-[#ececec]">
        <div className="max-w-[1280px] mx-auto px-20 py-20">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#2d7a2d] text-xs font-bold tracking-[0.1em] uppercase mb-4">
              <span className="w-8 h-0.5 bg-[#2d7a2d] inline-block" />
              What We Stand For
              <span className="w-8 h-0.5 bg-[#2d7a2d] inline-block" />
            </div>
            <h2
              className="text-[38px] font-extrabold text-[#111]"
              style={{ letterSpacing: "-0.02em", fontWeight: 800 }}
            >
              Our <span className="text-[#2d7a2d]">core values</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="bg-[#f7f7f4] rounded-2xl p-8 border border-[#ececec] hover:border-[#2d7a2d] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mb-5 shadow-sm group-hover:bg-[#edf7ed] transition-colors">
                  {v.icon}
                </div>
                <div
                  className="text-[16px] font-extrabold text-[#111] mb-2"
                  style={{ fontWeight: 800 }}
                >
                  {v.title}
                </div>
                <div
                  className="text-[14px] text-[#666] leading-relaxed"
                  style={{ fontWeight: 400 }}
                >
                  {v.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FARM PHOTO STRIP ── */}
      <div className="grid grid-cols-2" style={{ minHeight: 420 }}>
        <div className="relative overflow-hidden bg-[#f0f7f0]">
          <img
            src={PLACEHOLDER_FARM}
            alt="Our farm partners"
            className="w-full h-full object-cover block"
          />
          <div className="absolute inset-0 bg-[#1c4c1c]/60 flex flex-col justify-end p-10">
            <div className="text-[#a8d5a8] text-xs font-bold tracking-widest uppercase mb-2">
              Farm to Table
            </div>
            <div
              className="text-white text-[28px] font-extrabold leading-tight"
              style={{ fontWeight: 800 }}
            >
              Sourced directly
              <br />
              from Nigerian farms
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden bg-[#f0f7f0]">
          <img
            src={PLACEHOLDER_TEAM}
            alt="Our team"
            className="w-full h-full object-cover block"
          />
          <div className="absolute inset-0 bg-[#1c4c1c]/60 flex flex-col justify-end p-10">
            <div className="text-[#a8d5a8] text-xs font-bold tracking-widest uppercase mb-2">
              Our People
            </div>
            <div
              className="text-white text-[28px] font-extrabold leading-tight"
              style={{ fontWeight: 800 }}
            >
              A team that cares
              <br />
              about your food
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA STRIP ── */}
      <div className="bg-[#1c4c1c] px-20 py-16 flex items-center justify-between gap-10">
        <div>
          <div className="text-[#a8d5a8] text-xs font-bold tracking-widest uppercase mb-3">
            Ready to taste the difference?
          </div>
          <h3
            className="text-white text-[32px] font-extrabold leading-tight"
            style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            Fresh food, delivered <span className="text-[#e07b20]">today</span>
          </h3>
          <p className="text-white/60 text-[14px] mt-3 max-w-lg leading-relaxed">
            Shop our produce, order a hot meal, or visit us in store at 13b
            Shina E. Ezeani Cl, Eti-Osa, Lagos — open 24 hours.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => navigate("/shop")}
            className="bg-white text-[#1c4c1c] text-[14px] font-bold px-7 py-3.5 rounded-lg hover:bg-[#f0f7f0] transition-colors cursor-pointer border-none"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Shop Now
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
