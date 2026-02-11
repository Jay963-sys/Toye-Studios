"use client";

import { useState, useEffect, ReactElement } from "react";

export default function Clock(): ReactElement {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-start md:items-end">
        <span className="text-[8px] font-mono text-amber-500/50 uppercase tracking-[0.3em]">
          Studio_Time // LON_UK
        </span>
        <span className="text-[11px] font-mono text-white/60 tracking-widest mt-0.5">
          {time || "00:00:00"}
        </span>
      </div>
      <div className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-20"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500/40"></span>
      </div>
    </div>
  );
}
