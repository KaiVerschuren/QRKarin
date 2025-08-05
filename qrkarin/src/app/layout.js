import "./globals.css";

export const metadata = {
  title: "QR Karin",
  description: "QR Code Generator Voor Karin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
