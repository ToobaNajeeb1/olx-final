import React from 'react';
import jj from '../ui/yy.png';
import qw from '../ui/qw.PNG';
import ew from '../ui/ew.PNG';
class login extends React.Component {
  
    render(){
        return( 
            <div className="in">
                <div className="po">
                {/* <div className="giter">
            <img  src={jj} width="200px" height="130px" alt=""/>
            </div> */}
               {/*slider start*/}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img  src={jj} width="200px" height="130px" alt=""/>
          <h6 className="ew">Help make OLX safer place to buy and sell</h6>
          </div>
          <div className="carousel-item">
          <img  src={qw} width="200px" height="130px" alt=""/>
          <h6 className="ew">Contact and Closer deals faster</h6>
          </div>
          <div className="carousel-item">
          <img  src={ew} width="200px" height="130px" alt=""/>
          <h6 className="ew">save all your favourite items in one place</h6>
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
            <div className="pu">
            <a href="#!" height="100px" width="500px" className="phone">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continoue With Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a><br/><br/> 
            <a href="#!" height="100px" width="500px" onClick="facebook_login()" className="facebook">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continoue With Facebook&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a> <br/><br/>
            <a href="#!" height="100px" width="500px" className="google">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continoue With Google&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a><br/><br/> 
            <a href="#!" height="100px" width="500px" className="email">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Continoue With email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a> <br/><br/>
            <h6 className="tt">We won't share your personal details with anyone</h6>
            <div className="er">If you continue, you are accepting OLX <br/>Terms and Conditions and Privacy Policy</div>
            </div>
          
                </div>{/*po*/}
            </div>
        )
    }
}
export default login; 