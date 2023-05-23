 
import { Link } from 'react-router-dom'

function Navbar({sortiraj}) {
  return (
    <div className="topnav">
        <Link to="/">Pocetna</Link>
        <Link to="/kontakt">Kontakt</Link>
        <Link to="/uporedi">Uporedi</Link> 
        <button className='btn-sort' onClick={()=>sortiraj()}>Sortiraj</button>  

    </div>





  );
}

export default Navbar;
