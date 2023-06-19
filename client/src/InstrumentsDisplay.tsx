import { Stack, Typography } from "@mui/material";
import piano from "../src/assets/piano-01.png";
import saxophone from "../src/assets/saxophone-01.png";
import tuba from "../src/assets/tuba-01.png";

const instruments = [
    {
      src: piano,
      key: 1
    },
    {
      src: saxophone,
      key: 2
    },
    {
      src: tuba,
      key: 3
    },
  ]

interface InstrumentsDisplayProps {
    fileName: string;
    isSelected: (key: number) => boolean;
}

const InstrumentsDisplay = ({fileName, isSelected}: InstrumentsDisplayProps) => {
  return (
    <Stack direction='column' alignItems='center' spacing={2}>
    <Stack direction='row' alignItems='center'>
        <Typography sx={{mr: '5px', color: '#BDA7EB', fontWeight: 'bold'}}>{fileName}</Typography>
        <Typography sx={{color: '#BDA7EB'}}>contains the following instruments:</Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
        {instruments.map(x => (<img key={x.key} src={x.src} height={50} width={50} 
        style={{opacity: isSelected(x.key) ? 1 : '50%'}}/>))}
      </Stack>
      </Stack>
  );
}

export default InstrumentsDisplay;