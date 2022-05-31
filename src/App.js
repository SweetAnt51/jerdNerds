import './App.css';
import AppGrid from './components/body/AppGrid/AppGrid.js'
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { useState } from 'react';
import Header from './components/header/Header';
import Body from './components/body/Body';

function App() {
  const [themeMode, setThemeMode] = useState('dark')
  const theme = createTheme({palette: {
    mode: themeMode
    }
  });
  return (
    // <div style={{height:'125%', backgroundColor:themeMode === 'dark' ? '#232324' : '#f0f0f2'}}>
    <ThemeProvider theme={theme} >
    <div style={{width:'100%', height:'100%', backgroundColor:themeMode === 'dark' ? '#232324' : '#f0f0f2'}}>
      <Header text = {'JedNerds'} mode={themeMode} setThemeMode={setThemeMode}/>
      <Body theme={themeMode} />
      
    </div>
    </ThemeProvider>
    // </div>
  );
}

export default App;
