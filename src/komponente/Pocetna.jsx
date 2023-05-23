import Kartica from "./Kartica";

function Pocetna({laptopovi}) {
  return (
    <div className="all-products">
        
        {laptopovi.map((l)=><Kartica laptop={l} ></Kartica>)}
    
    </div>
  );
}

export default Pocetna;
