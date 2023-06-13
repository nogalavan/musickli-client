import { useState } from 'react';
import './App.css';
import background from "../src/assets/background.jpeg";
import logo from "../src/assets/musiclly_logo-01.png";
import { Button, Grid, Stack, Typography, LinearProgress  } from '@mui/material';
import DragDropFile from './DragDropFile';
import PlayAudio from './PlayAudio';

function App() {
  const [file, setFile] = useState(null);

  const handleFileLoaded = (chosenFile: any) => {
    console.log(chosenFile);
    setFile(chosenFile);
  }

   return (
    <Grid container height='100vh'>
      <div style={{ backgroundImage: `url(${background})`, width: '100%' }}>
          <Stack sx={{height: '100%', p: '30px'}} spacing={2}>
            <img src={logo} width={150} height={100} />
            {!file && <DragDropFile handleFileLoaded={handleFileLoaded}></DragDropFile>}
            {/* {file && 
            <Stack sx={{height: '100%'}} alignItems='center' justifyContent='center' spacing={3}>
              <Typography sx={{color: '#BDA7EB'}} variant="subtitle1">Within a few seconds, instruments analyzing will be shown...</Typography>  
              <LinearProgress sx={{ width: '300px', backgroundColor: 'blueviolet',
                "& .MuiLinearProgress-bar": {
                  backgroundColor: '#BDA7EB'
                } }} color='secondary'/>
            </Stack>} */}
            {file && <PlayAudio file={file}></PlayAudio>}
          </Stack>
      </div>
    </Grid>
  );
}

export default App;
