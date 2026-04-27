import GalleryCard from "../components/GalleryCard";

export default function KnittingPage() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <GalleryCard
        imageSrc="/knitting1.jpg"
        title="Handmade Scarf"
        description="A cozy scarf crafted with soft yarn and intricate patterns."
      />
      <GalleryCard
        imageSrc="/knitting2.jpg"
        title="Wool Sweater"
        description="Warm and stylish sweater showcasing traditional knitting techniques."
      />
    </section>
  );
}
