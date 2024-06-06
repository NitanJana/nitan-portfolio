import * as React from 'react';
import { z } from 'zod';
import {
  Html,
  Body,
  Container,
  Text,
  Heading,
  Hr,
} from '@react-email/components';
import { formSchema } from '../ContactForm';

export function ContactEmail({
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
