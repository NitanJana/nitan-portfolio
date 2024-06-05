'use client';

import { motion } from 'framer-motion';

// components
import { ContactForm } from '@/components/ContactForm';
import { FaEnvelopeOpen, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaEnvelopeOpen />,
    title: 'Email',
    content: 'NitanJanaOfficial@gmail.com',
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    content: '(+91) 9735790228',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    content: 'Kolkata, India',
  },
];

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: 'easeIn' }}
      className='py-6'
    >
      <div className='container'>
        <div className='flex flex-col gap-8 xl:flex-row xl:gap-16'>
          <div className='order-2 xl:order-none'>
            <ContactForm />
          </div>
          <div className='order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end'>
            <ul className='flex flex-col gap-8'>
              {info.map((item) => (
                <li key={item.title} className='flex items-center gap-6'>
                  <div className='flex aspect-square w-12 items-center justify-center rounded-md bg-secondary text-accent xl:w-16'>
                    <div className='text-xl xl:text-2xl'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>{item.content}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
