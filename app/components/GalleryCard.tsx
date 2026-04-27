interface GalleryCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function GalleryCard({ imageSrc, title, description }: GalleryCardProps) {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
