import GalleryCard from "../components/GalleryCard";

export default function JewelryPage() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <GalleryCard
        imageSrc="/jewelry1.jpg"
        title="Beaded Necklace"
        description="Elegant necklace made with handcrafted beads and unique patterns."
      />
      <GalleryCard
        imageSrc="/jewelry2.jpg"
        title="Silver Bracelet"
        description="Minimalist bracelet designed with polished silver and fine details."
      />
    </section>
  );
}
