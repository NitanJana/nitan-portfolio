import * as React from 'react';
import { z } from 'zod';
import {
  Html,
  Body,
  Container,
  Text,
  Heading,
  Hr,
  Link,
} from '@react-email/components';
import { formSchema } from '@/components/contact/ContactForm';

function ContactEmail({
  email,
  fullname,
  company,
  message,
  phone,
}: z.infer<typeof formSchema>) {
  return (
    <Html lang='en'>
      <Body className='bg-gray-100 p-4'>
        <Container className='mx-auto max-w-xl rounded-lg bg-white p-6 shadow-md'>
          <div className='mb-6 text-center'>
            <Heading as='h1' className='text-2xl font-bold text-gray-800'>
              New Contact Form Submission
            </Heading>
          </div>
          <Hr className='my-4 border-gray-200' />
          <div className='space-y-4 text-gray-700'>
            <Text>
              <strong className='font-semibold'>Name:</strong> {fullname}
            </Text>
            <Text>
              <strong className='font-semibold'>Company:</strong> {company}
            </Text>
            <Text>
              <strong className='font-semibold'>Email:</strong> {email}
            </Text>
            <Text>
              <strong className='font-semibold'>Phone:</strong> {phone}
            </Text>
            <Text>
              <strong className='font-semibold'>Message:</strong>
            </Text>
            <Text className='whitespace-pre-wrap'>{message}</Text>
          </div>
        </Container>
      </Body>
    </Html>
  );
}

function NotificationEmail({ fullname }: { fullname: string }) {
  return (
    <Html lang='en'>
      <Body className='bg-gray-100 p-4'>
        <Container className='mx-auto max-w-xl rounded-lg bg-white p-6 shadow-md'>
          <div className='mb-6 text-center'>
            <Heading as='h1' className='text-2xl font-bold text-gray-800'>
              Thank You for Contacting!
            </Heading>
          </div>
          <Hr className='my-4 border-gray-200' />
          <div className='text-gray-700'>
            <Text className='mb-4'>Hi {fullname},</Text>
            <Text className='mb-4'>
              Thank you for reaching out. I have received your message and I
              will get back to you as soon as possible.
            </Text>
            <Text className='mb-4'>
              If you need immediate assistance, feel free to call/whatsapp me at{' '}
              <Link
                href='tel:+917908353382'
                className='text-blue-500 underline'
              >
                7908353382
              </Link>
              .
            </Text>
            <Text className='mb-4'>
              In the meantime, you can check out my{' '}
              <Link
                href='https://www.linkedin.com/in/nitan-jana/'
                className='text-blue-500 underline'
              >
                linkedin
              </Link>{' '}
              or{' '}
              <Link
                href='https://github.com/NitanJana'
                className='text-blue-500 underline'
              >
                github
              </Link>{' '}
              page for more information.
            </Text>
            <Text>
              Best regards,
              <br />
              Nitan Jana
            </Text>
          </div>
        </Container>
      </Body>
    </Html>
  );
}

export { ContactEmail, NotificationEmail };
