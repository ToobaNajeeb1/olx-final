// import React from 'react';
// import {link} from "react-router-dom";
// function Header(){
//     return(
//     <div className="Header fixed flex">
//         <div className="logo">
//         <img src='../ui/Saylani'/>
//         </div>
//         <div className="location rel flex aic ">
//            <div className="icon-search ico s24 cfff"/>
//                <input className="label s15 font" placeholder ="location" value="pakistan"/>
//                {/* <button className="icon-chevron-down arrow s24"/> */}
//                <i className="fas fa-chevron-down"></i>
//         </div>
//      <div className="search flex">
//          <input type="text" placeholder="Find cars,Mobile and etc" className="query s15 font"/>
//          <button className="icon-search go s24"/>

//         </div>
//     <div  className="action-flex aic">
//         <button>Login</button>
//          {/* <link to="/account/signin" className="fontb s15">Sign in</link>  */}
//         <button className="sell">
//             <div className="icon-plus"/>
//                 <h2 className="s15 font">Sell</h2>

//         </button>
//     </div>
//     </div>
    

//     );
// }

// export default Header;


//start


// import React from 'react';

// class Header extends React.Component{
//  render(){
//     return(
//       <div className="a1"></div>

//     );
// }
// }


import React from 'react';


import Logo from '../ui/1.PNG';
import f1 from '../ui/ty.PNG';
import t1 from '../ui/t.PNG';
import a1 from '../ui/400.PNG';
import a2 from '../ui/401.PNG';
import a3 from '../ui/402.PNG';
import a4 from '../ui/402.PNG';
import a5 from '../ui/403.PNG';
import b1 from '../ui/404.PNG';
import b2 from '../ui/405.PNG';
import b3 from '../ui/406.PNG';
import b4 from '../ui/407.PNG';
import b5 from '../ui/408.PNG';
import b6 from '../ui/409.PNG';
import b7 from '../ui/500.PNG';
import b8 from '../ui/501.PNG';
import b9 from '../ui/502.PNG';
import b10 from '../ui/503.PNG';
import b11 from '../ui/504.PNG';
import b12 from '../ui/505.PNG';
import b13 from '../ui/600.PNG';
import b14 from '../ui/606.PNG';
import b15 from '../ui/607.PNG';
import b16 from '../ui/608.PNG';
import b17 from '../ui/602.PNG';
import b18 from '../ui/603.PNG';
import b19 from '../ui/604.PNG';
import b20 from '../ui/605.PNG';
import { NavLink }  from 'react-router-dom';
import ReactDOM from 'react-dom'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
library.add(faCoffee,faSearch);


class Header extends React.Component {
  
