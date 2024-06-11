'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import axios from 'axios';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { RiLoader4Fill } from 'react-icons/ri';

export const formSchema = z.object({
  fullname: z
    .string()
    .min(3, {
      message: 'Name must be at least 3 characters.',
    })
    .max(30, { message: "Name can't be longer than 30 characters." }),
  company: z
    .string()
    .min(3, {
      message: 'Company name must be at least 3 characters.',
    })
    .max(30, { message: "Company name can't be longer than 30 characters." }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .regex(
      /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
      {
        message: 'Please enter a valid phone number.',
      }
    ),
  message: z.string().max(160, {
    message: 'Message must not be longer than 160 characters.',
  }),
});

export function ContactForm() {
  // form definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  // submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setSending(true);
    const sendEmail = async () => {
      try {
        const response = await axios.post('/api/contact', values);

        if (!response.data?.success) {
          throw new Error('Could not send email');
        }

        return response.data;
      } catch (error) {
        throw error;
      } finally {
        setSending(false);
        form.reset();
      }
    };

    toast.promise(sendEmail, {
      loading: 'Sending Email...',
      success: (data) => data.message,
      error: (error) => error.message,
    });
  }

  const [sending, setSending] = useState(false);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-6 rounded-xl bg-secondary p-10'
      >
        <h3 className='text-4xl text-accent'>Contact me</h3>
        <p className='text-white/60'>
          Fill out the form below and I&apos;ll get back to you as soon as soon
          as possible.
        </p>

        {/* form inputs */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <FormField
            control={form.control}
            name='fullname'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type='text'
                    placeholder='Name'
                    autoComplete='name'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='company'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type='text'
                    placeholder='Company'
                    autoComplete='organization'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='Email'
                    autoComplete='email'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type='tel'
                    placeholder='Phone'
                    autoComplete='tel'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* form textarea */}
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder='Any message for me?'
                  className='h-32 resize-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex w-full items-center justify-center'>
          {/* submit button */}
          <Button
            type='submit'
            variant='outline'
            className='max-w-40 disabled:bg-accent disabled:text-black disabled:opacity-30'
            disabled={sending}
          >
            {sending ? <RiLoader4Fill className='mr-2 animate-spin' /> : ''}Send
          </Button>
        </div>
      </form>
    </Form>
  );
}
