import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { AppThemeProvider } from './ThemeProvider';
// import Rtl from './Rtl';

const Providers = ({ children }: { children: JSX.Element }) => (
  // <Rtl>
    <AppThemeProvider>
      <CssBaseline />
      <BrowserRouter>
        {/* <AlertProvider> */}
          {children}
        {/* </AlertProvider> */}
      </BrowserRouter>
    </AppThemeProvider>
  // </Rtl>
);

export default Providers;