"use client";

import { useState, useEffect } from "react";
import {
  ExternalLink,
  Layers,
  Server,
  ShieldCheck,
  Cloud,
  Bot,
  Brain,
  Sparkles,
  Code2,
} from "lucide-react";
import { personalData, skillsData, calculateExperienceYears } from "@/data/portfolio";

export default function About() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [experienceYears, setExperienceYears] = useState("2.5+");

  useEffect(() => {
    setExperienceYears(calculateExperienceYears(personalData.startDate));
  }, []);

  const getCategoryIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("front")) {
      return <Layers className="w-5 h-5 text-[#4393b6]" />;
    }
    if (cat.includes("back") || cat.includes("database")) {
      return <Server className="w-5 h-5 text-emerald-500" />;
    }
    if (cat.includes("security") || cat.includes("auth")) {
      return <ShieldCheck className="w-5 h-5 text-rose-500" />;
    }
    if (cat.includes("ai")) {
      return <Brain className="w-5 h-5 text-purple-500" />;
    }
    if (cat.includes("devops") || cat.includes("cloud") || cat.includes("tool")) {
      return <Cloud className="w-5 h-5 text-indigo-500" />;
    }
    return <Code2 className="w-5 h-5 text-[#4393b6]" />;
  };

  const filteredCategories =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((cat) => cat.category.toLowerCase().includes(activeTab));

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#4393b6] mb-2">
            Who am I
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-[#4393b6] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio text column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
              Professional Full Stack Developer with {experienceYears} Years of Experience.
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Full Stack Developer with {experienceYears} years of experience engineering scalable enterprise web applications, internal business platforms, and independent full stack products. Skilled across Node.js, Express.js, PostgreSQL, RESTful APIs, and JWT authentication on the backend, alongside React.js, Next.js, TypeScript, and Tailwind CSS on the frontend.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              With hands-on experience at Magiva Technologies and Arizon Digital, I have a proven track record of collaborating directly with US-based clients, designing multi-level approval workflows with role-based access, optimizing performance through lazy loading and query tuning, resolving production incidents, and mentoring junior developers.
            </p>

            <div className="pt-2">
              <a
                href="https://www.linkedin.com/in/senthil-kumar-s-11b236281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4393b6] hover:bg-[#3c809d] text-white font-medium shadow-md shadow-[#4393b6]/20 transition-all hover:-translate-y-0.5"
              >
                <span>Know More on LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Redesigned Tech Stack Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#4393b6]" />
                <span>Technologies I&apos;ve Been Working With</span>
              </h4>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#4393b6]/10 text-[#4393b6] w-fit">
                {skillsData.reduce((acc, cat) => acc + cat.skills.length, 0)} Skills Mastered
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeTab === "all"
                  ? "bg-[#4393b6] text-white shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
              >
                All Categories
              </button>
              <button
                onClick={() => setActiveTab("front")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeTab === "front"
                  ? "bg-[#4393b6] text-white shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
              >
                Frontend
              </button>
              <button
                onClick={() => setActiveTab("back")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeTab === "back"
                  ? "bg-[#4393b6] text-white shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
              >
                Backend & DB
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeTab === "security"
                  ? "bg-[#4393b6] text-white shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
              >
                Security & Auth
              </button>
              <button
                onClick={() => setActiveTab("devops")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeTab === "devops"
                  ? "bg-[#4393b6] text-white shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
              >
                DevOps & Cloud
              </button>
              <button
                onClick={() => setActiveTab("ai")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeTab === "ai"
                  ? "bg-[#4393b6] text-white shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
              >
                AI Tools
              </button>
            </div>

            {/* Categorized Cards with Pill Badges */}
            <div className="space-y-4 pt-2">
              {filteredCategories.map((category) => (
                <div
                  key={category.category}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-[#4393b6] dark:hover:border-[#4393b6] transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="p-2 rounded-xl bg-white dark:bg-slate-900 shadow-xs border border-slate-200/60 dark:border-slate-700/60">
                        {getCategoryIcon(category.category)}
                      </span>
                      <h5 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {category.category}
                      </h5>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {category.skills.length} skills
                    </span>
                  </div>

                  {/* Skills Pill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 hover:border-[#4393b6] dark:hover:border-[#5fb0d6] hover:text-[#4393b6] dark:hover:text-[#5fb0d6] transition-colors shadow-2xs group cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4393b6]/70 group-hover:scale-125 transition-transform" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
