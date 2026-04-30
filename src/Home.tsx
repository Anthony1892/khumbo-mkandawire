import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 py-16">

      {/* LEFT: IMAGE */}
      <div className="w-1/2 h-[500px]">
        <img
          src="/artist.jpg"
          alt="Artist portrait"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* RIGHT: TEXT */}
      <div className="w-1/2 pl-12">

        <h1 className="text-4xl md:text-5xl font-bold text-calm-dark mb-6">
          Musician & Creative
        </h1>

        <p className="text-xl font-medium text-neutral-dark mb-6 italic">
          “Simple sounds. Deep roots.”
        </p>

        <p className="text-neutral-dark leading-relaxed mb-6">
          I’m a culturally rooted musician and a proud graduate of Music Crossroads Malawi...
        </p>

        <p className="text-neutral-dark leading-relaxed mb-6">
          My music blends heritage and exploration...
        </p>

        <p className="text-neutral-dark leading-relaxed mb-8">
          Beyond the stage, I express my creativity through handmade jewelry and knitting...
        </p>

        <p className="text-neutral-dark font-medium">
          Explore my work across different creative expressions.
        </p>

        <div className="mt-6">
          <SocialLinks />
        </div>

      </div>

    </section>
  );
}