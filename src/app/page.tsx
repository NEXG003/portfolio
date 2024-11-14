"use client";

import { Container } from "@mantine/core";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Skills } from "../components/Skills/Skills";
import { FeaturedProjects } from "../components/FeaturedProjects/FeaturedProjects";
import { Hobbies } from "../components/Hobbies/Hobbies";
import { Certifications } from "../components/Certifications/Certifications";

export default function HomePage() {
  return (
    <Container size="lg">
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Hobbies />
      <Certifications />
    </Container>
  );
}