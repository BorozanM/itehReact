 
import { BsFillPhoneFill,BsBatteryFull,BsPen} from 'react-icons/bs';
import { ImPriceTag} from 'react-icons/im';
import { DiGitCompare } from 'react-icons/di';
function Kartica({laptop,uporedi}) {
    return (
      <div className="card" >
              <div className="card-header">
                    <img src={laptop.slika} alt="" className="card-img-top" />
              </div>
              <div className="card-body">
                <h4 className="product-name">{laptop.model}</h4>
                <hr />
                <h5 className='karakteristike'>
                    
                    <BsFillPhoneFill></BsFillPhoneFill>  Ekran: {laptop.ekran} <br />
                    <ImPriceTag></ImPriceTag>  Cena: {laptop.cena} <br />        
                    <BsBatteryFull></BsBatteryFull>  Baterija: {laptop.baterija} <br />     
                    <BsPen></BsPen>  Boja: {laptop.boja} <br />        

                </h5>
              </div>
            <button className="btnCompare" onClick={()=>uporedi(laptop.id)}><DiGitCompare></DiGitCompare></button>
      </div>
  
  
  
  
  
    );
  }
  
  export default Kartica;
  