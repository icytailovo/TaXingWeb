import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

interface DonationDialogProps {
  open: boolean;
  onClose: () => void;
  description: string;
  link: string;
}

const DonationDialog: React.FC<DonationDialogProps> = ({ open, onClose, description, link }) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="donation-dialog-title"
  >
    <DialogTitle id="donation-dialog-title">感谢支持✨！</DialogTitle>
    <DialogContent>
      <DialogContentText sx={{ mb: 2 }}>
        {description}
      </DialogContentText>
      <Button
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        variant="outlined"
      >
        支持我们
      </Button>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Close</Button>
    </DialogActions>
  </Dialog>
);

export default DonationDialog;
