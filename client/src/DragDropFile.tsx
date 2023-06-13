import { useRef, useState } from "react";
import { Stack, Typography, Button } from "@mui/material";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import styled from '@mui/system/styled';
import { FileUploader } from "react-drag-drop-files";

const StyledButton = styled(Button)`
  color: #E3E3E3;
  background-color: #500AE2;
  border-radius: 66.05px;
  &:hover {
    color: #E3E3E3;
    background-color: #500AE2;
  }
`;

// const fileTypes = ["WAV"];
const fileTypes = ["wav", "mp3"];

interface DragDropFileProps {
  handleFileLoaded: (chosenFile: any) => void;
}

const DragDropFile = ({handleFileLoaded}: DragDropFileProps) => {
  const handleChange = (chosenFile: any) => {
    handleFileLoaded(chosenFile)
  };

  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      types={fileTypes}>
      <Stack sx={{height: '100%'}} alignItems='center' spacing={3}>
        <Stack alignItems='center'>
          <CloudUploadOutlinedIcon sx={{ fontSize: 80, color: '#BDA7EB' }}></CloudUploadOutlinedIcon>
          <Typography sx={{color: '#BDA7EB'}} variant="h4">Drag and Drop here</Typography>
        </Stack>
        <Typography sx={{color: '#757474'}} variant="h5">or</Typography>
        <StyledButton variant="contained">Select file</StyledButton>
      </Stack>
    </FileUploader>
  );
}

export default DragDropFile;