'use client';

import { motion } from 'framer-motion';

// components
import { ContactForm } from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: 'easeIn' }}
      className='py-6'
    >
      <div className='container'>
        <div className='flex flex-col gap-8 xl:flex-row'>
          <div className='order-2 xl:order-none xl:h-1/2'>
            <ContactForm />
          </div>
          <div className='order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end'>
            info
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
