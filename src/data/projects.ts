export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured?: boolean;
  completedAt?: string;
}

export const projects: Project[] = [
  {
    id: 'personal-website',
    title: 'Personal Website',
    description: 'My personal portfolio website built with Next.js, TypeScript, and Mantine UI',
    image: 'https://cdn.pixabay.com/photo/2024/01/29/19/38/forest-8540698_1280.jpg',
    tags: ['Next.js', 'TypeScript', 'Mantine UI'],
    github: 'https://github.com/yourusername/personal-website',
    demo: 'https://your-website.com',
    featured: true,
    completedAt: '2024-01'
  },
  {
    id: 'project-management',
    title: 'Project Management Tool',
    description: 'A collaborative project management application with real-time updates',
    image: 'https://cdn.pixabay.com/photo/2020/03/19/21/25/cactus-4948833_1280.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project-management',
    demo: 'https://project-management-demo.com',
    featured: true,
    completedAt: '2023-12'
  },
  {
    id: 'e-commerce',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration',
    image: 'https://cdn.pixabay.com/photo/2019/08/26/12/15/abc-4431556_1280.jpg',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com/yourusername/e-commerce',
    demo: 'https://e-commerce-demo.com',
    completedAt: '2023-10'
  }
];
