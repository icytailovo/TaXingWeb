import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logoSrc from '@/../public/icons/她行 logo_透明底.png';
import Link from 'next/link';
import { pagesItems } from '@/data/navigation';

const AppAppBar: React.FC = () => {
  return (
    <AppBar color="primary" position="static" aria-label="Main navigation">
      <Box sx={{ px: { xs: 2, md: 10 } }}>
        <Toolbar disableGutters>
          <Image
            src={logoSrc}
            alt="Logo"
            width={80}
            height={80}
            priority
          />
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'space-around',
              px: { xs: 2, md: 20 },
            }}
          >
            {pagesItems.map((item) => (
              <Link href={item.path} key={item.name}>
                <Button sx={{ color: '#fff' }}>{item.name}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default AppAppBar;