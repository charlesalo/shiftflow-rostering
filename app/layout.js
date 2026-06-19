import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "ShiftFlow — Rostering that runs itself",
  description:
    "Shift-rostering for hospitals, clinics, and care providers. Schedule staff, detect conflicts, and keep shift records audit-ready.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
