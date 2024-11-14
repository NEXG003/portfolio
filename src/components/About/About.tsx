import { Text, Title } from "@mantine/core";
import classes from "./About.module.css";

export function About() {
  return (
    <div className={classes.section}>
      <Title order={2} className={classes.sectionTitle}>
        About Me
      </Title>
      <Text className={classes.sectionText}>
        I'm a software engineer with a passion for building innovative web applications.
        With expertise in modern web technologies like React, Node.js, and cloud platforms,
        I focus on creating efficient, scalable, and user-friendly solutions.
      </Text>
    </div>
  );
}
