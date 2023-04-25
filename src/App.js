import { Grid,createTheme, ThemeProvider, } from '@mui/material';
import Login from './components/Login';


const mytheme = createTheme({
  palette: {

      mode: 'dark',

      primary: {
          main: '#00000',
          contrastText: '#ffffff',
      },
      secondary: {
          main: '#1b232e',
      },
      text: {
          primary: '#ffffff',
          fontSize: 22,
          fontWeight: 'bold'
      },
      background: {
          paper: '#11171f',
      },
      action: {
          hover: '#ba5b5b',
      },
  },
});


function App() {
  return (
    <ThemeProvider theme={mytheme}>
    <div className="App">
     <Login/>
    </div>
    </ThemeProvider>
  );
}

export default App;
