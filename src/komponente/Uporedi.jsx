import Kartica from "./Kartica";

 

function Uporedi({laptopoviUporedjivanje,broj}) {
  return (
    <div className="uporedi" >
         {broj==0? 
         <><p>Niste odabrali laptopove za uporedjivanje</p></>
         :
         broj>4? <><p>Odabrali ste previse</p></>
            :
            <>
                <table >
                    <thead>

                    </thead>
                    <tbody>
                        <tr><th>Slika</th>{laptopoviUporedjivanje.map((l)=><td className="celijaSlika"><img src={l.slika} className="slika"/></td>)}</tr>
                        <tr><th>Model</th>{laptopoviUporedjivanje.map((l)=><td>{l.model}</td>)}</tr>
                        <tr><th>Cena</th>{laptopoviUporedjivanje.map((l)=><td>{l.cena}</td>)}</tr>
                        <tr><th>Ekran</th>{laptopoviUporedjivanje.map((l)=><td>{l.ekran}</td>)}</tr>
                        <tr><th>Baterija</th>{laptopoviUporedjivanje.map((l)=><td>{l.baterija}</td>)}</tr>
                        <tr><th>Boja</th>{laptopoviUporedjivanje.map((l)=><td>{l.boja}</td>)}</tr>


                    </tbody>
                </table>
            
            
            
            </>
         }
    </div>





  );
}

export default Uporedi;