import { useEffect, useRef, useState } from "react";
import { Stack, Typography, Button, Slider, Box, IconButton } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import piano from "../src/assets/piano.png";
import guitar from "../src/assets/guitar.png";
import bass from "../src/assets/double-bass.png";

const instruments = [
    {
      src: bass,
      key: 0
    },
    {
      src: guitar,
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
        style={{opacity: isPlaying && isSelected(x.key) ? 1 : 0.7}}
        height={70} width={70}/>))}
      </Stack>
    </Stack>
  );
}

export default InstrumentsDisplay;