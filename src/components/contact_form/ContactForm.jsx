import React from 'react';
import './ContactForm.css';
import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react';

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        const data = await response.json();
        alert(`Error sending email: ${data.error}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name} mb={4}>
        <FormLabel style={{ color: '#fff', fontSize: '16px' }} htmlFor='name'>First name</FormLabel>
        <Input
          style={{ color: '#fff', fontSize: '16px' }}
          id='name'
          placeholder='First Name'
          {...register('name', {
            required: 'This field is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      {/* Add Last Name */}
      <FormControl isInvalid={errors.lastName} mb={4}>
        <FormLabel style={{ color: '#fff', fontSize: '16px' }} htmlFor='lastName'>Last Name</FormLabel>
        <Input
          id='lastName'
          placeholder='Last Name'
          {...register('lastName', {
            required: 'This field is required',
            minLength: { value: 2, message: 'Minimum length should be 2' },
          })}
        />
        <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
      </FormControl>

      {/* Add Email */}
      <FormControl isInvalid={errors.email} mb={4}>
        <FormLabel  style={{ color: '#fff', fontSize: '16px' }} htmlFor='email'>Email</FormLabel>
        <Input
          style={{ color: '#fff', fontSize: '16px' }}
          type='email'
          id='email'
          placeholder='Email'
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      {/* Add Message */}
      <FormControl isInvalid={errors.message} mb={4}>
        <FormLabel style={{ color: '#fff', fontSize: '16px' }} htmlFor='message'>Message</FormLabel>
        <Textarea
          style={{ height: '200px'}}
          id='message'
          placeholder='Your Message'
          {...register('message', {
            required: 'This field is required',
          })}
        />
        <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
