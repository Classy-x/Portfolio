"use client";

import { useState } from "react";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
  Building2,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { testimonialsData } from "@/data/portfolio";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#4393b6]/10 text-[#4393b6] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Colleague & Stakeholder Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Testimonials & Recommendations
          </h2>
          <div className="w-12 h-1 bg-[#4393b6] mx-auto mt-4 rounded-full" />
        </div>

        {/* Quick Reviewer Switcher Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {testimonialsData.map((item, idx) => (
            <button
              key={item.company}
              onClick={() => setCurrentIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                currentIndex === idx
                  ? "bg-[#4393b6] text-white shadow-md shadow-[#4393b6]/25"
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-[#4393b6]"
              }`}
            >
              <span>{item.company}</span>
            </button>
          ))}
        </div>

        {/* Featured Testimonial Card */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl transition-all">
          {/* Top row: Rating and Project Tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            {current.project && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 w-fit">
                <Briefcase className="w-3.5 h-3.5 text-[#4393b6]" />
                <span>Project: {current.project}</span>
              </span>
            )}
          </div>

          {/* Quote Body */}
          <div className="relative mb-10">
            <Quote className="absolute -top-5 -left-3 sm:-left-6 w-12 h-12 text-[#4393b6]/15 dark:text-[#4393b6]/25 -z-0 pointer-events-none" />
            <p className="relative z-10 text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed italic">
              &ldquo;{current.content}&rdquo;
            </p>
          </div>

          {/* Footer: Reviewer Info & Nav Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-slate-100 dark:border-slate-800 pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#4393b6] to-cyan-400 text-white font-bold text-lg flex items-center justify-center shadow-md">
                {current.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    {current.name}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#4393b6] font-medium">
                  {current.role}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                  <Building2 className="w-3 h-3" />
                  <span>{current.company}</span>
                </p>
              </div>
            </div>

            {/* Carousel navigation buttons */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                onClick={prevSlide}
                aria-label="Previous recommendation"
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors shadow-xs hover:border-[#4393b6]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next recommendation"
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors shadow-xs hover:border-[#4393b6]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-[#4393b6]"
                    : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
