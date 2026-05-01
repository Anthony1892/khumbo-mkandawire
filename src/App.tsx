import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <Router>
      <header className="w-full py-4 px-6 flex justify-between items-center border-b">
        <h1 className="text-2xl font-bold text-heading">Khumbo Mkandawire</h1>
        <nav>
          <ul className="flex gap-6 text-heading font-medium">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <footer className="w-full py-6 text-center border-t mt-10">
        © {new Date().getFullYear()} Khumbo Mkandawire. All rights reserved.
      </footer>
    </Router>
  );
}
