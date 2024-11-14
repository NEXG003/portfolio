import { Box, Title, Timeline, Text } from '@mantine/core';
import { IconCertificate } from '@tabler/icons-react';

export function Certifications() {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      date: 'Dec 2023',
      description: 'Professional certification for designing distributed systems on AWS',
    },
    {
      title: 'Professional Scrum Master I',
      organization: 'Scrum.org',
      date: 'Oct 2023',
      description: 'Certification in Agile project management and Scrum framework',
    },
    {
      title: 'Meta Front-End Developer',
      organization: 'Meta',
      date: 'Aug 2023',
      description: 'Professional certification in modern front-end development',
    },
    {
      title: 'Google Project Management',
      organization: 'Google',
      date: 'June 2023',
      description: 'Professional certification in project management methodologies',
    },
  ];

  return (
    <Box py="xl" id="certifications">
      <Title order={2} size="h1" fw={900} ta="left" mb="xl">
        Certifications
      </Title>
      <Timeline active={certifications.length - 1} bulletSize={24} lineWidth={2}>
        {certifications.map((cert) => (
          <Timeline.Item
            key={cert.title}
            bullet={<IconCertificate size={12} />}
            title={cert.title}
          >
            <Text size="sm" mt={4}>{cert.organization}</Text>
            <Text size="xs" c="dimmed" mt={4}>{cert.date}</Text>
            <Text size="sm" mt={4} c="dimmed">
              {cert.description}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Box>
  );
}
