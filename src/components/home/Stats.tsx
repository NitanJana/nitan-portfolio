'use client';

import CountUp from 'react-countup';

const Stats = () => {
  const stats = [
    {
      name: 'Years of experience',
      value: 3,
    },
    {
      name: 'Techologies perfected',
      value: 12,
    },
    {
      name: 'Projects completed',
      value: 8,
    },
    {
      name: 'Codes committed',
      value: 800,
    },
  ];

  return (
    <section className='pb-12 pt-4 xl:py-0'>
      <div className='container'>
        <div className='mx-auto flex max-w-[90vw] flex-wrap gap-6 xl:max-w-none'>
          {stats.map((stat) => (
            <div
              key={stat.name}
              className='flex flex-1 items-center justify-center gap-4 xl:justify-start'
            >
              <CountUp
                end={stat.value}
                duration={4}
                delay={2}
                className='text-4xl font-extrabold xl:text-6xl'
              />
              <p className='max-w-[100px] leading-snug text-white/80'>
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
