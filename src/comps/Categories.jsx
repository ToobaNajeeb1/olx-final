
import React from 'react';
import { NavLink }  from 'react-router-dom';
import t1 from '../ui/t.PNG';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
library.add(faCoffee,faSearch);

class Categories extends React.Component {
  
    render(){
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
            </div>
        )
    }
}
    export default Categories;

