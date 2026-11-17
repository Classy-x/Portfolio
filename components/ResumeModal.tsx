"use client";

import { FileText, Download, ExternalLink, X } from "lucide-react";
import confetti from "canvas-confetti";
import { personalData, getResumeLinks } from "@/data/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const { previewUrl, downloadUrl, isExternal } = getResumeLinks(
    personalData.contact.resumePdf
  );

  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 45,
      origin: { y: 0.7 },
    });

    if (isExternal) {
      window.open(downloadUrl, "_blank", "noopener,noreferrer");
    } else {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "Senthil_reference_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-[#4393b6]/10 dark:bg-[#4393b6]/20 text-[#4393b6] flex items-center justify-center mx-auto">
            <FileText className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Download Resume
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Would you like to download or preview Senthil Kumar&apos;s reference CV?
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleDownload}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#4393b6] hover:bg-[#3c809d] text-white font-semibold text-sm shadow-md shadow-[#4393b6]/20 transition-all hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Preview</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
