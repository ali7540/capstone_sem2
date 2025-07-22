import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BudgetWise",
  description: "Used for tracking our personal budget.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#E8D9F9]/50`} 
      >
        {children}
        
        
      </body>
    </html>
  );
}