    render(){
        return(
          <div className="first">
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
            
 
          
           
           { /*navbar*/}
           <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
               
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ALL CATEGORIES
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Vehicles</a>
          <a className="dropdown-item" href="#">Tractor & Trailer</a>
          <a className="dropdown-item" href="#">Boats</a>
          <a className="dropdown-item" href="#">Other Vehicles</a>
          <a className="dropdown-item" href="#">Rickshew</a>
          <a className="dropdown-item" href="#">Buses Vans</a>
          <a className="dropdown-item" href="#">Spare Parts</a>
          <a className="dropdown-item" href="#">Cars Accessories</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      
           {/* <a href="/Categories" className="tty"> ALL CATEGORIES
        </a>
        */}
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
           <img  className="z1" src={Logo} width="1050px" alt=""/>
           <div className="T2">
             <h5 className="q1">More on Tablets</h5>
                     <div className="M3">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage">
         <img  src={a1} width="240px" height="120px" alt=""/>
         </a> 
      
        <div className="card-body">
        <a href="Mobilepage" className="Mo">
          <h4 className="card-title">Rs 21,999</h4>
          <h6 className="card-title">Blessed Friday. Huawei Mediapad M5 lite.</h6>
          </a>
         </div>
      </div>
      
   
      </div>
      {/*M3*/}
      <div className="M4">
      <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage">
         <img  src={a2} width="240px"  height="145px" alt=""/>
         </a> 
      
        <div className="card-body">
        <a href="Mobilepage" className="Mo">
        <h5 className="card-title">Rs 250,000</h5>
          <h6 className="card-title">Mac book bro</h6>  </a>
         </div>
      </div>
       </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage">
         <img  src={a4} width="240px" height="140px" alt=""/></a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo"> 
        <h5 className="card-title">Rs 11,999</h5>
          <h5 className="card-title">ZTE trek HD2 tablet</h5>
          </a>
         </div>
      </div>
      </div>{/*M5*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" > <img  src={a5} width="240px" height="140px" alt=""/></a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo"> 
          <h5 className="card-title">Rs 15,999</h5>
          <h5 className="card-title">SAMSUNG GALAXY </h5>
          </a>
         </div>
      </div>
      </div>{/*M5*/} </div>{/*T2*/}
           
       {/*SEOND PICTURE DIV*/}
       <div className="T2">
       <h5 className="q1">Fresh recommendations</h5>
                     <div className="M3">
                       
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" className="Mo"> 
         <img  src={b1} width="240px" height="135px" alt=""/ >
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo"> 
          <h4 className="card-title">Rs 75,000</h4>
          <h6 className="card-title">3 Bds - 4 Ba - 1 Kanal
</h6></a>
         </div>
      </div>
      </div>{/*M3*/}
      <div className="M4">
         <div className="card" style={{width: '15rem'}} >
         <a href="Mobilepage" > 
         <img  src={b2} width="240px"  height="125px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo"> 
          <h5 className="card-title">Rs 4,600,000
</h5>
          <h6 className="card-title">1 Bds - 1 Ba - 530 Square Feet
</h6></a>
         </div>
      </div>
      </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" > 
         <img  src={b3} width="240px" height="116px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" > 
          <h5 className="card-title">Rs 34,000</h5>
          <h5 className="card-title">1 Bds - 1 Ba - 550 Square Feet</h5>
          </a>
         </div>
      </div>
      </div>{/*M5*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" > 
         <img  src={b4} width="240px" height="140px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo"> 
          <h5 className="card-title">Rs 9,000,000</h5>
          <h5 className="card-title">4 Bds - 4 Ba - 5 Marla</h5>
          </a>
         </div>
      </div>
      </div>{/*M5*/}

                          </div>{/*T2*/}
                          {/*THIRD START PICTURE DIV*/}
                          <div className="q5">
                     <div className="M3">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" className="Mo" >
         <img  src={b5} width="240px" height="135" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h4 className="card-title">3,700,000</h4>
          <h6 className="card-title"> Shops for sale at main kalma chowk
</h6></a>
         </div>
      </div>
      </div>{/*M3*/}
      <div className="M4">
         <div className="card" style={{width: '15rem'}} >
         <a href="Mobilepage" className="Mo" >
         <img  src={b6} width="240px"  height="135px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h5 className="card-title">5,999</h5>
          <h6 className="card-title">Original mi Band 5 Global version</h6>
          </a>
         </div>
      </div>
      </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" className="Mo" >
         <img  src={b7} width="240px" height="125px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h5 className="card-title">56,00,000</h5>
          <h5 className="card-title">3 Bds - 3 Ba - 83 Square Yards</h5>
          </a>
         </div>
      </div>
      </div>{/*M5*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" className="Mo" >
         <img  src={b8} width="240px" height="125px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h5 className="card-title">Rs 900,000 - Flexible</h5>
          <h5 className="card-title">Kia Sportage On Easy Monthly Installment.</h5>
          </a>
         </div>
      </div>
      </div>{/*M5*/}
                          </div>{/*T2*/}
                          {/*THIRD ENDPICTURE DIV*/}
                          {/*FORTH DIV PICTURE START*/}
                          <div className="q6">
                     <div className="M3">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" className="Mo" >
         <img  src={b9} width="240px" height="135" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h4 className="card-title">14,000</h4>
          <h6 className="card-title">Redmi 9a 2/32</h6>
          </a>
         </div>
      </div>
      </div>{/*M3*/}
      <div className="M4">
         <div className="card" style={{width: '15rem'}} >
         <a href="Mobilepage" className="Mo" >
         <img  src={b10} width="230px"  height="140px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h5 className="card-title">Rs 65,000</h5>
          <h6 className="card-title">Deep fryer badl tenk</h6>
          </a>
         </div>
      </div>
      </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" className="Mo" >
         <img  src={b11} width="240px" height="130px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h5 className="card-title">Rs 26,000</h5>
          <h5 className="card-title">2006 model 70cc bike</h5>
          </a>
         </div>
      </div>
      </div>{/*M5*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" className="Mo" >
         <img  src={b12} width="240px" height="120px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h5 className="card-title">Rs 8,00,000</h5>
          <h5 className="card-title">125sq yard plot</h5>
          </a>
         </div>
      </div>
      </div>{/*M5*/}
                          </div>{/*T2*/}
                           {/*FORTH DIV PICTURE END*/}
                             {/*FIFTH DIV PICTURE START*/}
                             <div className="q7">
                     <div className="M3">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" className="Mo" >
         <img  src={b13} width="240px" height="140px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h4 className="card-title">Rs 20,999</h4>
          <h6 className="card-title">Motorola G8 4gb 64gb </h6>
          </a>
         </div>
      </div>
      </div>{/*M3*/}
      <div className="M4">
         <div className="card" style={{width: '15rem'}} >
         <a href="Mobilepage" className="Mo" >
         <img  src={b14} width="240px"  height="130px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h5 className="card-title">Rs 899</h5>
          <h6 className="card-title">Smart band M4/M3/M5/D13/D18</h6>
          </a>
         </div>
      </div>
      </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" className="Mo" >
         <img  src={b15} width="230px" height="120px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h5 className="card-title">Rs 2,250,000</h5>
          <h5 className="card-title">Hostel Business Partnership</h5>
          </a>
         </div>
      </div>
      </div>{/*M5*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" className="Mo" >
         <img  src={b16} width="240px" height="140px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h5 className="card-title">Rs 9,499</h5>
          <h5 className="card-title">Leyard SMD Screens</h5>
          </a>
         </div>
      </div>
      </div>{/*M5*/}
                          </div>{/*T2*/}
                           {/*FIFTH DIV PICTURE END*/}
                             {/*SIXTH DIV PICTURE START*/}
                             <div className="q8">
                     <div className="M3">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" className="Mo" >
         <img  src={b17} width="240px" height="100px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h4 className="card-title">Rs 120,000 - 7 Years</h4>
          <h6 className="card-title">Daihatsu Coure 2009 In</h6>
          </a>
         </div>
      </div>
      </div>{/*M3*/}
      <div className="M4">
         <div className="card" style={{width: '15rem'}} >
         <a href="Mobilepage" className="Mo" >
         <img  src={b18} width="240px"  height="130px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h5 className="card-title">Rs 16,000</h5>
          <h6 className="card-title">SHARP AQUOS R2 706SH</h6>
          </a>
         </div>
      </div>
      </div>{/*M4*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" className="Mo" >
         <img  src={b19} width="240px" height="130px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h5 className="card-title">Rs 380,000 - 7 Years</h5>
          <h5 className="card-title">BUY HONDA CITY 1.3</h5>
          </a>
         </div>
      </div>
      </div>{/*M5*/}
      <div className="M5">
         <div className="card" style={{width: '15rem'}}>
         <a href="Mobilepage" className="Mo" >
         <img  src={b20} width="240px" height="110px" alt=""/>
         </a>
        <div className="card-body">
        <a href="Mobilepage" className="Mo" >
          <h5 className="card-title">Rs 85,000</h5>
          <h5 className="card-title">Boulevard 4 Star Hotel Rooms</h5>
          </a>
         </div>
      </div>
      </div>{/*M5*/}
                          </div>{/*T2*/}
                           {/*SIXTH DIV PICTURE END*/}
            
            
            
             <img  src={f1} width="1050px" alt=""/>
             
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
          )
    }
}
export default Header;






