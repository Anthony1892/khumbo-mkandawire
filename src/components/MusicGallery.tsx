import musicData from "../data/music.json";

export default function MusicGallery() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-heading mb-8">Music Gallery</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {musicData.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  );
}
