import { Link } from "react-router-dom";

interface GalleryCardProps {
  title: string;
  imageSrc: string;
  link: string;
}

function GalleryCard({ title, imageSrc, link }: GalleryCardProps) {
  return (
    <Link
      to={link}
      className="block border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4 text-center bg-white dark:bg-zinc-900">
        <h2 className="text-xl font-semibold text-fiery">{title}</h2>
      </div>
    </Link>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-calm mb-8">Gallery</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <GalleryCard title="Music" imageSrc="/assets/music/cover.jpg" link="music" />
        <GalleryCard title="Jewelry" imageSrc="/assets/jewelry/cover.jpg" link="jewelry" />
        <GalleryCard title="Knitting" imageSrc="/assets/knitting/cover.jpg" link="knitting" />
      </div>
    </section>
  );
}
