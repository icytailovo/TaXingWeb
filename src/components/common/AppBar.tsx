import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image';
const logoSrc = '/icons/她行logo-圆角方形.png';
import Link from 'next/link';
import { pagesItems } from '@/data/navigation';
import { donationDescription, donationLink } from '@/data/donation';
import DonationDialog from '@/components/common/DonationDialog';

const AppAppBar: React.FC = () => {
  const [donationOpen, setDonationOpen] = React.useState(false);

  const handleDonationOpen = () => setDonationOpen(true);
  const handleDonationClose = () => setDonationOpen(false);

  return (
    <AppBar color="primary" position="static" aria-label="Main navigation">
      <Box sx={{ px: { xs: 2} }}>
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
                <Button sx={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{item.name}</Button>
              </Link>
            ))}

            {/* Donation */}
            <Button
              onClick={handleDonationOpen}
              sx={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}
            >
              Donation
            </Button>
          </Box>
        </Toolbar>
      </Box>
      <DonationDialog
        open={donationOpen}
        onClose={handleDonationClose}
        description={donationDescription}
        link={donationLink}
      />
    </AppBar>
  );
};

export default AppAppBar;