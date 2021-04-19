import 'bootstrap/dist/css/bootstrap.min.css'
const navbar = () => {
  return (
    <div >
                <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
              <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars" style={{color:"white"}} ></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/myPortfolio#home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/myPortfolio#about">About me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/myPortfolio#services">services</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/myPortfolio#skills">skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/myPortfolio#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contacts">Contact</a>
                </li>
              </ul>
            </div>
            </div>
          </nav>
    </div>
  )
}

export default navbar
