"use client";

import { useState } from "react";
import { Briefcase, GraduationCap, Calendar, FileDown, CheckCircle } from "lucide-react";
import { experienceData, educationData } from "@/data/portfolio";

export default function Qualification({ onOpenResume }: { onOpenResume: () => void }) {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section id="qualification" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#4393b6] mb-2">
            Experience & Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Qualification
          </h2>
          <div className="w-12 h-1 bg-[#4393b6] mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/60 dark:border-slate-700/60">
            <button
              onClick={() => setActiveTab("experience")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "experience"
                  ? "bg-white dark:bg-slate-900 text-[#4393b6] shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "education"
                  ? "bg-white dark:bg-slate-900 text-[#4393b6] shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-3xl mx-auto">
          {activeTab === "experience" ? (
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {experienceData.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-start group"
                >
                  {/* Timeline bullet */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-[#4393b6] flex items-center justify-center z-10 shadow">
                    <div className="w-2 h-2 rounded-full bg-[#4393b6]" />
                  </div>

                  {/* Card container */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:ml-auto"
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#4393b6]/10 text-[#4393b6] mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h4>
                      <p className="text-sm font-semibold text-[#4393b6] mb-2">
                        {item.company}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-start group"
                >
                  {/* Timeline bullet */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-[#4393b6] flex items-center justify-center z-10 shadow">
                    <div className="w-2 h-2 rounded-full bg-[#4393b6]" />
                  </div>

                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:ml-auto"
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#4393b6]/10 text-[#4393b6] mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.degree}
                      </h4>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
                        {item.institution}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Resume Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#4393b6]/10 via-[#4393b6]/5 to-transparent border border-[#4393b6]/20 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Explore my resume for more details
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Download complete CV with details on education, tech stack, and achievements.
            </p>
          </div>
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4393b6] hover:bg-[#3c809d] text-white font-semibold shadow-md shadow-[#4393b6]/25 transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
}

