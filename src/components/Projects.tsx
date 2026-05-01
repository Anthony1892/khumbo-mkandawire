interface WorkCardProps {
  title: string;
  description: string;
}

function WorkCard({ title, description }: WorkCardProps) {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white dark:bg-zinc-900">
      <h2 className="text-xl font-semibold mb-3 text-fiery">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

export default function CreativeWork() {
  return (
    <section id="work" className="max-w-5xl mx-auto py-16 px-6 flex flex-col gap-12">
      <h1 className="text-4xl font-bold text-center text-fiery mb-8">Creative Work</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <WorkCard
          title="Music"
          description="Culturally rooted performances and projects, including Ethno Mozambique (2022) and Ethno Spain (2023)."
        />
        <WorkCard
          title="Jewelry"
          description="Handmade pieces blending artistry and cultural identity into wearable designs."
        />
        <WorkCard
          title="Knitting"
          description="Knitted works that reflect patience, creativity, and a deep connection to craft."
        />
      </div>
    </section>
  );
}
