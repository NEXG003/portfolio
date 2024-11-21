'use client';

import { Container, Title, Text, Timeline, List, ThemeIcon, Button } from '@mantine/core';
import { IconBriefcase, IconSchool, IconCode, IconDownload } from '@tabler/icons-react';
import classes from './page.module.css';

export default function AboutPage() {
  return (
    <>
      <Container size="lg" className={classes.container}>
        <Title order={1} className={classes.title}>About Me</Title>
        
        <Text size="lg" mt="xl">
          I'm a Software Engineer with a passion for building innovative solutions and learning new technologies.
          My journey in software development has been driven by curiosity and a desire to create impactful applications.
        </Text>

        <Button
          component="a"
          href="/resume.pdf"
          download
          leftSection={<IconDownload size={14} />}
          mt="xl"
          variant="filled"
        >
          Download Resume
        </Button>

        <Title order={2} mt={40}>Experience</Title>
        <Timeline active={1} bulletSize={24} lineWidth={2} mt="xl">
          <Timeline.Item bullet={<IconBriefcase size={12} />} title="Senior Software Engineer">
            <Text c="dimmed" size="sm">2021 - Present</Text>
            <Text size="sm" mt={4}>Leading development of enterprise applications using modern tech stack</Text>
          </Timeline.Item>

          <Timeline.Item bullet={<IconBriefcase size={12} />} title="Software Engineer">
            <Text c="dimmed" size="sm">2019 - 2021</Text>
            <Text size="sm" mt={4}>Developed and maintained full-stack web applications</Text>
          </Timeline.Item>
        </Timeline>

        <Title order={2} mt={40}>Education</Title>
        <Timeline active={1} bulletSize={24} lineWidth={2} mt="xl">
          <Timeline.Item bullet={<IconSchool size={12} />} title="Master's in Computer Science">
            <Text c="dimmed" size="sm">2017 - 2019</Text>
            <Text size="sm" mt={4}>University of Technology</Text>
            <Text size="sm" mt={4}>Specialized in Software Engineering and Machine Learning</Text>
          </Timeline.Item>

          <Timeline.Item bullet={<IconSchool size={12} />} title="Bachelor's in Computer Science">
            <Text c="dimmed" size="sm">2013 - 2017</Text>
            <Text size="sm" mt={4}>State University</Text>
            <Text size="sm" mt={4}>Major in Computer Science with focus on Software Development</Text>
          </Timeline.Item>
        </Timeline>

        <Title order={2} mt={40}>Skills</Title>
        <List
          mt="xl"
          spacing="sm"
          size="sm"
          center
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCode size="1rem" />
            </ThemeIcon>
          }
        >
          <List.Item>Frontend: React, Next.js, TypeScript, JavaScript</List.Item>
          <List.Item>Backend: Node.js, Python, Java</List.Item>
          <List.Item>Database: PostgreSQL, MongoDB, Redis</List.Item>
          <List.Item>Cloud: AWS, Docker, Kubernetes</List.Item>
        </List>
      </Container>
    </>
  );
}
