
function Kartica({laptop}) {
    return (
      <div className="card" >
              <div className="card-header">
                    <img src={laptop.slika} alt="" className="card-img-top" />{/* ceo ovaj div je slika! */}
              </div>
              <div className="card-body">{/* podaci o toj kartici na kojoj ce se predstavljati */}
                <h3 className="product-name">{laptop.model}</h3>
               
                <h5 className='karakteristike'>
                    
                    Ekran: {laptop.ekran} <br />
                    Cena: {laptop.cena} <br />        
                    Baterija: {laptop.baterija} <br />     
                    Boja: {laptop.boja} <br />        
                    
                </h5>
              </div>
            <button className="btnCompare" >Uporedi</button>
      </div>
  
  
  
  
  
    );
  }
  
  export default Kartica;
  