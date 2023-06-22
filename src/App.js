import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//bootstrap file
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


//css file

import './App.css';

// Main files
import Login from './login';
import Signup from "./signup";
import Layout from "./layout";
import Product from "./product";
import Home from "./home";

// Products file
import Sofas from "./Products/sofas";
import Bed  from './Products/bed';
import Chair from "./Products/chair";
import Dinning from "./Products/dinning";
import Dresser from "./Products/dresser";




// Order files

import PlaceOrders from "./Orders/Place-Orders";
import ViewOrder from "./Orders/View-Order";

function App() {
  return (


    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
  
        <Route path="/product" element={<Product />}>
          <Route index element={<Sofas />} />
          <Route path="/product/bed" element={<Bed />} />
          <Route path="/product/chair" element={<Chair />} />
          <Route path="/product/dinning" element={<Dinning />} />
          <Route path="/product/dresser" element={<Dresser />} />
          
        </Route>
        <Route path="/Orders" element={<PlaceOrders />} />
        <Route path="/view" element={<ViewOrder/>} />



        
      </Route>
    </Routes>
  </BrowserRouter>


     
   
  );
}

export default App;
