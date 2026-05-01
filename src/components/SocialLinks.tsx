import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 justify-center mt-8">
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-pink-500 hover:text-pink-600 text-3xl" />
      </a>

      <a
        href="https://facebook.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="text-blue-600 hover:text-blue-700 text-3xl" />
      </a>

      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-blue-500 hover:text-blue-600 text-3xl" />
      </a>

      <a
        href="https://youtube.com/@yourchannel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="text-red-600 hover:text-red-700 text-3xl" />
      </a>

      <a
        href="https://tiktok.com/@yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTiktok className="text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300 text-3xl" />
      </a>
    </div>
  );
}
