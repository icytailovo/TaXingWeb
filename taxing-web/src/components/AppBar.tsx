import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logoSrc from '@/../public/file.svg';
import Link from 'next/link';

function AppAppBar() {
  // const [open, setOpen] = React.useState(false);

  // const toggleDrawer = (newOpen: boolean) => () => {
  //   setOpen(newOpen);
  // };
  const router = useRouter();

  const pagesItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Past Programs', path: '/past-programs' },
    { name: 'Podcast', path: '/podcast' },
    { name: 'Join Us', path: '/join' },
  ];


  return (
    <AppBar color={"primary"} position="static">
      <Box
        sx={{
            px: 10,
        }}>
        <Toolbar disableGutters>
          <Image
              src={logoSrc}
              alt="Logo"
              width={40}
              height={40}
              priority
            />


            <Box sx={{ flexGrow: 1, display: 'flex' , justifyContent: 'space-around', px: 20}}>
                {pagesItems.map((item) => (
                    <Link href={item.path} key={item.name} passHref>
                    <Button sx={{ color: '#fff' }}>
                      {item.name}
                    </Button>
                  </Link>
                ))}
            </Box>


            <Box sx={{ flexGrow: 0, display: { md: 'flex' }, gap: 1 }}>
                    <Button
                        variant='contained'
                        color="inherit"
                        onClick={()=>{router.push('signin')}}
                    >
                        Sign In
                    </Button>
                    <Button
                        variant='outlined'
                        color='secondary'
                        sx={{ display: { xs: 'none', md: 'flex' }, color: 'white', borderColor: 'white'}}
                        onClick={()=>{router.push('signup')}}
                    >
                        Sign Up
                    </Button>

                </Box>
        </Toolbar>
    </Box>
    </AppBar>
  );
}

export default AppAppBar;