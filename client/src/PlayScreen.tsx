import { useEffect, useState } from "react";
import { Stack, Typography, Slider, IconButton } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import InstrumentsDisplay from "./InstrumentsDisplay";

interface PlayScreenProps {
  file: any;
  fileInstruments: any
}

const PlayScreen = ({file, fileInstruments}: PlayScreenProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(new Audio(window.URL.createObjectURL(file)));
    const [duration, setDuration] = useState<number>();
    const [seconds, setSeconds] = useState(0);
    const [keys, setKeys] = useState(1);

    useEffect(() => {
        if(audio) {
            audio.onloadedmetadata = () => {
                setDuration(audio.duration);
            }
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying) {
              setSeconds(audio.currentTime);
              changeInstruments();
            }
          }, 1000);
          return () => clearInterval(interval);
    }, [isPlaying])

    const changeInstruments = () => {
        console.log(keys);
        
        if(keys === 1) {
            console.log('noga');
            
            setKeys(2);
        }
        else if(keys === 2) {
            console.log('is');
            setKeys(3);
        }
        else if(keys === 3) {
            console.log('beautiful');
            setKeys(1);
        }
      }

      
    const isSelected = (key: number) => {
        // return keys.includes(key);
        return keys === key;
      }
    

    const playAudio = () => {
        setIsPlaying(true);
        audio?.play();
    }

    const stopAudio = () => {
        audio?.pause();
        setIsPlaying(false);
    }

  return (
    <Stack direction='column' spacing={2} alignItems='center' justifyContent='center' width='100%'>
        <InstrumentsDisplay fileName={file.name} isSelected={isSelected}></InstrumentsDisplay>
        {duration && 
        <Stack direction='row' spacing={1} justifyContent='center' alignItems='center' width='100%'>
            <IconButton onClick={isPlaying ? stopAudio : playAudio}>
                {!isPlaying ? <PlayArrowIcon sx={{color: '#BDA7EB', height: '60px', width: '60px'}}/> :
                <PauseIcon sx={{color: '#BDA7EB', height: '60px', width: '60px'}}></PauseIcon> }
            </IconButton>
            <Slider value={seconds} max={duration} min={0} color="secondary" disabled sx={{width: '60%'}}/>
            <Typography sx={{color: '#BDA7EB'}}>{Math.round(duration)}</Typography>
        </Stack> 
        }
    </Stack>
  );
}

export default PlayScreen;