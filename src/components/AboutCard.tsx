import AboutCard from "../components/AboutCard";

type AboutCardProps = {
  title: string;
  content: string;
};

export default function AboutPage(props: AboutCardProps) {
  return (
    <section className="flex flex-col gap-10 max-w-3xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold text-center text-calm-dark mb-12">
        About Me
      </h1>

      <AboutCard
        title="Who I Am"
        content={`I’m a musician and graduate of Music Crossroads Malawi, where I earned my certificate in music.

I’ve represented the Ethno program internationally at Ethno Mozambique (2022) and Ethno Spain (2023) through Crossroads Music Malawi.

Alongside my music, I also create handmade jewelry and knitted pieces, reflecting my interest in craft and local artistry.`}
      />

      <AboutCard
        title="My Vision"
        content={`Calm in presence, fiery in creativity — I strive to create work that balances serenity with bold artistic energy.`}
      />

      <AboutCard
        title="Skills & Tools"
        content={`I work with Vite, React, Tailwind CSS, and modular component design to build clean, scalable web experiences.`}
      />

    </section>
  );
}