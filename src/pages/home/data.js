// ─────────────────────────────────────────────
// ADEYEOBA FOODS — Home Page Data
// Move this file to src/data/homeData.js
// ─────────────────────────────────────────────

// ── Image imports (adjust paths to match your project structure)
import imgFamily1 from "../../assets/img1.png";       // family eating at table (warm/dim light)
import imgFamily2 from "../../assets/img2.png";       // family with colorful veggies
import imgCommunity from "../../assets/img3.png";     // people with baskets of produce outdoors
import imgDelivery from "../../assets/img4.png";      // people exchanging boxes of produce

import imgRice from "../../assets/prod-rice.png";         // bowl of white rice
import imgOil from "../../assets/prod-oil.png";           // groundnut oil bottle
import imgBeans from "../../assets/prod-beans.png";       // bowl of beans
import imgTomatoes from "../../assets/prod-tomatoes.png"; // fresh tomatoes
import imgCarrots from "../../assets/prod-carrots.png";   // spiced carrots
import imgPepper from "../../assets/prod-pepper.png";     // red bell peppers

// ── Re-export images so components can import from one place
export const IMAGES = {
  family1: imgFamily1,
  family2: imgFamily2,
  community: imgCommunity,
  delivery: imgDelivery,
};

// ── Nav links
export const NAV_LINKS = ["Home", "Shop", "Meals", "About Us", "Contact"];

// ── Hero perks (below CTA buttons)
export const PERKS = [
  { icon: "✅", text: "100% Natural Products" },
  { icon: "✅", text: "Same-Day Lagos Delivery" },
  { icon: "✅", text: "Export-Ready Packaging" },
  { icon: "✅", text: "Wholesale Pricing Available" },
];

// ── Banner strip (dark green bar)
export const BANNERS = [
  { icon: "🌱", title: "100% Natural", desc: "No chemicals, pure farm produce" },
  { icon: "🚚", title: "Lagos Delivery", desc: "Hot meals at your doorstep daily" },
  { icon: "📦", title: "Export Ready", desc: "We ship home & abroad" },
  { icon: "💳", title: "Flexible Payment", desc: "Pay on delivery available" },
];

// ── Story section stats
export const STATS = [
  { num: "500+", label: "Products" },
  { num: "10k+", label: "Customers" },
  { num: "15+",  label: "Years" },
];

// ── Category browse tabs
export const TABS = ["All", "Raw Crops", "Repackaged", "Cooked Meals", "Export"];

// ── Browse categories
export const CATEGORIES = [
  { icon: "🌽", name: "Grains & Cereals",    desc: "Rice, maize, millet, sorghum and more" },
  { icon: "🍅", name: "Vegetables & Fruits", desc: "Fresh farm vegetables and seasonal fruits" },
  { icon: "🫘", name: "Legumes & Nuts",       desc: "Beans, groundnuts, cashew, sesame seeds" },
  { icon: "🧂", name: "Spices & Seasonings", desc: "Pure natural spices from Nigerian farms" },
  { icon: "🍲", name: "Cooked Meals",         desc: "Order any meal, delivered hot in Lagos" },
  { icon: "📦", name: "Repackaged Foods",     desc: "Branded staples: rice, flour, garri & more" },
];

// ── Featured products — now with real photos
export const FEATURED = [
  {
    img: imgRice,
    name: "Local Rice (5kg)",
    price: "₦4,500",
    tag: "Best Seller",
    desc: "Premium Nigerian long-grain rice, stone-free and freshly milled.",
  },
  {
    img: imgOil,
    name: "Groundnut Oil (1L)",
    price: "₦3,200",
    tag: "Natural",
    desc: "Pure cold-pressed groundnut oil, no additives, rich flavour.",
  },
  {
    img: imgBeans,
    name: "Brown Beans (2kg)",
    price: "₦1,900",
    tag: "Organic",
    desc: "Freshly harvested Nigerian brown beans, clean and sorted.",
  },
  {
    img: imgTomatoes,
    name: "Fresh Tomatoes (1kg)",
    price: "₦800",
    tag: "Farm Fresh",
    desc: "Vine-ripened tomatoes sourced directly from our farms.",
  },
  {
    img: imgPepper,
    name: "Bell Peppers (500g)",
    price: "₦950",
    tag: "Farm Fresh",
    desc: "Crisp, juicy red bell peppers packed with natural sweetness.",
  },
  {
    img: imgCarrots,
    name: "Spiced Carrots (500g)",
    price: "₦700",
    tag: "New",
    desc: "Fresh carrots seasoned with our signature spice blend.",
  },
];

// ── Delivery steps
export const DELIVERY_STEPS = [
  {
    n: 1,
    title: "Place your order",
    desc: "Tell us what meal you want and your delivery address in Lagos.",
  },
  {
    n: 2,
    title: "We cook it fresh",
    desc: "Our chefs prepare your meal from fresh, natural ingredients.",
  },
  {
    n: 3,
    title: "Delivered hot to you",
    desc: "We bring it straight to your door, hot and ready to eat.",
  },
];