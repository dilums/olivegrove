import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="container">
      <div className="row">
      <div className="col-12 col-md-4 text-center d-flex justify-content-center my-3">
        <div className="social-icon"><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></div>
        <div className="social-icon"><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></div>
        <div className="social-icon"><a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a></div>
        <div className="social-icon"><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></div>
      </div>
    <div className="col-12 col-md-4 text-center my-3">
    <img src="/olivegrove/images/logo.png" alt="" className="logo-footer"/>
    </div>
      <div className="col-12 col-md-4 text-center my-3">
        <h6>Copyright © 2019 Dilum Sanjaya.</h6>
        <h6>Made with <span className="heart"><i className="fas fa-heart"></i></span></h6>
      </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer

