import React, { Component } from 'react'
import './Home.css'
import Menu from '../menu/Menu';
class Home extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <header>
        <div className="container">
    <div className="row header-details d-flex align-items-center justify-content-center">
      <div className="col">
        <div className="banner text-center">
        <img src="/olivegrove/images/logo.png" alt="" className="logo-main"/>
          <h1 className="text-uppercase w-50 mx-auto">
          rustic, authentic, simple
          </h1>
          <h4>Opening Hours:</h4>
          <h4>Monday to Sunday 11am - 10.30pm</h4>
          <h4>(7 days a week)</h4>
        </div>
      </div>
    </div>
  </div>
        </header>
        <Menu/>
      </React.Fragment>
    )
  }
}
export default Home