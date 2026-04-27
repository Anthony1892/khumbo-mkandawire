export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Khumbo Mkandawire</h1>
      <ul className="flex gap-6">
        <li><a href="/" className="hover:text-blue-400">Home</a></li>
        <li><a href="/about" className="hover:text-blue-400">About</a></li>
        <li><a href="/music" className="hover:text-blue-400">Music</a></li>
        <li><a href="/knitting" className="hover:text-blue-400">Knitting</a></li>
        <li><a href="/jewelry" className="hover:text-blue-400">Jewelry</a></li>
        <li><a href="/gallery" className="hover:text-blue-400">Gallery</a></li>
      </ul>
    </nav>
  );
}
