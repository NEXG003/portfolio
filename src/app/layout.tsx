import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { ColorSchemeScript } from '@mantine/core';
import { Inter } from 'next/font/google';
import { Providers } from '../components/providers/Providers';
import { Header } from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ranjit Kairi - Software Engineer',
  description: 'Personal website of Ranjit Kairi, a Software Engineer passionate about building great software.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
      <Header />
          {children}
      <Footer />
          </Providers>
      </body>
    </html>
  );
}
