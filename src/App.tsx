import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import MusicGallery from "./components/MusicGallery";
import JewelryGallery from "./components/JewelryGallery";
import KnittingGallery from "./components/KnittingGallery";
import Updates from "./components/Updates";
import OrderForm from "./components/OrderForm";
import Orders from "./components/Orders";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNewOrder = () => {
    // Placeholder for handling new orders
  };

  return (
    <Router>
      <div
        className="min-h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/artist-portrait.jpg')" }}
      >
        <header className="relative w-full py-4 px-6 flex justify-between items-center border-b bg-background/70 backdrop-blur z-50">
          {/* Site name now clickable */}
          <Link to="/" className="text-2xl font-bold text-heading hover:text-accent">
            Khumbo Mkandawire
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-heading font-medium">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/updates">Updates</Link></li>
              <li><Link to="/order">Place Order</Link></li>
            </ul>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-heading font-medium px-3 py-2 border rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          {/* Mobile dropdown */}
          {menuOpen && (
            <nav className="absolute top-full right-0 mt-2 w-48 bg-background/90 backdrop-blur rounded-lg shadow-lg md:hidden z-50">
              <div className="bg-black/20 p-2 rounded-lg">
                <ul className="flex flex-col text-readable font-medium">
                  <li><Link to="/" className="px-4 py-2 hover:bg-accent/20">Home</Link></li>
                  <li><Link to="/about" className="px-4 py-2 hover:bg-accent/20">About</Link></li>
                  <li><Link to="/gallery" className="px-4 py-2 hover:bg-accent/20">Gallery</Link></li>
                  <li><Link to="/updates" className="px-4 py-2 hover:bg-accent/20">Updates</Link></li>
                  <li><Link to="/order" className="px-4 py-2 hover:bg-accent/20">Place Order</Link></li>
                </ul>
              </div>
            </nav>
          )}
        </header>

        <main className="flex-grow relative z-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/music" element={<MusicGallery />} />
            <Route path="/gallery/jewelry" element={<JewelryGallery />} />
            <Route path="/gallery/knitting" element={<KnittingGallery />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/order" element={<Orders />} />
          </Routes>
        </main>

        <footer className="w-full py-6 text-center text-heading border-t mt-10 bg-background/70 backdrop-blur">
          &copy; {new Date().getFullYear()} Khumbo Mkandawire. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
