import React from "react";

interface AboutCardProps {
  title: string;
  content: string;
}

function AboutCard({ title, content }: AboutCardProps) {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-background">
      <h2 className="text-2xl font-semibold mb-3 text-subheading">{title}</h2>
      {content.split("\n").map((paragraph, idx) => (
        <p
          key={idx}
          className="text-body mb-4 leading-relaxed"
        >
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
      className="flex flex-col gap-10 max-w-3xl mx-auto py-16 px-6"
    >
      <h1 className="text-4xl font-bold text-heading mb-12">
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
    </section>
  );
}
