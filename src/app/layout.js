import "./globals.css";
import Navbar from "@/componants/navbar";

export const metadata = {
  title: "CARPARKING",
  description: "Premium Vehicle Rental",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className="min-h-screen bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}