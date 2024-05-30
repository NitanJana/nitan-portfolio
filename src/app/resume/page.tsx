"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

const education = {
  // icon:,
  title: "My Education",
  description:
    "I am a recent computer science graduate with a strong interest and skills in web development.",
  items: [
    {
      institute: "Calcutta University",
      degree: "Master of Computer Science",
      duration: "2021 - 2023",
    },
    {
      institute: "Calcutta University",
      degree: "Bachelor of Computer Science",
      duration: "2018 - 2021",
    },
    {
      institute: "Krishnagar Collegiate School",
      degree: "Higher Secondary",
      duration: "2015 - 2017",
    },
    {
      institute: "Krishnagar Collegiate School",
      degree: "Secondary",
      duration: "2007 - 2015",
    },
  ],
};

const skills = {
  // icon: '',
  title: "My Skills",
  description:
    "I am proficient in both frontend and backend technologies mentioned below and many more.",
  items: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Redux",
      icon: <SiRedux />,
    },
    {
      name: "React Router",
      icon: <SiReactrouter />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
  ],
};

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-16"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full h-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col text-center xl:text-left gap-8">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                </div>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:pl-0 px-4">
                    {education.items.map((item) => (
                      <li
                        key={item.degree}
                        className="bg-gray-light h-[184px] p-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center xl:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3 text-center">
                          <span className="w-[6px] aspect-square rounded-full bg-accent"></span>
                          <p className="text-white/60 text-sm">
                            {item.institute}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 xl:gap-8 ">
                    {skills.items.map((skill) => (
                      <li key={skill.name}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-28 bg-gray-light rounded-lg flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent traansition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>

                            <TooltipContent>
                              <p className="text-accent">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              about me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
