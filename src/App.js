import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Github from "./pages/github/Github"
import Details from "./pages/details/Detail"
import Login from './pages/login/Login'
import Turkish from './pages/turkish/Turkish'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
         <Route>
             <Route path="/Chef_Recipes" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/github" element={<Github/>}/>
             <Route path="/details"  element={<Details/>}/>
             <Route path="/login"  element={<Login/>}/>
             <Route path="/Chef_Recipes/turkish"  element={<Turkish/>}/>
         </Route>
     </Routes>
 </BrowserRouter>
  );
}

export default App;
