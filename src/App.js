
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter className="App">
    <Navbar ></Navbar>
   
  </BrowserRouter>
    </div>
  );
}

export default App;
