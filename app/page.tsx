import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-gray-700 max-w-xl">
        I am a musician, knitter, and jewelry maker. Explore my work across different creative trades.
      </p>

      {/* Social Links Section */}
      <SocialLinks />
    </section>
  );
}
