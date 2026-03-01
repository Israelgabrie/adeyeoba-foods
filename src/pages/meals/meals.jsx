import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MEAL_IMG = "/images/meals/placeholder.jpg";

const CATEGORIES = ["All", "Rice Dishes", "Soups & Swallow", "Light Meals", "Specials"];

const MEALS = [
  // Rice Dishes
  { id: 1,  name: "Smoky Jollof Rice",      desc: "Party-style jollof with that signature smoky bottom, served with your choice of protein.",            price: "₦2,500", tag: "Rice Dishes",     badge: "🔥 Bestseller",     img: MEAL_IMG },
  { id: 2,  name: "Ofada Rice & Sauce",     desc: "Locally grown ofada rice paired with our rich, peppery ofada stew and assorted meat.",                price: "₦3,000", tag: "Rice Dishes",     badge: "🌾 Local Special",  img: MEAL_IMG },
  { id: 3,  name: "Fried Rice",             desc: "Golden stir-fried rice loaded with mixed vegetables, liver, and shrimp.",                             price: "₦2,500", tag: "Rice Dishes",     badge: null,                img: MEAL_IMG },
  { id: 4,  name: "White Rice & Stew",      desc: "Fluffy steamed white rice with our slow-cooked tomato beef stew.",                                    price: "₦2,000", tag: "Rice Dishes",     badge: null,                img: MEAL_IMG },
  // Soups & Swallow
  { id: 5,  name: "Eba & Egusi Soup",       desc: "Smooth golden eba served with rich egusi soup loaded with spinach and assorted meats.",               price: "₦2,500", tag: "Soups & Swallow", badge: "❤️ Comfort Food",   img: MEAL_IMG },
  { id: 6,  name: "Semo & Vegetable Soup",  desc: "Silky smooth semo paired with our freshly made efo riro vegetable soup.",                            price: "₦2,500", tag: "Soups & Swallow", badge: null,                img: MEAL_IMG },
  { id: 7,  name: "Pounded Yam & Egusi",    desc: "Freshly pounded yam served with thick egusi soup and your choice of meat or fish.",                   price: "₦3,500", tag: "Soups & Swallow", badge: "⭐ Premium",        img: MEAL_IMG },
  { id: 8,  name: "Amala & Ewedu",          desc: "Classic Lagos amala with ewedu soup, gbegiri, and stewed assorted meats.",                           price: "₦2,500", tag: "Soups & Swallow", badge: "🏙️ Lagos Classic",  img: MEAL_IMG },
  { id: 9,  name: "Fufu & Oha Soup",        desc: "Soft fufu paired with aromatic oha leaf soup and slow-cooked assorted meat.",                         price: "₦3,000", tag: "Soups & Swallow", badge: null,                img: MEAL_IMG },
  // Light Meals
  { id: 10, name: "Yam & Egg Sauce",        desc: "Boiled or fried yam served with a spicy, well-seasoned egg and tomato sauce.",                       price: "₦1,800", tag: "Light Meals",     badge: null,                img: MEAL_IMG },
  { id: 11, name: "Yam Porridge",           desc: "Hearty yam porridge cooked with palm oil, crayfish, and fresh vegetables.",                          price: "₦2,000", tag: "Light Meals",     badge: "❤️ Comfort Food",   img: MEAL_IMG },
  { id: 12, name: "Spaghetti & Sauce",      desc: "Nigerian-style spaghetti cooked in rich tomato stew with chicken or beef.",                          price: "₦2,000", tag: "Light Meals",     badge: null,                img: MEAL_IMG },
  { id: 13, name: "Plantain & Egg",         desc: "Fried sweet plantain served with peppered scrambled eggs.",                                          price: "₦1,500", tag: "Light Meals",     badge: null,                img: MEAL_IMG },
  { id: 14, name: "Beans & Plantain",       desc: "Well-seasoned honey beans cooked with palm oil, served with fried sweet plantain.",                  price: "₦1,800", tag: "Light Meals",     badge: null,                img: MEAL_IMG },
  // Specials
  { id: 15, name: "Ofada Sauce (Jar)",      desc: "Our signature ofada sauce packaged to take home — pairs with any rice or swallow.",                  price: "₦3,500", tag: "Specials",        badge: "🫙 Take Home",      img: MEAL_IMG },
  { id: 16, name: "Pepper Soup",            desc: "Deeply spiced catfish or goat meat pepper soup — perfect as a starter or a light meal.",             price: "₦3,000", tag: "Specials",        badge: "🌶️ Spicy",          img: MEAL_IMG },
];

