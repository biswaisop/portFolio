"use client";

import { useEffect, useState } from "react";

const india = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
const indiaYear = new Intl.DateTimeFormat("en", { timeZone: "Asia/Kolkata", year: "numeric" });

export default function LocalTime() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="footer-time">
      <div><span>Year</span><p suppressHydrationWarning>{indiaYear.format(now || new Date())}</p></div>
      <div><span>Local time</span><p>{now ? `${india.format(now)} IST` : "India Standard Time"}</p></div>
    </div>
  );
}
