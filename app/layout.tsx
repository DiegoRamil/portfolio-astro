import "./globals.css";

export const metadata = {
  title: "Diego's Portfolio",
  description: "A Linux terminal-inspired portfolio",
  keywords: "portfolio, Linux, terminal, developer, projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-green-500 font-mono">{children}</body>
    </html>
  );
}
