import { Badge, Card, Group, SimpleGrid, Title } from "@mantine/core";
import classes from "./Skills.module.css";

const skillsData = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "blue",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "REST APIs", "GraphQL"],
    color: "green",
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "CI/CD"],
    color: "grape",
  },
];

export function Skills() {
  return (
    <div className={classes.section}>
      <Title order={2} className={classes.sectionTitle}>
        Skills
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {skillsData.map((category) => (
          <Card key={category.title} shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={3} size="h4">
              {category.title}
            </Title>
            <Group mt="md">
              {category.skills.map((skill) => (
                <Badge key={skill} color={category.color}>
                  {skill}
                </Badge>
              ))}
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}
