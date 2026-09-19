import React, { useState, useEffect } from "react";

const messages = [
  "Analyzing package...",
  "Reading label details...",
  "Verifying information...",
  "Checking authenticity...",
  "Cross-referencing data...",
  "Almost there...",
];

const products = [
  <svg key="carton" width="60" height="78" viewBox="0 0 60 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 14L30 4L54 14V70C54 72.2 52.2 74 50 74H10C7.8 74 6 72.2 6 70V14Z" fill="url(#g1)" stroke="#e4e4e7" strokeWidth="1" />
    <path d="M6 14L30 24L54 14" stroke="#d4d4d8" strokeWidth="1.2" fill="none" />
    <path d="M30 24V74" stroke="#e4e4e7" strokeWidth="1" />
    <rect x="16" y="34" width="28" height="9" rx="2" fill="#fbbf24" />
    <rect x="16" y="47" width="20" height="4" rx="2" fill="#d4d4d8" />
    <rect x="16" y="55" width="24" height="4" rx="2" fill="#d4d4d8" />
    <defs>
      <linearGradient id="g1" x1="6" y1="4" x2="54" y2="74" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#f4f4f5" />
      </linearGradient>
    </defs>
  </svg>,

  <svg key="bottle" width="46" height="82" viewBox="0 0 46 82" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4H28V14C28 14 34 17 34 24V74C34 77.3 31.3 80 28 80H18C14.7 80 12 77.3 12 74V24C12 17 18 14 18 14V4Z" fill="url(#g2)" stroke="#e4e4e7" strokeWidth="1" />
    <rect x="16" y="4" width="14" height="7" rx="1.5" fill="#a1a1aa" />
    <rect x="13" y="34" width="20" height="26" rx="3" fill="#fbbf24" opacity="0.9" />
    <rect x="16" y="41" width="14" height="3" rx="1.5" fill="#ffffff" opacity="0.8" />
    <rect x="16" y="47" width="10" height="3" rx="1.5" fill="#ffffff" opacity="0.6" />
    <defs>
      <linearGradient id="g2" x1="12" y1="4" x2="34" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#f4f4f5" />
      </linearGradient>
    </defs>
  </svg>,

  <svg key="pouch" width="58" height="70" viewBox="0 0 58 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 18C8 10 14 6 20 6H38C44 6 50 10 50 18V54C50 62 43 68 34 68H24C15 68 8 62 8 54V18Z" fill="url(#g3)" stroke="#e4e4e7" strokeWidth="1" />
    <path d="M8 20C16 16 42 16 50 20" stroke="#d4d4d8" strokeWidth="1" fill="none" />
    <circle cx="29" cy="38" r="11" fill="#fbbf24" opacity="0.85" />
    <rect x="18" y="54" width="22" height="4" rx="2" fill="#d4d4d8" />
    <defs>
      <linearGradient id="g3" x1="8" y1="6" x2="50" y2="68" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#f4f4f5" />
      </linearGradient>
    </defs>
  </svg>,
];

// faint floating background icons — position (top %, left %) and float direction
const bgIcons = [
  { top: "14%", left: "12%", size: 34, anim: "float-a 9s ease-in-out infinite", type: "box" },
  { top: "68%", left: "78%", size: 28, anim: "float-b 11s ease-in-out infinite", type: "list" },
  { top: "20%", left: "82%", size: 30, anim: "float-a 10s ease-in-out infinite reverse", type: "barcode" },
  { top: "74%", left: "16%", size: 26, anim: "float-b 8.5s ease-in-out infinite reverse", type: "box" },
  { top: "46%", left: "6%", size: 24, anim: "float-a 12s ease-in-out infinite", type: "check" },
  { top: "42%", left: "90%", size: 30, anim: "float-b 9.5s ease-in-out infinite", type: "list" },
];

const BgIcon = ({ type, size }) => {
  if (type === "box") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 8l-9-5-9 5 9 5 9-5z" strokeLinejoin="round" />
        <path d="M3 8v8l9 5 9-5V8" strokeLinejoin="round" />
        <path d="M12 13v8" />
      </svg>
    );
  }
  if (type === "list") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 8h10M7 12h6M7 16h8" />
      </svg>
    );
  }
  if (type === "barcode") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="6" width="1.5" height="12" />
        <rect x="7" y="6" width="1" height="12" />
        <rect x="10" y="6" width="2" height="12" />
        <rect x="14" y="6" width="1" height="12" />
        <rect x="17" y="6" width="2" height="12" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
};

