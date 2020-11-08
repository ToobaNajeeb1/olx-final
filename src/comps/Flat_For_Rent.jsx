
import React from 'react'
import a1 from '../ui/51.PNG';
import a2 from '../ui/52.PNG';
import a3 from '../ui/53.PNG';
import { NavLink }  from 'react-router-dom';

const Flat_For_Rent=()=>{
    return(
        <div>
            {/*navbar*/}
            <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">ALL CATEGORIES</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/MobilePhone">Mobile Phone <span className="sr-only">(current)</span></NavLink>
            <NavLink className="nav-item nav-link active" to="/Cars">Cars</NavLink>
            <NavLink className="nav-item nav-link active" to="/Motorcycles">Motorcycles</NavLink>
            <NavLink className="nav-item nav-link active" to="/Houses">Houses</NavLink>
            <NavLink className="nav-item nav-link active" to="/TVVideoAudio">TV_Video-Audio</NavLink>
            <NavLink className="nav-item nav-link active" to="/Tablets">Tablets</NavLink>
               
                  
          </div>
        </div>
      </nav>


        </div>

           {/*navbar*/}
         
            <h3 className="cars">Apartments & Flats for rent
</h3>
            <h6 className="filter">Filters</h6>
            
           <div>
              
            <div className="M1">
            <div className="M1">
            <div className="M11">
            <h4 >CATEGORIES</h4><br/>
        <ul className="list-unstyled">
    <li>
      <a className="H1" href="#!">All Categories</a>
    </li>

    <li>
      <a className="H1" href="#!">Property For Rent</a>
    </li>
   </ul>
   <hr className="line"/>
    <br/>
        <h5 >Houses(6260)</h5><br/>
        <ul className="list-unstyled">
    <li>
      <a className="H1" href="#!">Flat on  Installment(28403)</a>
    </li>
    <li>
      <a  className="N2"href="#!">Flat Accessories(1763082)</a>
    </li>
    <li>
      <a  className="N2"href="#!">Flat(1763082)</a>
    </li>
    <li>
      <a  className="N2"href="#!">rooms(12)</a>
    </li>
    <li>
      <a  className="N2"href="#!">Rickshaw(1763082)</a>
    </li>
    <li>
      <a  className="N2"href="#!">OtherVichels(163082)</a>
    </li>
    <li>
      <a  className="N2"href="#!">Boat(1763082)</a>
    </li>
    <li>
      <a  className="N2"href="#!">Tractor &Trailers(1763082)</a>
    </li>
    
    
    
    
    
    
    <hr className="line"/>
  </ul>
  <h6 >LOCATION</h6><br/>
        <h6 >Pakistan</h6><br/>
        <ul className="list-unstyled">
    <li>
      <a  className="H1"href="#!">Punjab(108859)</a>
    </li>
    <li>
      <a className="H1" href="#!">Sindh(42695)</a>
    </li>
    
    <li>
      <a className="H1" href="#!">khyber pakhtunkhawa(12881)</a>
    </li>
    <li>
      <a className="H1" href="#!">Islamabad Capital Territory(9335)</a>
    </li>
    <li>
      <a className="H1" href="#!">Blochistan(1536)</a>
    </li>
    <li>
      <a className="H1" href="#!">Azad Kashmir(975)</a>
    </li><li>
      <a className="H1" href="#!">Northern Areas(27)</a>
    </li><br/>
    <hr className="line"/>
    <h5 className="H1" >MAKE</h5>
    <li>
      <a  className="H1"href="#!">Samsung(42155)</a>
    </li>
    <li>
      <a className="H1" href="#!">Apple(38782)</a>
    </li>
    
    <li>
      <a className="H1" href="#!">Huawel(18549)</a>
    </li>
    <li>
      <a className="H1" href="#!">OPPO(17085)</a>
    </li>
    <li>
      <a className="H1" href="#!">Vivo(10013)</a>
    </li>

  </ul>
           
            </div>{/*M11*/}
            
            </div>{/*M1*/}
            {/*M1*/}
            
            </div>{/*M1*/}
            
                      <div className="M2">
                         
                     <div className="M3">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a1} width="240px" alt=""/>
        <div className="card-body">
          <h4 className="card-title">Rs 20,999</h4>
          <h6 className="card-title">Motorola G8 4gb 64gb </h6>
         </div>
      </div>
      </div>{/*M3*/}
      <div className="M4">
         <div className="card" style={{width: '15rem'}} >
         <img  src={a2} width="240px"  height="140px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 105,000</h5>
          <h6 className="card-title">Iphone XsMac</h6>
         </div>
      </div>
      </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a3} width="240px" height="140px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 57,500</h5>
          <h5 className="card-title">Iphone 7plus</h5>
         </div>
      </div>
      </div>{/*M5*/}



      
    
    
                          </div>{/*M2*/}
      


                          <div className="M6">
                          <div className="M3">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a1} width="240px" alt=""/>
        <div className="card-body">
          <h4 className="card-title">Rs 20,999</h4>
          <h6 className="card-title">Motorola G8 4gb 64gb </h6>
         </div>
      </div>
      </div>{/*M3*/}
      <div className="M4">
         <div className="card" style={{width: '15rem'}} >
         <img  src={a2} width="240px"  height="140px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 105,000</h5>
          <h6 className="card-title">Iphone XsMac</h6>
         </div>
      </div>
      </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a3} width="240px" height="140px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 57,500</h5>
          <h5 className="card-title">Iphone 7plus</h5>
         </div>
      </div>
      </div>{/*M5*/}



           </div>{/*m6*/}
           
           <div className="M7">
                          <div className="M3">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a1} width="240px" alt=""/>
        <div className="card-body">
          <h4 className="card-title">Rs 20,999</h4>
          <h6 className="card-title">Motorola G8 4gb 64gb </h6>
         </div>
      </div>
      </div>{/*M3*/}
      <div className="M4">
         <div className="card" style={{width: '15rem'}} >
         <img  src={a2} width="240px"  height="140px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 105,000</h5>
          <h6 className="card-title">Iphone XsMac</h6>
         </div>
      </div>
      </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a3} width="240px" height="140px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 57,500</h5>
          <h5 className="card-title">Iphone 7plus</h5>
         </div>
      </div>
      </div>{/*M5*/}



           </div>{/*m6*/}
               </div>{/*m7*/}

                        
               
           
           
           </div>

);
}
export default Flat_For_Rent;