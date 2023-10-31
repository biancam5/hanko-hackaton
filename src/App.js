import './App.css';
import React, { useState } from 'react';
import theme from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import HomeComponent from './components/home/Home';
import Sidebar from './components/home/sidebar/Sidebar';
import CardComponent from './components/home/card/Card';
import Rightbar from './components/home/rightbar/rightbar';
import AppRouter from './AppRouter.js';
  
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      {/* {loggedIn ? ( */}
        <>
          <HomeComponent />
          <Sidebar />
          <Rightbar />
          <CardComponent />
          <AppRouter />
        </>
      {/* // ) : (
      //   <AppRouter onLogin={() => setLoggedIn(true)} />
      // )} */}
    </ThemeProvider>
  );
}

export default App;
 