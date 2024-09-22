import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "Biswadip Mandal",
  description: "Welcome to my portFolio",
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