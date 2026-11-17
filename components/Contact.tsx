"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { personalData } from "@/data/portfolio";

export default function Contact({ onOpenModal }: { onOpenModal: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: personalData.contact.web3FormsKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
        });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4393b6]/10 text-[#4393b6] text-xs font-semibold uppercase tracking-wider">
              <span>Let&apos;s Connect</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Interested in working together? Let&apos;s talk
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              I&apos;m always excited to collaborate on new projects. Whether you have an idea or need a developer to bring your vision to life, feel free to reach out—let&apos;s create something amazing together!
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <a
                href={`mailto:${personalData.contact.email}`}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-[#4393b6] dark:hover:text-[#5fb0d6] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4393b6]/10 flex items-center justify-center text-[#4393b6] group-hover:bg-[#4393b6] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Email Me</p>
                  <p className="text-sm font-semibold">{personalData.contact.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personalData.contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-[#4393b6] dark:hover:text-[#5fb0d6] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4393b6]/10 flex items-center justify-center text-[#4393b6] group-hover:bg-[#4393b6] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Call Me</p>
                  <p className="text-sm font-semibold">{personalData.contact.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-[#4393b6]/10 flex items-center justify-center text-[#4393b6]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Location</p>
                  <p className="text-sm font-semibold">{personalData.contact.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-medium text-sm transition-all"
              >
                <span>Open Quick Modal</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Have a project or opportunity? Send a direct note here.
              </p>

              {status === "success" ? (
                <div className="p-8 text-center space-y-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-2xl border border-emerald-500/20">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Got it! I&apos;ll be in touch soon.
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Your message was delivered successfully.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 text-sm rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inline-name"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1"
                      >
                        Name
                      </label>
                      <input
                        id="inline-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4393b6] text-sm transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="inline-email"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1"
                      >
                        Email
                      </label>
                      <input
                        id="inline-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4393b6] text-sm transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inline-message"
                      className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="inline-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4393b6] text-sm resize-none transition-all"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#4393b6] hover:bg-[#3c809d] disabled:opacity-70 text-white font-semibold shadow-md shadow-[#4393b6]/25 transition-all"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

