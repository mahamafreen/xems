"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const PROJECTS = [
  {
    label: "Archman Consultants",
    desc: "Architectural consultancy website with interactive project showcases",
    tags: ["Next.js", "D3.js", "TypeScript"],
    stat: "< 200ms Load",
  },
  {
    label: "Cactus Coffee",
    desc: "E-commerce storefront with seamless Stripe checkout & modern UI",
    tags: ["Next.js", "Stripe", "Tailwind"],
    stat: "45% More Engagement",
  },
  {
    label: "Your Project",
    desc: "A landing page, portfolio, or web app — live in 48 hours flat",
    tags: ["Any Stack", "Any Idea", "Any Scale"],
    stat: "Delivered in 48 hrs",
    highlight: true,
  },
];

const SPOTS_LEFT = 3; // update manually each month

export function FastLaunchSection() {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Countdown to end of current month
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      setSecondsLeft(Math.floor((endOfMonth.getTime() - now.getTime()) / 1000));
    };
    tick();
    intervalRef.current = setInterval(tick, 1000);
    return () => clearInterval(intervalRef.current!);
  }, []);

  const days = Math.floor(secondsLeft / 86400);
  const hours = Math.floor((secondsLeft % 86400) / 3600);
  const mins = Math.floor((secondsLeft % 3600) / 60);
  const secs = secondsLeft % 60;

  return (
    <section className="relative w-full bg-black py-24 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, #6366f1 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-400 mb-4">
          Limited Offer · {SPOTS_LEFT} spots left this month
        </p>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
          Ship your idea in{" "}
          <span className="text-indigo-400">48 hours.</span>
          <br />
          <span className="text-white/40">$250. No surprises.</span>
        </h2>

        <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
          We build your landing page, portfolio, or business web app — fully
          custom, production-ready. If we miss the 48-hour deadline, you pay
          nothing.
        </p>

        {/* What's included */}
        <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl text-sm text-white/70">
          {[
            "Custom design — no templates",
            "Mobile-responsive out of the box",
            "Deployed & live on your domain",
            "1 round of revisions included",
            "Source code handed over",
            "48-hour hard deadline guarantee",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-indigo-400 text-base">✓</span>
              {item}
            </li>
          ))}
        </ul>

        {/* CTA row */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-400 transition-colors px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30"
          >
            Claim Your Spot
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <p className="text-xs text-white/40">
            Month resets in{" "}
            <span className="text-white/70 font-mono">
              {days}d {hours}h {mins}m {secs}s
            </span>
          </p>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-10 h-px bg-white/10" />

        {/* Project cards */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-6">
          Recent 48-hr builds
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {PROJECTS.map((p) => (
            <div
              key={p.label}
              className={`rounded-xl border p-5 flex flex-col gap-3 transition-all ${
                p.highlight
                  ? "border-indigo-500/50 bg-indigo-950/40"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <p
                  className={`text-sm font-semibold ${
                    p.highlight ? "text-indigo-300" : "text-white"
                  }`}
                >
                  {p.label}
                </p>
                <span
                  className={`shrink-0 text-xs font-mono px-2 py-0.5 rounded-full ${
                    p.highlight
                      ? "bg-indigo-500/20 text-indigo-300"
                      : "bg-white/10 text-white/50"
                  }`}
                >
                  {p.stat}
                </span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p className="mt-8 text-xs text-white/25 max-w-lg">
          Offer covers single-page sites, landing pages, portfolios, and simple
          web apps. Multi-page platforms or custom backend work are quoted
          separately. Deadline guarantee applies to agreed scope only.
        </p>
      </div>
    </section>
  );
}