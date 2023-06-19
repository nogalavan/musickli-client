import { useState } from 'react';
import './App.css';
import background from "../src/assets/background.jpeg";
import logo from "../src/assets/musiclly_logo-01.png";
import { Grid, LinearProgress, Stack, Typography, Box } from '@mui/material';
import DragDropFile from './DragDropFile';
import PlayScreen from './PlayScreen';

const SERVER_UPLOAD_FILE_ADDRESS = 'http://localhost:8000/files/loadfile/';

function App() {
  const [file, setFile] = useState(null);
  const [fileInstruments, setFileInstruments] = useState(null);

  const handleFileLoaded = (chosenFile: any) => {
    setFile(chosenFile);
    sendFileToServer(chosenFile);
  }

  const sendFileToServer = async (chosenFile: any) => {
    try {
      const formData = new FormData();
      formData.append('audio_file', chosenFile);

      const response = await fetch(SERVER_UPLOAD_FILE_ADDRESS, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setFileInstruments(data);
    } catch (error) {
      console.log("fucking fetch mate")
      console.error(error)
    }
  }

  return (
    <Grid container height='100vh'>
      <div style={{ backgroundImage: `url(${background})`, width: '100%' }}>
        <Stack sx={{ height: '100%', p: '30px' }} spacing={2}>
          <img src={logo} width={150} height={100} />
            {!file && <Box><DragDropFile handleFileLoaded={handleFileLoaded}></DragDropFile></Box>}
          {file && !fileInstruments && 
            <Stack sx={{height: '100%'}} alignItems='center' justifyContent='center' spacing={3}>
              <Typography sx={{color: '#BDA7EB'}} variant="subtitle1">Within a few seconds, instruments analyzing will be shown...</Typography>  
              <LinearProgress sx={{ width: '300px', backgroundColor: 'blueviolet',
                "& .MuiLinearProgress-bar": {
                  backgroundColor: '#BDA7EB'
                } }} color='secondary'/>
            </Stack>}
          {file && fileInstruments && <PlayScreen file={file} fileInstruments={fileInstruments}></PlayScreen>}
        </Stack>
      </div>
    </Grid>
  );
}

export default App;
