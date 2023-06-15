import { useEffect, useRef, useState } from "react";
import { Stack, Typography, Button, Slider, Box, IconButton } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import piano from "../src/assets/piano-01.png";
import saxophone from "../src/assets/saxophone-01.png";
import tuba from "../src/assets/tuba-01.png";

let animationController;

interface PlayAudioProps {
  file: any;
  handleStartPlay: () => void;
  handleStopPlay: () => void;
}

const PlayAudio = ({file, handleStartPlay, handleStopPlay}: PlayAudioProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const source = useRef<MediaElementAudioSourceNode>();
  const analyzer = useRef<AnalyserNode>();

  const handleAudioPlay = () => {
    let audioContext = new AudioContext();
    if (!source.current && audioRef.current) {
      source.current = audioContext.createMediaElementSource(audioRef.current);
      analyzer.current = audioContext.createAnalyser();
      source.current.connect(analyzer.current);
      analyzer.current.connect(audioContext.destination);
    }

    handleStartPlay();
    // visualizeData();
  };

  const visualizeData = () => {
    if(audioRef.current && analyzer.current && canvasRef.current) {
      animationController = window.requestAnimationFrame(visualizeData);
    if (audioRef.current.paused) {
      // handleStopPlay();
      return cancelAnimationFrame(animationController);
    }
    const songData = new Uint8Array(140);
    analyzer.current.getByteFrequencyData(songData);
    const bar_width = 3;
    let start = 0;
    const ctx = canvasRef.current.getContext("2d");
    ctx!.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    for (let i = 0; i < songData.length; i++) {
      // compute x coordinate where we would draw
      start = i * 4;
      //create a gradient for the  whole canvas
      let gradient = ctx!.createLinearGradient(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      gradient.addColorStop(0.2, "#2392f5");
      gradient.addColorStop(0.5, "#fe0095");
      gradient.addColorStop(1.0, "purple");
      ctx!.fillStyle = gradient;
      ctx!.fillRect(start, canvasRef.current.height, bar_width, -songData[i]);
      // console.log('noga');
      
    }
    }
  };

  return (
    <Stack>
      <Stack direction='row' alignItems='center'>
      <audio
          ref={audioRef}
          onPlay={handleAudioPlay}
          src={window.URL.createObjectURL(file)}
          controls
        />
      </Stack>
      {/* <Stack direction='row' alignItems='center'>
        <canvas ref={canvasRef} width={500} height={100} />
      </Stack> */}
    </Stack>
  );
}

export default PlayAudio;