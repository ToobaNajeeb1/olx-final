// import React from 'react';
// import './Props.css';
// import './App.css';
// import { BrowserRouter, Route, Link} from "react-router-dom"
// import HomePage from "./comps/Home";
// import Header from "./comps/Header";

// import HeaderPage from './comps/Header';

// const { render } = require("@testing-library/react");
// const { Component } = require("react");


// function App(){

//   return(
//     // <BrowserRouter>
//     <Header/>

    
//     //     {/* <Route path="/" component={HomePage}/>
//     // </BrowserRouter> */}
//   );
// }

// export default App;


//website start

import React from "react"
import MobilePhone from './comps/MobilePhone';
import Cars from './comps/Cars';
import Motorcycles from './comps/Motorcycles';
import Houses from './comps/Houses';
import TVVideoAudio from './comps/TVVideoAudio';
import Tablets from './comps/Tablets';
import Header from './comps/Header';
import login from './comps/Login';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Drop from './comps/Drop';
import Mobilepage from './comps/Mobilepage';
import Flat_For_Rent from './comps/Flat_For_Rent';
import Categories from './comps/Categories';



import './App.css';
import{ BrowserRouter as Router, Route,} from "react-router-dom";


const App =()=>{
     return(
     <div>

         
    <Router>
         <Route  exact path="/MobilePhone" component={MobilePhone}/>
         <Route  exact path="/Cars" component={Cars}/>
         <Route  exact path="/Motorcycles" component={Motorcycles}/>
         <Route  exact path="/Houses" component={Houses}/>
                  <Route  exact path="/TVVideoAudio" component={TVVideoAudio}/>
                  <Route  exact path="/Tablets" component={Tablets}/>
                  <Route  exact path="/Login" component={login}/>
                  <Route  exact path="/Drop" component={Drop}/>
                  <Route  exact path="/Mobilepage" component={Mobilepage}/>
                  <Route  exact path="/Flat_For_Rent" component={Flat_For_Rent}/>
                  <Route  exact path="/Categories" component={Categories}/>
                 
                
                 
                  
         <Route exact path="/" component={Header}/>

    </Router>
    </div>
     )
};
export default App;







