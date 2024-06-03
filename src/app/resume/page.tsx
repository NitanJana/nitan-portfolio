'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import {
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiNextdotjs,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si';

const education = {
  // icon:,
  title: 'My Education',
  description:
    'I am a recent computer science graduate with a strong interest and skills in web development.',
  items: [
    {
      institute: 'Calcutta University',
      degree: 'Master of Computer Science',
      duration: '2021 - 2023',
    },
    {
      institute: 'Calcutta University',
      degree: 'Bachelor of Computer Science',
      duration: '2018 - 2021',
    },
    {
      institute: 'Krishnagar Collegiate School',
      degree: 'Higher Secondary',
      duration: '2015 - 2017',
    },
    {
      institute: 'Krishnagar Collegiate School',
      degree: 'Secondary',
      duration: '2007 - 2015',
    },
  ],
};

const skills = {
  // icon: '',
  title: 'My Skills',
  description:
    'I am proficient in both frontend and backend technologies mentioned below and many more.',
  items: [
    {
      name: 'HTML',
      icon: <FaHtml5 />,
    },
    {
      name: 'CSS',
      icon: <FaCss3 />,
    },
    {
      name: 'JavaScript',
      icon: <FaJs />,
    },
    {
      name: 'Git',
      icon: <FaGitAlt />,
    },
    {
      name: 'React',
      icon: <FaReact />,
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb />,
    },
    {
      name: 'Redux',
      icon: <SiRedux />,
    },
    {
      name: 'React Router',
      icon: <SiReactrouter />,
    },
    {
      name: 'Figma',
      icon: <FaFigma />,
    },
  ],
};

const about = {
  title: 'About Me',
  description:
    "Hello, I'm Nitan Jana, a passionate developer, currently based at kolkata, and available for freelance projects.",
  info: [
    {
      label: 'Name',
      value: 'Nitan Jana',
    },
    {
      label: 'Age',
      value: '25',
    },
    {
      label: 'Experience',
      value: '3+ Years',
    },

    {
      label: 'Phone',
      value: '(+91) 9735790228',
    },

    {
      label: 'Freelance',
      value: 'Available',
    },
    {
      label: 'Languages',
      value: 'English, Hindi',
    },
    {
      label: 'Nationality',
      value: 'Indian',
    },
    {
      label: 'Location',
      value: 'Kolkata, India',
    },
    {
      label: 'Email',
      value: 'NitanJanaOfficial@gmail.com',
    },
  ],
};

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: 'easeIn' }}
      className='flex min-h-[80vh] items-center justify-center py-12 xl:py-0'
    >
      <div className='container'>
        <Tabs
          defaultValue='education'
          className='flex flex-col gap-16 xl:flex-row'
        >
          <TabsList className='mx-auto flex w-full max-w-[420px] flex-col gap-6 xl:mx-0'>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value='education' className='h-full w-full'>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-8 text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{education.title}</h3>
                  <p className='mx-auto max-w-[600px] text-white/60 xl:mx-0'>
                    {education.description}
                  </p>
                </div>

                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 gap-8 px-4 lg:grid-cols-2 xl:pl-0'>
                    {education.items.map((item) => (
                      <li
                        key={item.degree}
                        className='flex h-[184px] flex-col items-center justify-center gap-3 rounded-xl bg-gray-light p-6 lg:items-start'
                      >
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='min-h-[60px] max-w-[260px] text-center text-xl xl:text-left'>
                          {item.degree}
                        </h3>
                        <div className='flex items-center gap-3 text-center'>
                          <span className='aspect-square w-[6px] rounded-full bg-accent'></span>
                          <p className='text-sm text-white/60'>
                            {item.institute}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value='skills' className='h-full w-full'>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-8 text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='mx-auto max-w-[600px] text-white/60 xl:mx-0'>
                    {skills.description}
                  </p>
                </div>

                <ScrollArea className='max-w-[600px]mx-auto h-[400px] xl:mx-0'>
                  <ul className='grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-4 xl:justify-items-start xl:gap-8'>
                    {skills.items.map((skill) => (
                      <li key={skill.name}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='group flex aspect-square h-28 items-center justify-center rounded-lg bg-gray-light'>
                              <div className='traansition-all text-6xl duration-300 group-hover:text-accent'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>

                            <TooltipContent>
                              <p className='text-accent'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value='about' className='h-full w-full'>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-8 text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{about.title}</h3>
                  <p className='mx-auto text-white/60 xl:mx-0'>
                    {about.description}
                  </p>
                </div>
                <ScrollArea className='mx-auto h-[400px] px-2'>
                  <ul className='mx-auto grid grid-cols-1 gap-x-8 gap-y-6 lg:mx-6 lg:grid-cols-2 xl:mx-0'>
                    {about.info.map((item) => (
                      <li key={item.label} className='flex justify-start gap-6'>
                        <span className='text-white/60'>{item.label}</span>
                        <span className='break-all text-xl xl:break-normal'>
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
