
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './komponente/Pocetna';
import Kontakt from './komponente/Kontakt';
import Footer from './komponente/Footer';

function App() {
  return (
    <div >
      <BrowserRouter className="App">
    <Navbar ></Navbar> {/* ne stavljamo rutu jer hocemo da se ovo svugde prikazuje */}
   <Routes>
<Route path="/"element={<Pocetna></Pocetna>}></Route>
<Route path="/kontakt"element={<Kontakt></Kontakt>}></Route>

   </Routes>
   <Footer></Footer>
  </BrowserRouter>
    </div>
  );
}

export default App;
