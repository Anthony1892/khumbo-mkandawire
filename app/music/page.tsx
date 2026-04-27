import ProjectCard from "../components/ProjectCard";

export default function MusicPage() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold mb-4">Music Projects</h1>

      <ProjectCard
        title="Acoustic Album Recording"
        status="ongoing"
        description="Currently working on a collection of acoustic tracks blending traditional and modern styles."
        date="April 2026"
      />

      <ProjectCard
        title="Live Performance Series"
        status="upcoming"
        description="A series of live shows planned for summer 2026, featuring collaborations with local artists."
        date="June 2026"
      />

      <ProjectCard
        title="Debut EP Release"
        status="completed"
        description="Released debut EP in early 2025, available on streaming platforms."
        date="January 2025"
      />
    </section>
  );
}
