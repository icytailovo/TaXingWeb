'use client';
import { Divider, Box, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import line from '@/../public/images/Line.png';
import Image from 'next/image';

// Create a styled component for the text divider with end alignment
const EndTextDivider = styled(Box)(({ theme }) => ({
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  margin: theme.spacing(2, 0),
  '& .MuiDivider-root': {
    flexGrow: 1,
    marginRight: theme.spacing(1),
  },
}));

interface TextDividerProps {
  text: string;
  // You can add more props here like color, variant, etc.
}

// Your component
const TextDivider = ({ text }: TextDividerProps) => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', my: 3, alignItems: 'center'}}>
      {/* Your content before the divider */}
      <Image src={line} alt=""/>
      <Typography variant="body2" color="text.secondary" sx={{ml:1}}>
          {text}
      </Typography>

      {/* <EndTextDivider>
        <Divider />
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </EndTextDivider> */}

      {/* Your content after the divider */}
    </Box>
  );
};

export default TextDivider;