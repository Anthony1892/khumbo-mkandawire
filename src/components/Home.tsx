import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 items-center px-6 md:px-16 py-16 relative">
      <div className="hidden md:block"></div>

      <div className="relative w-full max-w-2xl bg-background/70 backdrop-blur rounded-xl p-8 shadow-lg ml-auto mt-24 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold text-heading text-adaptive-heading mb-6">
          Musician & Creative
        </h1>

        <p className="text-lg md:text-xl font-medium text-subheading text-adaptive-heading mb-6 italic">
          “Simple sounds. Deep roots.”
        </p>

        <p className="text-body text-readable leading-relaxed mb-6">
          I’m a culturally rooted musician and a proud graduate of Music Crossroads Malawi...
        </p>

        <p className="text-body text-readable leading-relaxed mb-6">
          My music blends heritage and exploration—grounded in tradition, yet open to new influences...
        </p>

        <p className="text-body text-readable leading-relaxed mb-8">
          Beyond the stage, I express my creativity through handmade jewelry and knitting...
        </p>

        <p className="text-body text-readable font-medium">
          Explore my work across different creative expressions.
        </p>

        <div className="mt-6 text-adaptive-heading">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
