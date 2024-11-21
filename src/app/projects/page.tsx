'use client';

import { Container, Title, SimpleGrid, Card, Image, Text, Badge, Group, Button } from '@mantine/core';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import classes from './page.module.css';
import { projects } from '../../data/projects';
import { AnimateWrapper } from '../../components/AnimateWrapper';
import { staggerContainer, fadeIn } from '../../utils/animations';

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <>
      <Container size="lg" className={classes.container}>
        <AnimateWrapper variants={fadeIn}>
          <Title order={1} className={classes.title}>My Projects</Title>
          
          <Text size="lg" mt="xl" mb={50}>
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </Text>
        </AnimateWrapper>

        <AnimateWrapper variants={staggerContainer}>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
            {projects.map((project, index) => (
              <AnimateWrapper
                key={project.id}
                variants={fadeIn}
                delay={index * 0.1}
              >
                <Card 
                  shadow="sm" 
                  padding="lg" 
                  radius="md" 
                  withBorder
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push(`/projects/${project.id}`)}
                >
                  <Card.Section>
                    <Image
                      src={project.image}
                      height={160}
                      alt={project.title}
                    />
                  </Card.Section>

                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{project.title}</Text>
                    <Group gap={5}>
                      {project.tags.map((tag) => (
                        <Badge key={tag} color="blue">{tag}</Badge>
                      ))}
                    </Group>
                  </Group>

                  <Text size="sm" c="dimmed">
                    {project.description}
                  </Text>

                  <Group mt="md">
                    <Button 
                      variant="light" 
                      leftSection={<IconBrandGithub size={16} />}
                      component="a"
                      href={project.github}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </Button>
                    <Button 
                      variant="light"
                      leftSection={<IconExternalLink size={16} />}
                      component="a"
                      href={project.demo}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </Button>
                  </Group>
                </Card>
              </AnimateWrapper>
            ))}
          </SimpleGrid>
        </AnimateWrapper>
      </Container>
    </>
  );
}
