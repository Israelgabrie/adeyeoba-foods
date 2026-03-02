import { useState } from "react";

const OWNER_WHATSAPP = "2347075296366";
const OWNER_EMAIL = "adeyeobafoodsng@gmail.com";

const DELIVERY_AREAS = [
  "Eti-Osa", "Lekki", "Victoria Island", "Ikoyi", "Ajah", "Sangotedo",
  "Chevron", "Ikate", "Jakande", "Osapa", "Igbo Efon", "Badore",
  "Gbagada", "Surulere", "Yaba", "Lagos Island", "Apapa", "Other (specify in notes)",
];

const PRODUCT_TYPES = [
  "Raw Crops / Produce",
  "Repackaged Staples (grains, spices etc.)",
  "Cooked Meal",
  "Ofada Sauce (Jar)",
  "Mixed Order",
];

export default function OrderPage() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    altPhone: "",
    address: "",
    area: "",
    landmark: "",
    productType: "",
    orderDetails: "",
    deliveryDate: "",
    deliveryTime: "",
    specialInstructions: "",
  });

  const [errors, setErrors] = useState({});

  const update = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim())    e.fullName    = "Full name is required";
    if (!form.phone.trim())       e.phone       = "Phone number is required";
    if (!form.address.trim())     e.address     = "Delivery address is required";
    if (!form.area)               e.area        = "Please select your area";
    if (!form.productType)        e.productType = "Please select what you're ordering";
    if (!form.orderDetails.trim()) e.orderDetails = "Please describe your order";
    return e;
  };

  const buildMessage = () => {
    return `
🛒 *NEW ORDER — ADEYEOBA FOODS*

👤 *Customer Details*
• Full Name: ${form.fullName}
• Phone (Recipient): ${form.phone}
${form.altPhone ? `• Alt Phone: ${form.altPhone}` : ""}

📍 *Delivery Details*
• Address: ${form.address}
• Area: ${form.area}
${form.landmark ? `• Landmark: ${form.landmark}` : ""}

🍽️ *Order Details*
• Type: ${form.productType}
• Order: ${form.orderDetails}
${form.deliveryDate ? `• Preferred Date: ${form.deliveryDate}` : ""}
${form.deliveryTime ? `• Preferred Time: ${form.deliveryTime}` : ""}
${form.specialInstructions ? `• Special Instructions: ${form.specialInstructions}` : ""}

_Sent via Adeyeoba Foods website_
    `.trim();
  };

  const handleWhatsApp = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const msg = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${msg}`, "_blank");
  };

  const handleEmail = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const subject = encodeURIComponent(`New Order from ${form.fullName} — Adeyeoba Foods`);
    const body = encodeURIComponent(buildMessage());
    window.open(`mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`, "_self");
  };

  const Field = ({ label, required, error, children }) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-bold text-[#333] tracking-wide">
        {label} {required && <span className="text-[#e07b20]">*</span>}
      </label>
      {children}
      {error && <span className="text-[12px] text-red-500 font-semibold">{error}</span>}
    </div>
  );

  const inputCls = (err) =>
    `w-full bg-white border ${err ? "border-red-400" : "border-[#ddd]"} rounded-xl px-4 py-3 text-[14px] text-[#222] font-medium outline-none focus:border-[#2d7a2d] focus:ring-2 focus:ring-[#2d7a2d]/10 transition-all placeholder:text-[#bbb] placeholder:font-normal`;

  return (
    <div className="min-h-screen bg-[#f7f7f4]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", paddingTop: 68 }}>

      {/* ── HERO ── */}
      <div className="bg-[#1c4c1c] relative overflow-hidden">
        <div className="absolute right-24 top-1/2 -translate-y-1/2 text-[200px] opacity-[0.04] select-none">🛒</div>
        <div className="max-w-3xl mx-auto px-8 py-14 text-center">
          <div className="inline-flex items-center gap-2 bg-[#edf7ed] text-[#2d7a2d] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-5 border-l-4 border-[#2d7a2d] w-fit mx-auto">
            🛵 Lagos Delivery · Nationwide Shipping
          </div>
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-4" style={{ letterSpacing: "-0.025em", fontWeight: 800 }}>
            Place your <span className="text-[#e07b20]">order</span>
          </h1>
          <p className="text-white/70 text-[15px] leading-relaxed max-w-lg mx-auto" style={{ fontWeight: 400 }}>
            Fill in your details below and send your order directly to us via WhatsApp or Email. We'll confirm and get it to you as fast as possible.
          </p>
        </div>
      </div>

      {/* ── FORM ── */}
      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* validation error banner */}
        {Object.keys(errors).length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-2xl px-6 py-4 mb-8 flex items-start gap-3">
            <span className="text-xl flex-shrink-0">⚠️</span>
            <div>
              <div className="text-[14px] font-bold text-red-700 mb-1">Please fix the following before sending:</div>
              <ul className="list-disc list-inside text-[13px] text-red-600 space-y-0.5">
                {Object.values(errors).map((e, i) => <li key={i}>{e}</li>)}
              </ul>
            </div>
          </div>
        )}

        {/* ── SECTION 1: Your Details ── */}
        <div className="bg-white rounded-2xl border border-[#ececec] p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-[#edf7ed] rounded-xl flex items-center justify-center text-lg">👤</div>
            <div>
              <div className="text-[11px] font-bold text-[#2d7a2d] tracking-widest uppercase">Step 1</div>
              <div className="text-[17px] font-extrabold text-[#111]" style={{ fontWeight: 800 }}>Your Details</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2">
              <Field label="Full Name of Recipient" required error={errors.fullName}>
                <input
                  type="text"
                  placeholder="e.g. Chioma Okafor"
                  value={form.fullName}
                  onChange={e => update("fullName", e.target.value)}
                  className={inputCls(errors.fullName)}
                />
              </Field>
            </div>
            <Field label="Phone Number (Recipient)" required error={errors.phone}>
              <input
                type="tel"
                placeholder="e.g. 0812 345 6789"
                value={form.phone}
                onChange={e => update("phone", e.target.value)}
                className={inputCls(errors.phone)}
              />
              <span className="text-[11px] text-[#aaa] font-medium -mt-0.5">This is the number our delivery guy will call on arrival</span>
            </Field>
            <Field label="Alternative Phone Number" error={errors.altPhone}>
              <input
                type="tel"
                placeholder="Optional backup number"
                value={form.altPhone}
                onChange={e => update("altPhone", e.target.value)}
                className={inputCls(errors.altPhone)}
              />
            </Field>
          </div>
        </div>

        {/* ── SECTION 2: Delivery Details ── */}
        <div className="bg-white rounded-2xl border border-[#ececec] p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-[#edf7ed] rounded-xl flex items-center justify-center text-lg">📍</div>
            <div>
              <div className="text-[11px] font-bold text-[#2d7a2d] tracking-widest uppercase">Step 2</div>
              <div className="text-[17px] font-extrabold text-[#111]" style={{ fontWeight: 800 }}>Delivery Details</div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Field label="Full Delivery Address" required error={errors.address}>
              <textarea
                rows={3}
                placeholder="e.g. 5 Okonkwo Street, off Admiralty Way, Lekki Phase 1"
                value={form.address}
                onChange={e => update("address", e.target.value)}
                className={inputCls(errors.address) + " resize-none"}
              />
            </Field>
            <div className="grid grid-cols-2 gap-5">
              <Field label="Delivery Area" required error={errors.area}>
                <select
                  value={form.area}
                  onChange={e => update("area", e.target.value)}
                  className={inputCls(errors.area)}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <option value="">Select your area...</option>
                  {DELIVERY_AREAS.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </Field>
              <Field label="Closest Landmark" error={errors.landmark}>
                <input
                  type="text"
                  placeholder="e.g. Beside GTBank, opposite Shoprite"
                  value={form.landmark}
                  onChange={e => update("landmark", e.target.value)}
                  className={inputCls(errors.landmark)}
                />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <Field label="Preferred Delivery Date" error={errors.deliveryDate}>
                <input
                  type="date"
                  value={form.deliveryDate}
                  onChange={e => update("deliveryDate", e.target.value)}
                  className={inputCls(errors.deliveryDate)}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                />
              </Field>
              <Field label="Preferred Delivery Time" error={errors.deliveryTime}>
                <input
                  type="time"
                  value={form.deliveryTime}
                  onChange={e => update("deliveryTime", e.target.value)}
                  className={inputCls(errors.deliveryTime)}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                />
              </Field>
            </div>
          </div>
        </div>

        {/* ── SECTION 3: Order Details ── */}
        <div className="bg-white rounded-2xl border border-[#ececec] p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-[#edf7ed] rounded-xl flex items-center justify-center text-lg">🍽️</div>
            <div>
              <div className="text-[11px] font-bold text-[#2d7a2d] tracking-widest uppercase">Step 3</div>
              <div className="text-[17px] font-extrabold text-[#111]" style={{ fontWeight: 800 }}>Your Order</div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Field label="What are you ordering?" required error={errors.productType}>
              <select
                value={form.productType}
                onChange={e => update("productType", e.target.value)}
                className={inputCls(errors.productType)}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <option value="">Select order type...</option>
                {PRODUCT_TYPES.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </Field>
            <Field label="Describe your order in detail" required error={errors.orderDetails}>
              <textarea
                rows={5}
                placeholder={`e.g.\n• 2kg of tomatoes\n• 1 tuber of yam\n• Smoky Jollof Rice (1 plate) with chicken\n• 500g ofada rice\n\nBe as specific as possible — quantities, sizes, proteins, etc.`}
                value={form.orderDetails}
                onChange={e => update("orderDetails", e.target.value)}
                className={inputCls(errors.orderDetails) + " resize-none"}
              />
              <span className="text-[11px] text-[#aaa] font-medium -mt-0.5">The more detail you give, the faster we can confirm your order.</span>
            </Field>
            <Field label="Special Instructions" error={errors.specialInstructions}>
              <textarea
                rows={2}
                placeholder="e.g. No pepper please, call before arriving, leave at gateman, etc."
                value={form.specialInstructions}
                onChange={e => update("specialInstructions", e.target.value)}
                className={inputCls(errors.specialInstructions) + " resize-none"}
              />
            </Field>
          </div>
        </div>

        {/* ── SEND BUTTONS ── */}
        <div className="bg-white rounded-2xl border border-[#ececec] p-8">
          <div className="text-center mb-6">
            <div className="text-[17px] font-extrabold text-[#111] mb-1" style={{ fontWeight: 800 }}>How would you like to send your order?</div>
            <div className="text-[13px] text-[#888]">Choose WhatsApp for a faster response, or Email if you prefer.</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* WhatsApp */}
            <button
              onClick={handleWhatsApp}
              className="flex flex-col items-center gap-3 bg-[#25D366] hover:bg-[#1fba59] text-white rounded-2xl px-6 py-7 cursor-pointer border-none transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(37,211,102,0.30)] group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-200">💬</span>
              <div>
                <div className="text-[16px] font-extrabold" style={{ fontWeight: 800 }}>Order via WhatsApp</div>
                <div className="text-white/80 text-[12px] mt-1">Fastest response · Chat directly</div>
              </div>
            </button>
            {/* Email */}
            <button
              onClick={handleEmail}
              className="flex flex-col items-center gap-3 bg-[#2d7a2d] hover:bg-[#256325] text-white rounded-2xl px-6 py-7 cursor-pointer border-none transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(45,122,45,0.25)] group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-200">📧</span>
              <div>
                <div className="text-[16px] font-extrabold" style={{ fontWeight: 800 }}>Order via Email</div>
                <div className="text-white/80 text-[12px] mt-1">Formal record · Opens mail app</div>
              </div>
            </button>
          </div>
          <div className="flex items-start gap-2.5 mt-5 bg-[#f7f7f4] rounded-xl px-4 py-3.5 border border-[#ececec]">
            <span className="text-base flex-shrink-0 mt-0.5">ℹ️</span>
            <p className="text-[12px] text-[#888] leading-relaxed" style={{ fontWeight: 400 }}>
              Clicking either button will open WhatsApp or your email app with your order already filled in. We'll confirm your order and delivery fee as soon as we receive it. <strong className="text-[#555]">No payment is taken on this website.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}