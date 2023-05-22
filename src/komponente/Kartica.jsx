
function Kartica() {
    return (
      <div className="card" >
              <div className="card-header">
                    <img src="" alt="" className="card-img-top" />{/* ceo ovaj div je slika! */}
              </div>
              <div className="card-body">{/* podaci o toj kartici na kojoj ce se predstavljati */}
                <h3 className="product-name">{}</h3>
               
                <h5 className='karakteristike'>
                    
                    Ekran: {} <br />
                    Cena: {} <br />        
                    Baterija: {} <br />     
                    Boja: {} <br />        

                </h5>
              </div>
            <button className="btnCompare" ></button>
      </div>
  
  
  
  
  
    );
  }
  
  export default Kartica;
  