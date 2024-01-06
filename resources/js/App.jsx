import { useRoutes, BrowserRouter } from "react-router-dom";
import React from 'react';
import { createRoot } from 'react-dom/client'
import Home  from './Pages/Home';
import Navbar  from "./Components/Navbar";
const AppRoutes = () => {
    let routes = useRoutes([
      {path: "/",element: <Home/>},
    ]);
    return routes;
  };
  

const App = () => {
    return(
        <BrowserRouter>
        <Navbar/>
          <AppRoutes />
        </BrowserRouter> 
    );
}

if(document.getElementById('root')){
    console.log(<App/>);
    createRoot(document.getElementById('root')).render(<App/>)
}