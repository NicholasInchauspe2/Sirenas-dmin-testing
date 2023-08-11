import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
import { CartProvider } from "./store/context/CartContext";
import Dashboard from "./layouts/Dashboard/Dashboard";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from "react";
// import SignIn from "./pages/SignIn/SignIn";

const App = () => {
  const [session, setSession] = useState(false)

  useEffect(() => {
    const isLogin = async () => {
      const URL = "rutaIsLogin"
      const PARAMS = {}
      const response = await fetch(URL, PARAMS)
      // if (response.ok) {
      if (true) {
        setSession(true)
      } else {
        setSession(false)
      }
    }
    isLogin()
  }, []);

  const defaultTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#673ab7',
      },
      secondary: {
        main: '#1e88e5',
      },
      background: {
        default: '#f8efef',
      },
      primaryPink:{
        main:'#f06292'
      },
      primaryPurple:{
        main:'#9575cd'
      }
      

    },

  });

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CartProvider>
          <Dashboard />
        </CartProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
