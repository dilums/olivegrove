import React, { Component } from 'react'
import './MenuItem.css'
export default class MenuItem extends Component {
  render() {
    const { name, image, description, price } = this.props.item;
    const { orderItem } = this.props;
    return (
     <div className="col-12 mx-auto col-lg-6 my-4">
      <div className="menu-item">
      <div className="d-flex justify-content-between flex-wrap text-slanted">
      <span className="text-capitalize"><strong>{ name }</strong></span>
      <span className="c-red"><strong>$ { price }</strong></span>
      </div>
      
      <div className="row mt-1">
        <div className="col-12 col-md-6">
        <img src={`/olivegrove/images/${image}`} alt="" className="img-fluid rounded"/>
        </div>
        <div className="col-12 col-md-6">
        <p>{description }</p>
       
      {
        (orderItem && (
          <div className="d-flex justify-content-around flex-wrap text-slanted mt-2">
          <button className="btn"
          onClick={()=>{this.props.removeFromOrder(orderItem)}}
          ><i className="fas fa-minus menu-icon-round"></i></button>
          <span className="align-self-center">{ orderItem.quantity }</span>
          <button className="btn"
          onClick={()=>{this.props.addToOrder(this.props.item)}}
          ><i className="fas fa-plus menu-icon-round"></i></button>
      </div>
          )) 
        || (
          <button 
          className="btn btn-warning btn-block mt-2"
          onClick={()=>{this.props.addToOrder(this.props.item)}}
          >Order</button>
          )
      }
      </div>
      </div>
     
      </div> 
      </div>
    )
  }
}
