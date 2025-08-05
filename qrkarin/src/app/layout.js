// app/layout.js
import "./globals.css";

export const metadata = {
  title: "QR Karin",
  description: "QR Code Generator Voor Karin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head /> {/* This is optional, but recommended */}
      <body>{children}</body>
    </html>
  );
}
