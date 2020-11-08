
import React from 'react';
import { NavLink }  from 'react-router-dom';
import a1 from '../ui/901.PNG';
import a2 from '../ui/902.PNG';
import a3 from '../ui/903.PNG';
import a4 from '../ui/904.PNG';
import a5 from '../ui/905.PNG';
import a6 from '../ui/906.PNG';
import a7 from '../ui/907.PNG';
import a8 from '../ui/908.PNG';
import a9 from '../ui/909.PNG';

import t1 from '../ui/t.PNG';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
library.add(faCoffee,faSearch);



const Cars=()=>{
    return(
        
              <div className="inputdiv">
      
           <div className="inputdiv">
          <div className="img">
            <img  src={t1} width="70px" height="50px" alt=""/>
            </div>{/*img*/}
            <div className="A3">
            <select className="grapes">
            <option value="grapes"  width="100px" className="grapes">Pakistan</option>
            <a class="navbar-brand" href="#">Use current location</a>
            
             <a class="navbar-brand" href="#">Location blocked.Check browser/phone setting</a>
             <option value="orange">Sindh</option>

            <option value="purple">Pakistan</option>
            <option value="purple">Islamabad Capital Territory</option>
        </select>
       
               </div>{/*A3*/}
                <div className="mobile">
            <label className="search-label">
              <input type="text" value="" id="search-input" placeholder="Find Cars,Mobile and etc" className="rr"
              />
            </label>
           
             </div>
             
             <FontAwesomeIcon icon="search" width="100px" className="vv"/>
           
              
              

             
            

              
              <div className="login">
              <NavLink to="/Login" className="l9">login</NavLink>
              </div>
           <div className="sell">
           <NavLink to="/Login"  width="100px"className="lo">&nbsp;&nbsp;+SELL&nbsp;&nbsp;</NavLink>
              </div>
           </div>{/*sell*/}

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
         
            <h3 className="cars">Cars in Karachi</h3>
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
      <a className="H1" href="#!">Vehicles</a>
    </li>
   </ul>
   <hr className="line"/>
    <br/>
        <h5 >Cars(6260)</h5><br/>
        <ul className="list-unstyled">
    <li>
      <a className="H1" href="#!">Car on  Installment(28403)</a>
    </li>
    <li>
      <a  className="N2"href="#!">cars Accessories(1763082)</a>
    </li>
    <li>
      <a  className="N2"href="#!">Spare Parts(1763082)</a>
    </li>
    <li>
      <a  className="N2"href="#!">Buses,vans&trucks(1763082)</a>
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
         <img  src={a1} width="210px" height="130px" alt=""/>
        <div className="card-body">
          <h4 className="card-title">Rs 2,125,000</h4>
          <h6 className="card-title">Toyota corolla </h6>
         </div>
      </div>
      </div>{/*M3*/}
      <div className="M4">
         <div className="card" style={{width: '15rem'}} >
         <img  src={a2} width="210px"  height="130px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 1,040,000</h5>
          <h6 className="card-title">Suzuku cultas</h6>
         </div>
      </div>
      </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a3} width="210px" height="130px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 3,100,000</h5>
          <h5 className="card-title">Honda Vezel</h5>
         </div>
      </div>
      </div>{/*M5*/}



      
    
    
                          </div>{/*M2*/}
      


                          <div className="M6">
                          <div className="M3">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a4} width="210px" height="130px" alt=""/>
        <div className="card-body">
          <h4 className="card-title">Rs 975,000</h4>
          <h6 className="card-title">Mitsubishi Lancer</h6>
         </div>
      </div>
      </div>{/*M3*/}
      <div className="M4">
         <div className="card" style={{width: '15rem'}} >
         <img  src={a5} width="210px"  height="130px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 1,885,000</h5>
          <h6 className="card-title">Corolla AXIO X 1.5 </h6>
         </div>
      </div>
      </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a6} width="210px" height="130px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 1,030,000</h5>
          <h5 className="card-title">Suzuki cultus VXR</h5>
         </div>
      </div>
      </div>{/*M5*/}



           </div>{/*m6*/}
           
           <div className="M7">
                          <div className="M3">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a7} width="210px" height="130px" alt=""/>
        <div className="card-body">
          <h4 className="card-title">Rs 600,000</h4>
          <h6 className="card-title">City 2002 Auto</h6>
         </div>
      </div>
      </div>{/*M3*/}
      <div className="M4">
         <div className="card" style={{width: '15rem'}} >
         <img  src={a8} width="210px"  height="130px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 895,000</h5>
          <h6 className="card-title">SUZUKI CULTUS</h6>
         </div>
      </div>
      </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a9} width="210px" height="130px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 2,550,000
</h5>
          <h5 className="card-title">Honda City
</h5>
         </div>
      </div>
      </div>{/*M5*/}



           </div>{/*m6*/}
               </div>{/*m7*/}

                  
               
           
           
           </div>
           

);
}
export default Cars;