import Kartica from "./Kartica";

 

function Pocetna({laptopovi,uporedi,sort}) {
  return (
    <div className="all-products" >
        
        {sort==true
        ? 
        <>
            {laptopovi
            .sort((a,b)=>a.cena<b.cena?-1:1)
            .map((l)=><Kartica key={l.id} laptop={l} uporedi={uporedi}></Kartica>)}
        </>
            
        :
        <>
        {laptopovi
             .sort((a,b)=>a.cena<b.cena?1:-1)
              .map((l)=><Kartica key={l.id} laptop={l} uporedi={uporedi}></Kartica>)}</>
        
        
       }
        
    </div>





  );
}

export default Pocetna;
