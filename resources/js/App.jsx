import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./Context";
import React from 'react';
import { createRoot } from 'react-dom/client'
import Home  from './Pages/Home';
import Order  from './Pages/Order';
import Orders  from './Pages/Orders';
import Navbar  from "./Components/Navbar";
const AppRoutes = () => {
    let routes = useRoutes([
      {path:"/",element: <Home />},
      {path:"/my-order",element:<Order />},
      {path:"/my-order/last",element:<Order />},
      {path:"/my-orders",element:<Orders />},
    ]);
    return routes;
  };
  

const App = () => {
    return(
      <ShoppingCartProvider>
        <BrowserRouter>
        <Navbar/>
          <AppRoutes />
        </BrowserRouter> 
        </ShoppingCartProvider>
    );
}

if(document.getElementById('root')){
    createRoot(document.getElementById('root')).render(<App/>)
}