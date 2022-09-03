import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Myroute from './route';

import AirbnbCard from './adds_on/card'
import reportWebVitals from './reportWebVitals';
import {
  Grid, 
  GridItem,
  ChakraProvider,
  Container ,
  Stack,
  StackDirection,
  Wrap,
  WrapItem,
  Center,
  SimpleGrid,
  Box,
  Image,
  Text,
 Spacer  
} from '@chakra-ui/react'

import { BrowserRouter,Link, Routes, Route } from "react-router-dom";

export default function Routing(){
  return ( 
     <ChakraProvider>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<App />} />
          <Route path="list" element={<Myroute />} />
          
    </Routes>
      </BrowserRouter>
      </ChakraProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routing/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
