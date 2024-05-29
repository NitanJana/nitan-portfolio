"use client";

import clsx from "clsx";
import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    {
      name: "Years of experience",
      value: 3,
    },
    {
      name: "Techologies perfected",
      value: 12,
    },
    {
      name: "Projects completed",
      value: 8,
    },
    {
      name: "Codes committed",
      value: 800,
    },
  ];

  return (
    <section className="pt-4 pb-12 xl:py-0">
      <div className="container">
        <div className="flex gap-6 flex-wrap max-w-[90vw] xl:max-w-none mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="flex flex-1 gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={stat.value}
                duration={4}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold "
              />
              <p className="leading-snug max-w-[100px] text-white/80">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
