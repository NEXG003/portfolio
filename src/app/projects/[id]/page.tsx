'use client';

import { Container, Title, Image, Text, Badge, Group, Button, Paper, Stack } from '@mantine/core';
import { IconBrandGithub, IconExternalLink, IconArrowLeft } from '@tabler/icons-react';
import { projects } from '../../../data/projects';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import classes from '../page.module.css';

export default function ProjectDetails() {
  const params = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <Container size="lg" className={classes.container}>
      <Button 
        variant="subtle" 
        leftSection={<IconArrowLeft size={16} />}
        onClick={() => router.back()}
        mb="xl"
      >
        Back to Projects
      </Button>
      <Paper shadow="sm" p="xl" radius="md" withBorder>
        <Stack gap="xl">
          <Image
            src={project.image}
            height={400}
            alt={project.title}
            radius="md"
          />

          <div>
            <Title order={1} className={classes.title}>{project.title}</Title>
            
            <Group gap={5} mt="md">
              {project.tags.map((tag) => (
                <Badge key={tag} color="blue">{tag}</Badge>
              ))}
            </Group>

            <Text size="lg" mt="xl">
              {project.description}
            </Text>

            {project.completedAt && (
              <Text c="dimmed" mt="md">
                Completed: {project.completedAt}
              </Text>
            )}

            <Group mt="xl">
              <Button 
                variant="filled"
                leftSection={<IconBrandGithub size={16} />}
                component="a"
                href={project.github}
                target="_blank"
              >
                View on GitHub
              </Button>
              <Button 
                variant="light"
                leftSection={<IconExternalLink size={16} />}
                component="a"
                href={project.demo}
                target="_blank"
              >
                Live Demo
              </Button>
            </Group>
          </div>
        </Stack>
      </Paper>
    </Container>
  );
}
