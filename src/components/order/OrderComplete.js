import React, { Component } from 'react'
import './OrderComplete.css'
export default class OrderComplete extends Component {
  render() {
    return (
      <main className="complete-window">
        <div className="container">
          <div className="row complete-message d-flex align-items-center justify-content-center">
          <div className="col">
          <div className="text-center">
          <h2 className="text-capitalize ">
          Your order will arrive shortly
          </h2>
          <h2 className="text-capitalize ">
          Thanks
          </h2>
          <h2 className="text-capitalize ">
          &
          </h2>
          <h1 className="text-capitalize bon-appetit">
          Bon Appétit
          </h1>
          </div>
          </div>
          </div>
        </div>
      </main>
    )
  }
}
