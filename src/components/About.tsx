import React from "react";

interface AboutCardProps {
  title: string;
  content: string;
}

function AboutCard({ title, content }: AboutCardProps) {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-background/70 backdrop-blur">
      <h2 className="text-2xl font-semibold mb-3 text-subheading text-adaptive-heading">
        {title}
      </h2>
      {content.split("\n").map((paragraph, idx) => (
        <p key={idx} className="text-body text-readable mb-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 py-16 relative"
    >
      {/* Content panel */}
      <div className="relative flex flex-col gap-10 max-w-3xl w-full backdrop-blur rounded-xl p-10 shadow-lg">
        <h1 className="text-4xl font-bold text-heading text-adaptive-heading mb-12 text-center">
          About Me
        </h1>

        <AboutCard
          title="Who I Am"
          content={`I’m a musician and graduate of Music Crossroads Malawi, where I earned my certificate in music.

I’ve represented the Ethno program internationally at Ethno Mozambique (2022) and Ethno Spain (2023).

Alongside my music, I also create handmade jewelry and knitted pieces, reflecting my interest in craft and local artistry.`}
        />

        <AboutCard
          title="My Vision"
          content={`Calm in presence, fiery in creativity — I strive to create work that balances serenity with bold artistic energy.`}
        />

        <AboutCard
          title="Skills & Tools"
          content={`I work with Next.js, Tailwind CSS, and modular component design to build polished, professional web experiences.`}
        />
      </div>
    </section>
  );
}