const LoadingScreen = () => {
  const [productIndex, setProductIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [msgVisible, setMsgVisible] = useState(true);

  useEffect(() => {
    const productTimer = setInterval(() => {
      setProductIndex((prev) => (prev + 1) % products.length);
    }, 1000);

    const messageTimer = setInterval(() => {
      setMsgVisible(false);
      setTimeout(() => {
        setMessageIndex((prev) => (prev + 1) % messages.length);
        setMsgVisible(true);
      }, 180);
    }, 900);

    return () => {
      clearInterval(productTimer);
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <div
      className="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 38%, rgba(251,191,36,0.06), transparent 55%), radial-gradient(circle at 50% 100%, rgba(0,0,0,0.03), transparent 60%), #ffffff",
      }}
    >
 
      {bgIcons.map((icon, idx) => (
        <div
          key={idx}
          className="absolute z-0 text-zinc-400"
          style={{ top: icon.top, left: icon.left, opacity: 0.18, animation: icon.anim }}
        >
          <BgIcon type={icon.type} size={icon.size} />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center gap-1">
        <div className="relative" style={{ width: "240px", height: "230px" }}>
     
          <div
            className="absolute left-1/2 top-0 z-3 -translate-x-1/2 rounded-lg"
            style={{
              width: "72px",
              height: "24px",
              background: "linear-gradient(180deg, #3f3f46 0%, #26262a 60%, #1c1c1f 100%)",
              boxShadow:
                "0 6px 14px rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -3px 5px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="absolute left-2.5 right-2.5 top-1.5 h-px"
              style={{ background: "rgba(255,255,255,0.18)" }}
            />
            <div
              className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 rounded-sm"
              style={{
                width: "22px",
                height: "4px",
                background:
                  "linear-gradient(90deg, transparent, #fbbf24 20%, #fde68a 50%, #fbbf24 80%, transparent)",
                boxShadow: "0 0 8px 1.5px rgba(251,191,36,0.55)",
              }}
            />
          </div>

     
          <div
            className="absolute left-1/2 z-2"
            style={{
              top: "20px",
              width: "1px",
              height: "156px",
              transformOrigin: "top center",
              animation: "pendulum-swing 3s cubic-bezier(0.77, 0, 0.174, 1) infinite",
            }}
          >
            <div
              className="absolute left-1/2 top-0 h-full -translate-x-1/2"
              style={{
                width: "84px",
                background:
                  "linear-gradient(180deg, #fbbf24 0%, rgba(251,191,36,0.10) 45%, transparent 90%)",
                clipPath: "polygon(46% 0%, 54% 0%, 100% 100%, 0% 100%)",
                filter: "blur(2px)",
              }}
            />
          </div>

          <div
            className="absolute left-1/2 z-1 -translate-x-1/2 rounded-full"
            style={{
              bottom: "18px",
              width: "70px",
              height: "10px",
              background: "radial-gradient(ellipse, rgba(0,0,0,0.10), transparent 70%)",
            }}
          />

       
          <div className="absolute bottom-[34px] left-1/2 flex h-[100px] w-[90px] -translate-x-1/2 items-end justify-center">
            <div className="absolute bottom-0 transition-all duration-300 ease-in-out">
              {products[productIndex]}
            </div>
          </div>
        </div>

        <div className="mt-2.5 text-center">
          <p
            className="min-h-5 text-sm font-semibold text-zinc-600"
            style={{ opacity: msgVisible ? 1 : 0, transition: "opacity 0.18s ease" }}
          >
            {messages[messageIndex]}
          </p>

          <div className="mt-4 flex justify-center gap-1.5">
            {[0, 1, 2].map((dot) => (
              <div
                key={dot}
                className="h-1.75 w-1.75 rounded-full bg-amber-400"
                style={{ animation: `dot-bounce 1s ease-in-out infinite ${dot * 0.25}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;