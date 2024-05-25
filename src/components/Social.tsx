import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const socialItems = [
  { icon: <FaGithub />, href: "https://github.com/NitanJana" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/nitan-jana/" },
  { icon: <FaTwitter />, href: "https://x.com/Nitan_Official" },
];

const Social = ({ containerStyles = "", iconStyles = "" }) => {
  return (
    <div className={containerStyles}>
      {socialItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
