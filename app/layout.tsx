import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Khumbo Mkandawire Portfolio",
  description: "Musician, Knitter, Jewelry Maker",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1 container mx-auto px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
