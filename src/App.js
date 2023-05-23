 
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './komponente/Pocetna';
import Kontakt from './komponente/Kontakt';
import Footer from './komponente/Footer';
import { useState } from 'react';
import Uporedi from './komponente/Uporedi';
function App() {

  const [laptopovi] = useState([

    {
      id:1,
      model: "LENOVO V15 G2 ITLi5", 
      ekran: "14",
      baterija: 5000,  
      boja: "siva",
      cena: 60000,
      slika: "		https://img.gigatron.rs/img/products/large/image635f78b0ddcc8.png",
      uporedi:0
    },
    {
      id:2,
      model: "TESLA TeslaBook 9",
      tezina: 200,
      ekran: "16",
      baterija: 5000, 
      boja: "siva",
      cena: 120000,
      slika: "	https://img.gigatron.rs/img/products/large/image637f22273ff13.png",
      uporedi:0
  
    },
    {
      id:3,
      model: "HP",
      tezina: 200,
      ekran: "17",
      baterija: 5000, 
      boja: "siva",
      cena: 99000,
      slika: "https://img.gigatron.rs/img/products/large/image63763f587f22f.png",
      uporedi:0
  
    },
    {
      id:4,
      model: "DELL Vostro",
      tezina: 200,
      ekran: "13.3",
      baterija: 5000, 
      boja: "siva",
      cena: 80690,
      slika: "https://img.gigatron.rs/img/products/large/image630f84f3257b3.png",
      uporedi:0
  
    },
    {id:5,
      model: "Lenovo 50LENOVO IdeaPad",
      tezina: 200,
      ekran: "16",
      baterija: 5000, 
      boja: "siva",
      cena: 60000,
      slika: "https://img.gigatron.rs/img/products/large/image63ac0aa11afb5.jpg",
      uporedi:0
  
    },
    {
      id:6,
      model: "macbook air",
      tezina: 200,
      ekran: "13.3",
      baterija: 5000, 
      boja: "siva",
      cena: 120000,
      slika: "https://img.gigatron.rs/img/products/large/image62f25dc6d54f9.png",
      uporedi:0
  
    },
    {
      id:7,
      model: "ACER Nitro",
      tezina: 200,
      ekran: "13.3",
      baterija: 5000, 
      boja: "siva",
      cena: 99000,
      slika: "	https://img.gigatron.rs/img/products/large/image634fc8efafcaa.png",
      uporedi:0
  
    },
    {
      id:8,
      model: "macbook pro",
      tezina: 200,
      ekran: "16",
      baterija: 5000, 
      boja: "siva",
      cena: 80690,
      slika: "https://img.gigatron.rs/img/products/large/image63dbafa4c3856.jpg",
      uporedi:0
  
    },
    {
      id:9,
      model: "LenovoThinkBook",
      tezina: 200,
      ekran: "16",
      baterija: 5000, 
      boja: "siva",
      cena: 109690,
      slika: "	https://img.gigatron.rs/img/products/large/image64183a3e68263.jpg",
      uporedi:0
  
    },
    {
      id:10,
      model: "HP OMEN",
      tezina: 200,
      ekran: "16",
      baterija: 5000, 
      boja: "siva",
      cena: 80690,
      slika: "https://img.gigatron.rs/img/products/large/image635b7868cb2f1.png",
      uporedi:0
  
    },
  
  ]);  
  

  const [laptopoviUporedjivanje,setLaptopoviUporedjivanje]=useState([]);
  const [brojUporedi,setBrojUporedi]=useState(0);
  const [sort,setSort]=useState(true);

  function sortiraj(){
    setSort(!sort);
  }
  function uporediLaptop(id){
    setBrojUporedi(brojUporedi+1);
    laptopovi.forEach((t)=>{
        if(t.id==id)
          t.uporedi=1;
    })
    let niz =  laptopovi.filter((t)=>t.uporedi==1);
    setLaptopoviUporedjivanje(niz);
  }
  return (
    <div  > 
      <BrowserRouter className="App">
        <Navbar sortiraj={sortiraj}></Navbar>
        <Routes>
            <Route path="/" element={<Pocetna laptopovi={laptopovi} uporedi={uporediLaptop} sort={sort}></Pocetna>}> </Route>
            <Route path="/kontakt" element={<Kontakt></Kontakt>}> </Route>
            <Route path="/uporedi" element={<Uporedi broj={brojUporedi} laptopoviUporedjivanje={laptopoviUporedjivanje}></Uporedi>}> </Route>



        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

