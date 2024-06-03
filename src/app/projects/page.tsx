'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import SliderIcons from '@/components/ui/SliderIcons';

import Image from 'next/image';
import ProjectLink from '@/components/ui/ProjectLink';

// projects data
const projects = [
  {
    index: '01',
    category: 'fullstack',
    title: 'blog app',
    description:
      'A full-stack blogging application featuring user authentication & management and rich text editing.',
    stack: [
      { name: 'React' },
      { name: 'Tailwindcss' },
      { name: 'Redux' },
      { name: 'Appwrite' },
    ],
    image: '/images/projects/blog.png',
    live: 'https://blog-appwrite-nitan.vercel.app/',
    github: 'https://github.com/NitanJana/blog-appwrite',
  },
  {
    index: '02',
    category: 'frontend',
    title: 'weather wiz',
    description:
      'A weather web app with a user-friendly interface, live weather updates.',
    stack: [{ name: 'Html' }, { name: 'CSS' }, { name: 'JavaSccript' }],
    image: '/images/projects/weather.png',
    live: 'https://nitanjana.github.io/WeatherWiz/',
    github: 'https://github.com/NitanJana/WeatherWiz',
  },
  {
    index: '03',
    category: 'fullstack',
    title: 'message board',
    description:
      'A message board web app with a user-friendly interface and well-structured MVC backend for scalability.',
    stack: [
      { name: 'React' },
      { name: 'Tailwindcss' },
      { name: 'Node.js' },
      { name: 'MongoDB' },
    ],
    image: '/images/projects/message-board.png',
    live: 'https://message-board-nitan.vercel.app/',
    github: 'https://github.com/NitanJana/message-board',
  },
  {
    index: '04',
    category: 'frontend',
    title: 'todo vault',
    description:
      'A frontend web application for managing todo lists with prioritization and filtering.',
    stack: [{ name: 'Html' }, { name: 'CSS' }, { name: 'JavaSccript' }],
    image: '/images/projects/todovault.png',
    live: 'https://nitanjana.github.io/todoVault/',
    github: 'https://github.com/NitanJana/todoVault',
  },
  {
    index: '05',
    category: 'frontend',
    title: 'pokemon cards',
    description:
      'A visually engaging Pokémon memory card game to promote cognitive skills in a fun way.',
    stack: [{ name: 'React' }, { name: 'Tailwindcss' }],
    image: '/images/projects/pokemon.png',
    live: 'https://pokemon-card-nitan.netlify.app/',
    github: 'https://github.com/NitanJana/pokemon-memory-card',
  },
];

const ProjectsPage = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: 'easeIn' }}
      className='flex min-h-[80vh] flex-col justify-center py-12 xl:px-0'
    >
      <div className='container'>
        <div className='flex flex-col xl:flex-row xl:gap-8'>
          {/* project info */}
          <div className='order-2 flex w-full flex-col xl:order-none xl:h-[400px] xl:w-1/2 xl:justify-between'>
            <div className='flex h-1/2 flex-col gap-6'>
              <div className='flex flex-col gap-3'>
                {/* project index */}
                <div className='text-outline text-8xl font-extrabold leading-none text-transparent'>
                  {project.index}
                </div>

                {/* project category */}
                <div className='flex items-center gap-3'>
                  <div className='aspect-square h-[6px] rounded-full bg-accent'></div>
                  <p className='text-sm text-white/60'>
                    {project.category} project
                  </p>
                </div>
              </div>

              {/* project title and description */}
              <h2 className='text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent'>
                {project.title}
              </h2>
              <p className='text-white/60'>{project.description}</p>

              {/* project stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => (
                  <li key={index} className='text-md text-accent'>
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>

              {/* project links */}
              <div className='flex items-center gap-4'>
                <ProjectLink href={project.live} tooltip='Live Preview'>
                  <BsArrowUpRight className='text-2xl text-white duration-500 group-hover:rotate-45 group-hover:text-accent' />
                </ProjectLink>

                <ProjectLink href={project.github} tooltip='Github repository'>
                  <BsGithub className='text-2xl text-white group-hover:text-accent' />
                </ProjectLink>
              </div>
            </div>
          </div>

          {/* project image */}
          <div className='w-full xl:w-1/2'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='mb-8 xl:h-[420px]'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <div className='relative flex h-[400px] items-center justify-center bg-primary'>
                    <div className='absolute bottom-0 top-0 z-10 h-full w-full shadow'></div>
                    <div className='relative h-full w-full'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes='100%,100%'
                        quality={100}
                        priority={true}
                        className='object-contain'
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SliderIcons
                containerStyle='flex gap-4 absolute right-0 bottom-[calc(50%-20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyle='h-[30px] aspect-square rounded-full flex justify-center items-center border-2 text-accent border-accent duration-200 hover:text-primary hover:bg-accent'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
