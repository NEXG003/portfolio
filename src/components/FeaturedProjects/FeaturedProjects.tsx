import { Badge, Button, Card, Group, Image, SimpleGrid, Text, Title } from "@mantine/core";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { projects } from "../../data/projects";
import classes from "./FeaturedProjects.module.css";

export function FeaturedProjects() {
  const router = useRouter();
  
  const trendingProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => {
      if (!a.completedAt || !b.completedAt) return 0;
      return new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime();
    })
    .slice(0, 2);

  return (
    <div className={classes.section}>
      <Title order={2} className={classes.sectionTitle}>
        Featured Projects
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {trendingProjects.map((project) => (
          <Card
            key={project.id}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{ cursor: "pointer" }}
            onClick={() => router.push(`/projects/${project.id}`)}
          >
            <Card.Section>
              <Image src={project.image} height={160} alt={project.title} />
            </Card.Section>

            <Title order={3} size="h4" mt="md">
              {project.title}
            </Title>
            <Text size="sm" c="dimmed" mt="sm" lineClamp={2}>
              {project.description}
            </Text>

            <Group mt="md" gap={7}>
              {project.tags.map((tag) => (
                <Badge key={tag} variant="light">
                  {tag}
                </Badge>
              ))}
            </Group>

            <Group mt="md">
              <Button
                variant="light"
                size="sm"
                component="a"
                href={project.github}
                target="_blank"
                leftSection={<IconBrandGithub size={16} />}
              >
                GitHub
              </Button>
              <Button
                variant="light"
                size="sm"
                component="a"
                href={project.demo}
                target="_blank"
                leftSection={<IconExternalLink size={16} />}
              >
                Demo
              </Button>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}
