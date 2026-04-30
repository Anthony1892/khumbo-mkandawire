type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function AppImage({ src, alt, className }: Props) {
  return <img src={src} alt={alt} className={className} />;
}