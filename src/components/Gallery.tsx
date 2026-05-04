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
      className="relative block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
    >
      {/* Image fills the card */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-64 object-cover"
      />

      {/* Overlay for text */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
        <h2 className="text-2xl font-bold text-heading drop-shadow-lg">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 py-16 relative"
    >
      {/* Content panel */}
      <div className="relative max-w-5xl w-full bg-background/70 backdrop-blur rounded-xl p-10 shadow-lg">
        <h1 className="text-4xl font-bold text-center text-heading mb-8">
          Gallery
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          <GalleryCard
            title="Music"
            imageSrc="/assets/music/cover.jpg"
            link="music"
          />
          <GalleryCard
            title="Jewelry"
            imageSrc="/assets/jewelry/cover.jpg"
            link="jewelry"
          />
          <GalleryCard
            title="Knitting"
            imageSrc="/assets/knitting/cover.jpg"
            link="knitting"
          />
        </div>
      </div>
    </section>
  );
}
