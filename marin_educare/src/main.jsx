import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './components/home/HomePage.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/Footer.jsx';
import AboutPage from './components/aboutUs/AboutPage.jsx';
import MainEngine from './components/main_engine/MainEngine.jsx';
import Auxi_Machine from './components/auxiliary_machineries/Auxi_Machine.jsx';
import MarineEE from './components/marine_EE/MarineEE.jsx';
import Naval_Arch from './components/navalArch/Naval_Arch.jsx';
import All_LD from './components/all_line_diagram/All_LD.jsx';
import Main_M from './components/maintenance_M/Main_M.jsx';
import Marine_E from './components/marine_E/Marine_E.jsx';
import Safety_PO from './components/safety_PO/Safely_PO.jsx';
import Free_Notes from './components/free_Notes/Free_Notes.jsx';
import Not_Available from './Not_Available.jsx';
// import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/main_engine/*' element={<MainEngine/>}></Route>
      <Route path='/auxiliary_machineries' element={<Auxi_Machine/>}></Route>
      <Route path='/marine_electrical_and_electronics' element={<MarineEE/>}></Route>
      <Route path='/naval_architecture' element={<Naval_Arch/>}></Route>
      <Route path='/all_line_diagram' element={<All_LD/>}></Route>
      <Route path='/maintenance_of_machineries' element={<Main_M/>}></Route>
      <Route path='/marine_encyclopaedia' element={<Marine_E/>}></Route>
      <Route path='/safely_practices_onboard' element={<Safety_PO/>}></Route>
      <Route path='/free_notes' element={<Free_Notes/>}></Route>
      <Route path='/about_us' element={<AboutPage/>}></Route>
      <Route path='/*' element={<Not_Available/>}></Route>
    </Routes>
  </BrowserRouter>
)
