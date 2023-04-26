import { Grid,createTheme, ThemeProvider, } from '@mui/material';
import Login from './components/Login';
import { Fragment } from 'react';


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
          warning:'#e60505',
          pending:'#e68005',
          fontSize: 22,
          fontWeight: 'bold'
      },
      background: {
          paper: '#11171f',
      },
      action: {
          hover: '#ba5b5b',
      },
      borderColor:{
        main:"#a393e6"
      }
  },
});


function App() {
  return (
    <ThemeProvider theme={mytheme}>
    <Fragment>
     <Login/>
     </Fragment>
    </ThemeProvider>
  );
}

export default App;
