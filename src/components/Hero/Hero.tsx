import { Button, Group, Image, Text, Title } from "@mantine/core";
import Link from "next/link";
import classes from "./Hero.module.css";

export function Hero() {
  return (
    <div className={classes.hero}>
      <Group align="flex-start" gap={50}>
        <div style={{ flex: 1 }}>
          <Title className={classes.title}>
            Hi, I&apos;m <span className={classes.highlight}>Ranjit Kairi</span>
          </Title>

          <Text className={classes.description} mt="xl">
            A passionate Software Engineer dedicated to crafting elegant solutions to complex problems. 
            I specialize in building modern web applications with cutting-edge technologies.
          </Text>

          <Group mt={30}>
            <Link href="/projects">
              <Button
                size="lg"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
              >
                View My Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="default">
                Get in Touch
              </Button>
            </Link>
          </Group>
        </div>

        <div className={classes.imageWrapper}>
          <Image
            src="/images/my-img.jpeg"
            alt="Ranjit Kairi"
            radius="md"
            w={280}
            h={280}
            fit="cover"
            style={{
              boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
              borderRadius: "var(--mantine-radius-md)",
            }}
          />
        </div>
      </Group>
    </div>
  );
}
