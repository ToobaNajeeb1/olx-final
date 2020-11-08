import React from 'react';
import t1 from '../ui/t.PNG';
import j1 from '../ui/400.PNG';
import { NavLink }  from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jj from '../ui/yy.png';
import r4 from '../ui/r4.png';
import eww from '../ui/eww.png';

import { faShare, faHeart } from '@fortawesome/free-solid-svg-icons'
library.add(faShare, faHeart);




 
library.add(faCoffee,faSearch);


class Mobilepage extends React.Component {
  
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

           { /*navbar*/}
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
      
        {/* information */}
        <div className="k0">
            <div className="k1">
            {/* <img  src={j1} width="600px" height="350px" alt=""/> */}
               {/*slider start*/}
               <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img  src={j1} width="600px" height="330px" alt=""/>
          </div>
          <div className="carousel-item">
          <img  src={eww} width="600px" height="330px" alt=""/>
         
          </div>
          <div className="carousel-item">
          <img  src={r4} width="600px" height="330px" alt=""/>
         </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/*slider end*/}

            <div className="k10">
              <h1>Description</h1>
              <h5>Welcome to Muzzayan Communication.<br/>

(Note down shop Address)<br/>

Shop Address::<br/>

Saddar star city mall 1st floor shop. No. 180.<br/>

Call or WhatsApp for fast reply.<br/>

0,3,1,5,2,2,9,7,9,6,2 (Abdul basit)<br/>

If line busy leave your message.<br/>

Qty rate different.<br/>

Moto g4 play (2gb,16gb) dual sim.<br/>

5.0 inch display<br/>

Pta approved<br/>

Fingersensor<br/>

8mp back camera<br/>

5mp front camera.<br/>

Corning gorilla glass 3<br/>

Memory card support.<br/>

Delivery all over Pakistan<br/>

Other stock list::<br/>

*Sharp Aqous Zero (6gb,128gb)<br/>

*Sharp aqous R2 (4gb,64gb)<br/>

*Sharp aqous r1 (4gb,64gb)<br/>

*Moto g8 plus (4gb,64gb) dual sim<br/>

*Moto e5 plus (3gb,32gb)<br/>

*Moto g4 plus (3gb,32gb) Double sim<br/>

*Moto g6 (3gb,32gb) double sim<br/>

*Moto e5 play (2gb,16gb) finger dual sim.</h5><br/>
              </div>{/*k10*/}
            </div>
            <div className="k2">
            <div className="k3">
              <div className="kk1">
               
                <div className="hy">21,999</div>
                <div className="gg">
                <div className="share">
                <FontAwesomeIcon icon="share" width="50px" className="v1"/>
                </div>
                <div className="heart">
                <FontAwesomeIcon icon="heart" width="50px" className="v2"/>
           
                </div>
                </div>{/*gg*/}
                </div>
              {/* <h1 className="kk1">21,999</h1> */}
               <h6 className="kk2">Blessed Friday. Huawei Mediapad M5 lite.</h6>
            </div>
            <div className="k4">
              <h1 className="kk2">Seller Discription</h1>
              <a href="#!" height="100px" width="500px" className="phone1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chat with Seller&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a><br/><br/> 

            </div>
            <div className="k5">
              <div className="k6"><h3>Posted In</h3> </div>
              <div className="k7">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435521.4079449965!2d74.05419806272212!3d31.482635226232066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1604820243713!5m2!1sen!2s" width={390} height={350} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
              </div>
              </div>{/*k5*/}
              </div>{/*k2*/}
        </div>
             {/* information */}


 
</div> 
// main 

)
    }
}

export default Mobilepage;


