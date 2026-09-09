import "./globals.css";

export const metadata = {
  title: "FD Calculator",
  description: "Fixed Deposit Calculator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
