import { useEffect, useRef, useState } from "react";
import { Stack, Typography, Button, Slider, Box, IconButton } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import piano from "../src/assets/piano-01.png";
import saxophone from "../src/assets/saxophone-01.png";
import tuba from "../src/assets/tuba-01.png";

const instruments = [
    {
      src: saxophone,
      key: 0
    },
    {
      src: tuba,
      key: 1
    },
    {
      src: piano,
      key: 2
    },
  ]

interface InstrumentsDisplayProps {
    fileName: string;
    isPlaying: boolean;
    fileInstruments: any;
    seconds: number;
}

const InstrumentsDisplay = ({fileName, isPlaying, fileInstruments, seconds}: InstrumentsDisplayProps) => {
  const keys = fileInstruments[seconds]?.flatMap((x: number, i: number) => x === 1 ? i : []);
  console.log(seconds);
  console.log(keys);

  const isSelected = (key: number) => {
    return keys?.includes(key);
  }

  return (
    <Stack direction='column' alignItems='center' spacing={2}>
    <Stack direction='row' alignItems='center'>
        <Typography sx={{mr: '5px', color: '#BDA7EB', fontWeight: 'bold'}}>{fileName}</Typography>
        <Typography sx={{color: '#BDA7EB'}}>contains the following instruments:</Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
        {instruments.map(x => (<img key={x.key} src={x.src}
        height={isPlaying && isSelected(x.key) ? 50 : 70} width={isPlaying && isSelected(x.key) ? 50 : 70}/>))}
      </Stack>
      </Stack>
  );
}

export default InstrumentsDisplay;