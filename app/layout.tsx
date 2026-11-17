import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://senthilkumar.dev"),
  title: "Senthil Kumar | Passion for Design & Development",
  description:
    "Portfolio of Senthil Kumar - Full Stack Developer specializing in React, Next.js, TypeScript, Java, Node.js, and high-performance digital experiences.",
  icons: {
    icon: "/assets/img/my_avatar.png",
  },
  openGraph: {
    title: "Senthil Kumar | Full Stack Developer",
    description:
      "A full stack developer passionate about building intuitive, scalable, and high-performing digital experiences.",
    images: ["/assets/img/own_pic.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-grotesk bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 min-h-screen selection:bg-[#4393b6] selection:text-white transition-colors duration-200 antialiased">
        {children}
      </body>
    </html>
  );
}
