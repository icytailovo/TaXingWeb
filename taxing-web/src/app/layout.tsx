'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import AppBar from '../components/AppBar';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}