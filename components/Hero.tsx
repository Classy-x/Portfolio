"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Sparkles, Send, FolderGit2 } from "lucide-react";
import { personalData, withBasePath } from "@/data/portfolio";

export default function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  const [experienceYears, setExperienceYears] = useState("1.5+");

  useEffect(() => {
    const startDate = new Date(personalData.startDate);
    const today = new Date();
    const months =
      (today.getFullYear() - startDate.getFullYear()) * 12 +
      (today.getMonth() - startDate.getMonth());
    const years = (months / 12).toFixed(1);
    setExperienceYears(`${years}+`);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4393b6]/10 dark:bg-[#4393b6]/15 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4393b6]/10 dark:bg-[#4393b6]/20 text-[#4393b6] dark:text-[#5fb0d6] text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Available for Opportunities</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I am <span className="text-[#4393b6]">Senthil</span>,
                <br />
                Full Stack Developer.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                {personalData.heroDescription}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4393b6] hover:bg-[#3c809d] text-white font-medium text-sm sm:text-base shadow-lg shadow-[#4393b6]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </Link>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#4393b6] dark:hover:border-[#4393b6] text-slate-800 dark:text-slate-100 font-medium text-sm sm:text-base shadow-sm hover:shadow hover:-translate-y-0.5 transition-all"
              >
                <FolderGit2 className="w-4 h-4 text-[#4393b6]" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Stats row */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800">
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#4393b6] tracking-tight">
                  {experienceYears}
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                  Years<br />Experience
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  5+
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                  Projects<br />Completed
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  1+
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                  Companies<br />Worked
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with decorative card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer decorative gradient frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#4393b6] to-cyan-300 rounded-3xl blur-md opacity-50 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border-2 border-white/50 dark:border-slate-700/50 shadow-2xl">
                <Image
                  src={withBasePath("/assets/img/own_pic.jpg")}
                  alt="Senthil Kumar"
                  fill
                  priority
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>

              {/* Floating pill badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-6 glass px-4 py-2.5 rounded-2xl border border-white/60 dark:border-slate-700 shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Currently building at</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Arizon Digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

