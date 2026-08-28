"use client";

import { useEffect, useState } from "react";

/** Target: 17 October, 09:00 IST (Goa, India — UTC+5:30, no DST). */
const TARGET_EPOCH = Date.UTC(2026, 9, 17, 3, 30);

const MS_DAY = 86_400_000;
const MS_HOUR = 3_600_000;
const MS_MINUTE = 60_000;
const MS_SECOND = 1_000;

function remaining(now: number) {
  const diff = Math.max(0, TARGET_EPOCH - now);
  const days = Math.floor(diff / MS_DAY);
  const hours = Math.floor((diff % MS_DAY) / MS_HOUR);
  const minutes = Math.floor((diff % MS_HOUR) / MS_MINUTE);
  const seconds = Math.floor((diff % MS_MINUTE) / MS_SECOND);
  return { days, hours, minutes, seconds };
}

/**
 * Deployment countdown — days, hours, minutes until the Goa deployment.
 * Ticks every second so the readout is always accurate.
 */
export function CountdownClock() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const { days, hours, minutes, seconds } = remaining(now ?? TARGET_EPOCH - 1);

  const pad = (value: number) => String(value).padStart(2, "0");

  return (
    <p className="font-tech text-base font-bold tabular-nums text-ink sm:text-lg">
      {now === null ? "--" : days}
      <span className="font-semibold text-ink-soft"> Days</span>
      <span aria-hidden="true" className="mx-2 text-coral">
        ·
      </span>
      {now === null ? "--" : pad(hours)}
      <span className="font-semibold text-ink-soft"> Hours</span>
      <span aria-hidden="true" className="mx-2 text-coral">
        ·
      </span>
      {now === null ? "--" : pad(minutes)}
      <span className="font-semibold text-ink-soft"> Minutes</span>
      <span aria-hidden="true" className="mx-2 text-coral">
        ·
      </span>
      {now === null ? "--" : pad(seconds)}
      <span className="font-semibold text-ink-soft"> Seconds</span>
    </p>
  );
}
