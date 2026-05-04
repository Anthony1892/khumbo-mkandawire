interface UpdateItem {
  title: string;
  date: string;
  description: string;
}

const updates: UpdateItem[] = [
  {
    title: "Acoustic Album Recording",
    date: "May 2026",
    description: "Currently recording a collection of acoustic tracks blending traditional and modern styles."
  },
  {
    title: "Live Performance Series",
    date: "June 2026",
    description: "A series of live shows planned for summer 2026, featuring collaborations with local artists."
  },
  {
    title: "New Jewelry Line Launch",
    date: "July 2026",
    description: "Launching a new line of handcrafted jewelry inspired by nature and cultural motifs."
  },
  {
    title: "Knitting Workshop",
    date: "August 2026",
    description: "Hosting a knitting workshop to share techniques and create community projects."
  }
];

export default function Updates() {
  return (
    <section
      id="updates"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 py-16 relative"
    >
      {/* Content panel */}
      <div className="relative max-w-3xl w-full backdrop-blur rounded-xl p-10 shadow-lg">
        <h1 className="text-3xl font-bold text-heading text-adaptive-heading mb-8 text-center">
          Upcoming Updates
        </h1>
        <div className="flex flex-col gap-6">
          {updates.map((item, idx) => (
            <div
              key={idx}
              className="border rounded-lg shadow-md p-6 bg-background/70 backdrop-blur"
            >
              <h2 className="text-xl font-semibold text-subheading text-adaptive-heading">
                {item.title}
              </h2>
              <p className="text-sm text-body text-readable mb-2">{item.date}</p>
              <p className="text-body text-readable leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
