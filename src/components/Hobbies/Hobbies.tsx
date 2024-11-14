import { Box, Title, Text, SimpleGrid, Card, useMantineTheme } from '@mantine/core';
import { IconPalette, IconCamera, IconBook, IconMountain } from '@tabler/icons-react';

export function Hobbies() {
  const theme = useMantineTheme();

  const hobbies = [
    {
      title: 'Art & Design',
      description: 'Exploring creativity through digital art and design',
      icon: IconPalette,
    },
    {
      title: 'Photography',
      description: 'Capturing moments and telling stories through images',
      icon: IconCamera,
    },
    {
      title: 'Reading',
      description: 'Expanding knowledge through books and literature',
      icon: IconBook,
    },
    {
      title: 'Hiking',
      description: 'Exploring nature and staying active outdoors',
      icon: IconMountain,
    },
  ];

  return (
    <Box py="xl" id="hobbies">
      <Title order={2} size="h1" fw={900} ta="left" mb="xl">
        Hobbies & Interests
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {hobbies.map((hobby) => (
          <Card key={hobby.title} shadow="sm" padding="lg" radius="md" withBorder>
            <hobby.icon size={32} color={theme.colors[theme.primaryColor][6]} />
            <Text size="lg" fw={500} mt="md">
              {hobby.title}
            </Text>
            <Text size="sm" c="dimmed" mt="sm">
              {hobby.description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
