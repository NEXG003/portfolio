'use client';

import { Container, Title, TextInput, Textarea, Button, Group, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';
import classes from './page.module.css';

export default function ContactPage() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must be at least 2 characters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) => (value.length < 10 ? 'Message must be at least 10 characters' : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', values);
      notifications.show({
        title: 'Success!',
        message: 'Your message has been sent. I will get back to you soon!',
        color: 'green',
      });
      form.reset();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        color: 'red',
      });
    }
  };

  return (
    <>
      <Container size="lg" className={classes.container}>
        <Title order={1} className={classes.title}>Get in Touch</Title>
        
        <Text size="lg" mt="xl" mb={50}>
          Have a question or want to work together? Feel free to reach out!
        </Text>

        <Group mb="xl">
          <Button
            component="a"
            href="https://github.com/tsr-kairi"
            target="_blank"
            variant="default"
            leftSection={<IconBrandGithub size={18} />}
          >
            GitHub
          </Button>
          <Button
            component="a"
            href="https://linkedin.com/in/tsr_kairi"
            target="_blank"
            variant="default"
            leftSection={<IconBrandLinkedin size={18} />}
          >
            LinkedIn
          </Button>
          <Button
            component="a"
            href="https://twitter.com/tsr-kairi"
            target="_blank"
            variant="default"
            leftSection={<IconBrandTwitter size={18} />}
          >
            Twitter
          </Button>
        </Group>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Name"
            placeholder="Your name"
            required
            mt="md"
            {...form.getInputProps('name')}
          />

          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            mt="md"
            {...form.getInputProps('email')}
          />

          <Textarea
            label="Message"
            placeholder="Your message"
            required
            mt="md"
            minRows={4}
            {...form.getInputProps('message')}
          />

          <Group justify="flex-end" mt="xl">
            <Button type="submit" size="lg">
              Send Message
            </Button>
          </Group>
        </form>
      </Container>
    </>
  );
}
