import React from 'react'
import a1 from '../ui/201.PNG';
import a2 from '../ui/62.PNG';
import a3 from '../ui/202.PNG';
import a4 from '../ui/203.PNG';
import a5 from '../ui/204.PNG';
import a6 from '../ui/205.PNG';
import a7 from '../ui/206.PNG';
import a8 from '../ui/207.PNG';
import a9 from '../ui/208.PNG';
import a10 from '../ui/209.PNG';
import a11 from '../ui/300.PNG';
import a12 from '../ui/301.PNG';

import { NavLink }  from 'react-router-dom';
import t1 from '../ui/t.PNG';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
library.add(faCoffee,faSearch);



const Houses=()=>{
    return(
        
        <div>
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
         
        <h1>Houses</h1><br/><br/>
       <div>
        <div className="M1">
        <div className="M11">
            <h4>Houses</h4><br/>
        <h6 >filters</h6><br/>
        
        <h4 >CATEGORIES</h4><br/>
        <ul className="list-unstyled">
    <li>
      <a href="#!">All Categories</a>
    </li>
    <li>
      <a href="#!">Property for sale</a>
    </li>
   </ul>
    <br/>
        <h5 >Houses</h5><br/>
        <ul className="list-unstyled">
    <li>
      <a href="#!">Apartment & flats</a>
    </li>
    
      
  </ul>
  <h6 >LOCATIONS</h6>
        <h6 >Pakistan</h6>
        <ul className="list-unstyled">
    <li>
      <a href="#!">Punjab(9558)</a>
    </li>
    <li>
      <a href="#!">Sindh(3449)</a>
    </li>
    <li>
      <a href="#!">Balochistan(74)</a>
    </li>
    <li>
      <a href="#!">khyber pakhtunjhawa(716)</a>
    </li>
    <li>
      <a href="#!">Islamabad Capital Territory(1814)</a>
    </li>
      </ul>
    
            </div>{/*M11*/}
            
            </div>{/*M1*/}
            {/*M1*/}
                      <div className="M2">
                     <div className="M3">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a1} width="240px" height="130px" alt=""/>
        <div className="card-body">
          <h4 className="card-title">Rs 20,999</h4>
          <h6 className="card-title">Motorola G8 4gb 64gb </h6>
         </div>
      </div>
      </div>{/*M3*/}
      <div className="M4">
         <div className="card" style={{width: '15rem'}} >
         <img  src={a2} width="240px"  height="130px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 105,000</h5>
          <h6 className="card-title">Iphone XsMac</h6>
         </div>
      </div>
      </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a3} width="240px" height="130px" alt=""/>
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
         <img  src={a4} width="240px"height="130px" alt=""/>
        <div className="card-body">
          <h4 className="card-title">Rs 20,999</h4>
          <h6 className="card-title">Motorola G8 4gb 64gb </h6>
         </div>
      </div>
      </div>{/*M3*/}
      <div className="M4">
         <div className="card" style={{width: '15rem'}} >
         <img  src={a5} width="240px"  height="130px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 105,000</h5>
          <h6 className="card-title">Iphone XsMac</h6>
         </div>
      </div>
      </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a6} width="240px" height="130px" alt=""/>
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
         <img  src={a7} width="240px"   height="130px"alt=""/>
        <div className="card-body">
          <h4 className="card-title">Rs 20,999</h4>
          <h6 className="card-title">Motorola G8 4gb 64gb </h6>
         </div>
      </div>
      </div>{/*M3*/}
      <div className="M4">
         <div className="card" style={{width: '15rem'}} >
         <img  src={a8} width="240px"  height="130px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 105,000</h5>
          <h6 className="card-title">Iphone XsMac</h6>
         </div>
      </div>
      </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a9} width="240px" height="130px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 57,500</h5>
          <h5 className="card-title">Iphone 7plus</h5>
         </div>
      </div>
      </div>{/*M5*/}

               </div> {/*M7*/}
           
         <div className="M8">
         <div className="M3">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a10} width="240px"  height="130px" alt=""/>
        <div className="card-body">
          <h4 className="card-title">Rs 20,999</h4>
          <h6 className="card-title">Motorola G8 4gb 64gb </h6>
         </div>
      </div>
      </div>{/*M3*/}
      <div className="M4">
         <div className="card" style={{width: '15rem'}} >
         <img  src={a11} width="240px"  height="130px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 105,000</h5>
          <h6 className="card-title">Iphone XsMac</h6>
         </div>
      </div>
      </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <img  src={a12} width="240px" height="130px" alt=""/>
        <div className="card-body">
          <h5 className="card-title">Rs 57,500</h5>
          <h5 className="card-title">Iphone 7plus</h5>
         </div>
      </div>
      </div>{/*M5*/}

             
             </div>{/*M8*/} 
         

                          </div>{/*M2*/}
                {/* Footer */}
      <footer className="page-footer font-small indigo">
        {/* Footer Links */}
        <div className="container text-center text-md-left">
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-md-3 mx-auto">
              {/* Links */}
              <h5 className="font-weight-small text-uppercase mt-3 mb-4">POPULAR CATEGORIES</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="H1" href="Cars">Cars</a>
                </li>
                <li>
                  <a className="H1" href="/Houses">Flats For Rents</a>
                </li>
                <li>
                  <a className="H1" href="/Motorcycles">Motorcycles</a>
                </li>
                <li>
                  <a className="H1" href="/MobilePhone">Mobile Phone</a>
                </li>
              </ul>
            </div>
            {/* Grid column */}
            <hr className="clearfix w-100 d-md-none" />
            {/* Grid column */}
            <div className="col-md-3 mx-auto">
              {/* Links */}
              <h5 className="font-weight-small text-uppercase mt-3 mb-4">TRENDING SEARCHES</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="H1" href="/Motorcycles">Bikes</a>
                </li>
                <li>
                  <a className="H1" href="#!">Watches</a>
                </li>
                <li>
                  <a className="H1" href="#!">Books</a>
                </li>
                <li>
                  <a  className="H1" href="#!">Dogs</a>
                </li>
              </ul>
            </div>
            {/* Grid column */}
            <hr className="clearfix w-100 d-md-none" />
            {/* Grid column */}
            <div className="col-md-3 mx-auto">
              {/* Links */}
              <h5 className="font-weight-small text-uppercase mt-3 mb-4">ABOUT US</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="H1" href="#!">About OLX Group</a>
                </li>
                <li>
                  <a className="H1" href="#!">OLX Blog</a>
                </li>
                <li>
                  <a className="H1" href="#!">Contact Us</a>
                </li>
                <li>
                  <a  className="H1"href="#!">OLX For Buisness</a>
                </li>
              </ul>
            </div>
            {/* Grid column */}
            <hr className="clearfix w-100 d-md-none" />
            {/* Grid column */}
            <div className="col-md-3 mx-auto">
              {/* Links */}
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">OLX</h5>
              <ul className="list-unstyled">
                <li>
                  <a  className="H1"href="#!">Help</a>
                </li>
                <li>
                  <a className="H1" href="#!">Sitemap</a>
                </li>
                <li>
                  <a className="H1" href="#!">Legal & Private</a>
                </li>
                          </ul>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}
        </footer>
      {/* Footer */}
   

             <div className="footerEnd">
               <h6 className="n1">Other Countries India - South Africa - Indonesia</h6>
               <h6 className="n2">Free Classifieds in Pakistan. © 2006-2020 OLX</h6>
             </div>


           
           
           </div>
           

);
}


export default Houses;