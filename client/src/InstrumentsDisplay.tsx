import { useEffect, useRef, useState } from "react";
import { Stack, Typography, Button, Slider, Box, IconButton } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
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
    isPlaying: boolean
}

const InstrumentsDisplay = ({fileName, isPlaying}: InstrumentsDisplayProps) => {
    const [keys, setKeys] = useState([2, 3]);

    const isSelected = (key: number) => {
        return keys.includes(key);
      }

      const changeInstruments = () => {
        if(keys.toString() === [1,2].toString()) {
          setKeys([2, 3]);
        }
        if(keys.toString() === [2,3].toString()) {
          setKeys([3, 1]);
        }
        if(keys.toString() === [3,1].toString()) {
          setKeys([1, 2]);
        }
      }

      useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying) {
              changeInstruments();
            }
          }, 1000);
          return () => clearInterval(interval);
    }, [isPlaying])

  return (
    <Stack direction='column' alignItems='center' spacing={2}>
    <Stack direction='row' alignItems='center'>
        <Typography sx={{mr: '5px', color: '#BDA7EB', fontWeight: 'bold'}}>{fileName}</Typography>
        <Typography sx={{color: '#BDA7EB'}}>contains the following instruments:</Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
        {instruments.map(x => (<img key={x.key} src={x.src} height={isSelected(x.key)? 50 : 70} width={isSelected(x.key)? 50 : 70}/>))}
      </Stack>
      </Stack>
  );
}

export default InstrumentsDisplay;