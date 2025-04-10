import React,{createContext,useState} from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WishList from "./pages/WishList";
import Header from "./components/Header";


const App = ()=>{


  return(
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/wishList" element={<WishList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}


createRoot(document.getElementById('root')).render(<App/>);