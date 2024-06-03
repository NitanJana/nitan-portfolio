"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper/types";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SliderIcons from "@/components/ui/SliderIcons";

import Image from "next/image";

const projects = [
  {
    index: "01",
    category: "fullstack",
    title: "blog app",
    description:
      "A full-stack blogging application featuring user authentication & management and rich text editing.",
    stack: [{ name: "html" }, { name: "css" }, { name: "js" }],
    image: "/images/projects/01.png",
    live: "",
    github: "",
  },
  {
    index: "02",
    category: "frontend",
    title: "weather wiz",
    description:
      "A weather web app with a user-friendly interface, live weather updates.",
    stack: [{ name: "html" }, { name: "css" }, { name: "js" }],
    image: "/images/projects/02.png",
    live: "",
    github: "",
  },
  {
    index: "03",
    category: "fullstack",
    title: "message board",
    description:
      "A message board web app with a user-friendly interface and well-structured MVC backend for scalability.",
    stack: [{ name: "html" }, { name: "css" }, { name: "js" }],
    image: "/images/projects/03.png",
    live: "",
    github: "",
  },
  {
    index: "04",
    category: "frontend",
    title: "todo vault",
    description:
      "A frontend web application for managing todo lists with prioritization and filtering.",
    stack: [{ name: "html" }, { name: "css" }, { name: "js" }],
    image: "/images/projects/04.png",
    live: "",
    github: "",
  },
  {
    index: "05",
    category: "frontend",
    title: "pokemon cards",
    description:
      "A visually engaging Pokémon memory card game to promote cognitive skills in a fun way.",
    stack: [{ name: "html" }, { name: "css" }, { name: "js" }],
    image: "/images/projects/05.png",
    live: "",
    github: "",
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
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-6 h-1/2">
              <div className="flex flex-col gap-3">
                <div className="text-8xl font-extrabold text-transparent text-outline leading-none">
                  {project.index}
                </div>
                <div className="flex gap-3 items-center">
                  <div className="h-[6px] aspect-square bg-accent rounded-full"></div>
                  <p className="text-sm text-white/60">
                    {project.category} project
                  </p>
                </div>
              </div>
              <h2 className="text-[42px] font-bold leading-none capitalize text-white group-hover:text-accent transition-all duration-500">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="h-[50px] aspect-square rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent group-hover:rotate-45 duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Preview</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="h-[50px] aspect-square rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[420px] mb-8"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[360px] relative flex justify-center items-center bg-primary">
                    <div className="absolute top-0 bottom-0 h-full w-full shadow z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="100%,100%"
                        quality={100}
                        priority={false}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SliderIcons
                containerStyle="flex gap-4 absolute right-0 bottom-[calc(50%-20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyle="h-[30px] aspect-square rounded-full flex justify-center items-center border-2 text-accent border-accent duration-200 hover:text-primary hover:bg-accent"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
