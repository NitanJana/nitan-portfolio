import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const socialItems = [
  { icon: <FaGithub />, href: 'https://github.com/NitanJana', label: 'Github' },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/nitan-jana/',
    label: 'LinkedIn',
  },
  {
    icon: <FaTwitter />,
    href: 'https://x.com/Nitan_Official',
    label: 'Twitter',
  },
];

const Social = ({ containerStyles = '', iconStyles = '' }) => {
  return (
    <div className={containerStyles}>
      {socialItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-label={item.label}
          target='_blank'
          rel='noopener noreferrer'
          className={iconStyles}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
