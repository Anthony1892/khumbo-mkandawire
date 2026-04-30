import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 justify-center mt-8">

      <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-fiery DEFAULT hover:text-fiery-dark text-3xl" />
      </a>

      <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-calm DEFAULT hover:text-calm-dark text-3xl" />
      </a>

      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-calm-dark hover:text-calm text-3xl" />
      </a>

      <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="text-fiery-dark hover:text-fiery DEFAULT text-3xl" />
      </a>

      <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
        <FaTiktok className="text-neutral-dark hover:text-neutral DEFAULT text-3xl" />
      </a>

    </div>
  );
}