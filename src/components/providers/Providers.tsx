'use client';

import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import React, { type ReactNode } from 'react';

const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'Inter, sans-serif',
  defaultRadius: 'md',
  colors: {
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5C5F66',
      '#373A40',
      '#2C2E33',
      '#25262B',
      '#1A1B1E',
      '#141517',
      '#101113',
    ],
  },
});

export function Providers({ children }: { children: ReactNode  }) {
  return (
    <MantineProvider 
      theme={theme} 
      defaultColorScheme="dark"
      forceColorScheme="dark"
    >
      <Notifications />
      {children}
    </MantineProvider>
  );
}
