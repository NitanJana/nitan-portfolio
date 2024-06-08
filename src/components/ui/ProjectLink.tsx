import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

interface ProjectLinkProps {
  href: string;
  tooltip: string;
  children: React.ReactNode;
}

const ProjectLink = ({ href, tooltip, children }: ProjectLinkProps) => {
  return (
    <Link href={href} target='_blank' rel='noopener noreferrer' tabIndex={-1}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className='group flex aspect-square h-[50px] items-center justify-center rounded-full bg-white/5'>
            {children}
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

export default ProjectLink;
