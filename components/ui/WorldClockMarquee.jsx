"use client";

import { useEffect, useState } from "react";
import { worldClockCities } from "@/lib/data";

export default function WorldClockMarquee() {
  const [times, setTimes] = useState({});

  useEffect(() => {
    function updateAllTimes() {
      const now = new Date();
      const updated = {};

      worldClockCities.forEach(({ city, zone }) => {
        try {
          const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: zone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          });
          updated[city] = formatter.format(now);
        } catch {
          updated[city] = "--:--:--";
        }
      });

      setTimes(updated);
    }

    updateAllTimes();
    const interval = setInterval(updateAllTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  // Duplicate items twice to ensure endless continuous loop without jarring gap
  const repeatedCities = [...worldClockCities, ...worldClockCities, ...worldClockCities];

  return (
    <div className="w-full overflow-hidden border-b border-black/[0.06] dark:border-white/[0.08] bg-paper-subtle/50 dark:bg-paper-darkSubtle/40 backdrop-blur-sm select-none py-2 text-xs font-mono">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
        {repeatedCities.map((item, index) => {
          const time = times[item.city] || "--:--:--";
          return (
            <div
              key={`${item.city}-${index}`}
              className="inline-flex items-center space-x-2 px-6 text-[#4a5048] dark:text-[#a0a89d]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sage-400 dark:bg-sage-300 animate-pulse" />
              <span className="font-medium text-[#1d211b] dark:text-[#e4e8e1]">
                {item.city}
              </span>
              <span className="opacity-50">[{item.label}]</span>
              <span className="text-sage-700 dark:text-sage-300 font-semibold tracking-wider">
                {time}
              </span>
              <span className="opacity-30 pl-4">/</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
