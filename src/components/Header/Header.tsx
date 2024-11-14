'use client';

import { useState } from 'react';
import { Container, Group, Burger, ActionIcon, useMantineColorScheme, Box, Drawer, Stack, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import classes from './Header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/projects', label: 'Projects' },
  { link: '/contact', label: 'Contact' },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const pathName = usePathname();

  const toggleColorScheme = () => {
    setColorScheme(dark ? 'light' : 'dark');
  };

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={` ${pathName === link.link ? classes.activeLink : classes.link}`}
      onClick={() => opened && close()}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Avatar component={Link} href="/" className={`${pathName === '/' ? classes.activeLogo : classes.logo}`} src='/images/my-img.jpeg'/>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Group gap={5}>
          <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={toggleColorScheme}
            title="Toggle color scheme"
            size="lg"
          >
            {dark ? (
              <IconSun size="1.2rem" stroke={1.5} />
            ) : (
              <IconMoonStars size="1.2rem" stroke={1.5} />
            )}
          </ActionIcon>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Group>

        <Drawer
          opened={opened}
          onClose={close}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="xs"
          zIndex={1000}
        >
          <Stack>
            {items}
          </Stack>
        </Drawer>
      </Container>
    </header>
  );
}