export default function MealsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const navigate = useNavigate();

  const filtered = activeTab === "All" ? MEALS : MEALS.filter(m => m.tag === activeTab);

  return (
    <div className="min-h-screen bg-[#f7f7f4]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", paddingTop: 68 }}>

      {/* ── HERO ── */}
      <div className="bg-white border-b border-[#ececec] grid grid-cols-2 overflow-hidden" style={{ minHeight: 500 }}>
        {/* left */}
        <div className="flex flex-col justify-center px-20 py-16">
          <div className="inline-flex items-center gap-2 bg-[#edf7ed] text-[#2d7a2d] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-6 border-l-4 border-[#2d7a2d] w-fit">
            🍽️ Lagos Delivery Only
          </div>
          <h1 className="text-5xl font-extrabold text-[#111] leading-tight mb-4" style={{ letterSpacing: "-0.025em", fontWeight: 800 }}>
            Fresh meals, <br />
            <span className="text-[#2d7a2d]">cooked to order</span>
          </h1>
          <p className="text-[15px] text-[#666] leading-relaxed max-w-md mb-8" style={{ fontWeight: 400 }}>
            Every dish is prepared fresh when you order — no batch cooking, no reheating.
            Real Nigerian food, delivered hot to your door anywhere within Lagos State.
          </p>
          <div className="grid grid-cols-2 gap-x-7 gap-y-2.5">
            {[
              { icon: "🔥", text: "Cooked fresh per order" },
              { icon: "🛵", text: "Hot delivery in Lagos" },
              { icon: "🌿", text: "Farm-fresh ingredients" },
              { icon: "⏱️", text: "45–60 min delivery" },
            ].map(p => (
              <div key={p.text} className="flex items-center gap-2 text-[13px] font-medium text-[#444]">
                <span>{p.icon}</span><span>{p.text}</span>
              </div>
            ))}
          </div>
        </div>
        {/* right */}
        <div className="relative overflow-hidden bg-[#f0f7f0] border-l border-[#e4f0e4]">
          <img src={MEAL_IMG} alt="Fresh Nigerian food" className="w-full h-full object-cover block" />
          <div className="absolute bottom-7 left-7 bg-white/95 backdrop-blur rounded-xl px-4 py-3.5 flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <div className="w-10 h-10 bg-[#edf7ed] rounded-xl flex items-center justify-center text-xl flex-shrink-0">🍲</div>
            <div>
              <div className="text-[15px] font-extrabold text-[#111] leading-tight">Made fresh daily</div>
              <div className="text-xs text-[#888] mt-0.5">No reheated food — ever</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BANNER STRIP ── */}
      <div className="bg-[#1c4c1c] grid grid-cols-4">
        {[
          { icon: "📍", title: "Lagos Delivery Only",    desc: "All areas within Lagos State" },
          { icon: "⏱️", title: "45–60 Min",              desc: "Average delivery time" },
          { icon: "📞", title: "Order by Call/WhatsApp", desc: "0707 529 6366" },
          { icon: "🕐", title: "Open 24 Hours",          desc: "Order anytime" },
        ].map((b, i) => (
          <div key={i} className="px-8 py-7 flex items-center gap-4 border-r border-white/10 last:border-r-0">
            <span className="text-2xl flex-shrink-0">{b.icon}</span>
            <div>
              <div className="text-white text-[13px] font-bold mb-0.5">{b.title}</div>
              <div className="text-white/50 text-xs">{b.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── MENU SECTION ── */}
      <div className="max-w-[1280px] mx-auto px-20 py-16">

        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[#2d7a2d] text-xs font-bold tracking-[0.1em] uppercase mb-3">
              <span className="w-8 h-0.5 bg-[#2d7a2d] inline-block" />
              Our Menu
            </div>
            <h2 className="text-[38px] font-extrabold text-[#111] leading-tight" style={{ letterSpacing: "-0.02em", fontWeight: 800 }}>
              What's <span className="text-[#2d7a2d]">cooking today</span>
            </h2>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="bg-[#2d7a2d] text-white text-[14px] font-bold px-7 py-3.5 rounded-lg hover:bg-[#256325] transition-colors cursor-pointer border-none"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Place an Order →
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap mb-9">
          {CATEGORIES.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`text-[13px] font-semibold px-5 py-2 rounded-full border cursor-pointer transition-all duration-150 ${
                activeTab === t
                  ? "bg-[#2d7a2d] border-[#2d7a2d] text-white"
                  : "bg-white border-[#ddd] text-[#555] hover:border-[#2d7a2d] hover:text-[#2d7a2d]"
              }`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-6">
          {filtered.map(meal => (
            <div
              key={meal.id}
              onClick={() => navigate("/order")}
              className="bg-white rounded-2xl overflow-hidden border border-[#ececec] cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] group"
            >
              {/* image */}
              <div className="relative overflow-hidden h-44 bg-[#f0f7f0]">
                <img
                  src={meal.img}
                  alt={meal.name}
                  className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-105"
                />
                {meal.badge && (
                  <div className="absolute top-3 left-3 bg-[#1c4c1c] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {meal.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-[#1c4c1c]/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-[14px] font-bold tracking-wide">
                  Order Now →
                </div>
              </div>
              {/* body */}
              <div className="p-4">
                <div className="text-[11px] font-bold text-[#2d7a2d] uppercase tracking-widest mb-1.5">{meal.tag}</div>
                <div className="text-[15px] font-extrabold text-[#111] mb-1.5 leading-snug" style={{ fontWeight: 800 }}>{meal.name}</div>
                <div className="text-[12px] text-[#888] leading-relaxed mb-4" style={{ fontWeight: 400 }}>{meal.desc}</div>
                <div className="flex items-center justify-between">
                  <div className="text-[16px] font-extrabold text-[#e07b20]" style={{ fontWeight: 800 }}>{meal.price}</div>
                  <button
                    onClick={e => { e.stopPropagation(); navigate("/order"); }}
                    className="text-[12px] font-bold bg-[#2d7a2d] text-white px-4 py-1.5 rounded-lg hover:bg-[#256325] transition-colors border-none cursor-pointer"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── NOTE STRIP ── */}
      <div className="bg-[#1c4c1c] px-20 py-10 flex items-center gap-6">
        <span className="text-4xl flex-shrink-0">📝</span>
        <div className="flex-1">
          <div className="text-white text-[16px] font-extrabold mb-1" style={{ fontWeight: 800 }}>Don't see what you're craving?</div>
          <div className="text-white/60 text-[13px] leading-relaxed">
            We cook much more than what's listed. Call or WhatsApp us on{" "}
            <strong className="text-white">0707 529 6366</strong> and tell us what you want — we'll let you know if we can make it.
          </div>
        </div>
        <button
          onClick={() => navigate("/order")}
          className="flex-shrink-0 text-[13px] font-bold border-[1.5px] border-[#e07b20] text-[#e07b20] bg-transparent px-6 py-3 rounded-lg hover:bg-[#e07b20] hover:text-white transition-all cursor-pointer whitespace-nowrap"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Make a Custom Order
        </button>
      </div>

    </div>
  );
}