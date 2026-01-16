'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
const line = '/images/Line.png';

interface TextDividerProps {
  text: string;
}

const TextDivider = ({ text }: TextDividerProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', my: 3 }}>
      <Image src={line} alt="Divider Line" />
      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
        {text}
      </Typography>
    </Box>
  );
};

export default TextDivider;