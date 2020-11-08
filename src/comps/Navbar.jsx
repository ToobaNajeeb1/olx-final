import React from 'react'
const Navbar=()=>{
    return(
        <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">ALL CATEGORIES</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Mobile Phone <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link active" href="#">Cars</a>
            <a className="nav-item nav-link active" href="#">Motorcycles</a>
            <a className="nav-item nav-link active" href="#">Houses</a>
            <a className="nav-item nav-link active" href="#">TV_Video-Audio</a>
            <a className="nav-item nav-link active" href="#">Tablets</a>
            <a className="nav-item nav-link active" href="#">Land Plots</a>
          </div>
        </div>
      </nav>


        </div>
    )
}
export default Navbar;