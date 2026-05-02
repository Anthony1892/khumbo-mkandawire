import heroImage from "../assets/artist-portrait.jpg";
import SocialLinks from "./SocialLinks";

export default function Home() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 items-center px-6 md:px-16 py-16 gap-10">

      {/* Left: Image */}
      <div className="w-full max-w-md aspect-[3/4] mx-auto">
        <div className="w-full aspect-[3/4] relative">
          <img
            src={heroImage}
            alt="Artist portrait"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6">
          Musician & Creative
        </h1>

        <p className="text-xl font-medium text-subheading mb-6 italic">
          “Simple sounds. Deep roots.”
        </p>

        <p className="text-body leading-relaxed mb-6">
          I’m a culturally rooted musician and a proud graduate of Music Crossroads Malawi, where I discovered and refined my artistic identity. My sound has taken me beyond borders, performing as part of the Ethno program in Mozambique (2022) and Spain (2023).
        </p>

        <p className="text-body leading-relaxed mb-6">
          My music blends heritage and exploration—grounded in tradition, yet open to new influences and global collaboration.
        </p>

        <p className="text-body leading-relaxed mb-8">
          Beyond the stage, I express my creativity through handmade jewelry and knitting, creating pieces that reflect my culture, attention to detail, and personal story.
        </p>

        <p className="text-body font-medium">
          Explore my work across different creative expressions.
        </p>

        <div className="mt-6">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
