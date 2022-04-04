import './App.css';
import React, {useState} from "react";
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import ContestPage from "./pages/contestPage";
import FormPage from "./pages/formPage";
import HomePage from "./pages/homePage";
import LegalPage from "./pages/legalPage";
import ResultsPage from "./pages/resultsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/navbar";

function App() {

  const [win, setWin] = useState(false);
  const [userPrize, setPrize] = useState(0);

  let setResults = function (result, prize){
    setWin(result);
    setPrize(prize);
    console.log('Results were set');
  }

  return (
    
    <BrowserRouter> 
    <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage/>} />
        <Route path="form" element={<FormPage />} />
        <Route path="legal" element={<LegalPage/>} />
        <Route path="results" element={<ResultsPage didUserWin={win} userPrize={userPrize}/>} />
        <Route path="contest" element={<ContestPage setResults={setResults} setWin={setWin}  setPrize={setPrize}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>  
  
  );
}

export default App;
