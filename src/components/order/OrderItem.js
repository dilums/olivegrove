import React, { Component } from 'react'
import './OrderItem.css'
export default class OrderItem extends Component {
  render() {
    const { name, image, price , quantity } = this.props.item;
    return (
      <div className="row cart-item my-2">
          <div className="col-12 col-md-6 my-3">
          <div className="row">
          <div className="col-6">
          <img src={`/olivegrove/images/${image}`} alt="" className="img-fluid"/>
          </div>
          <div className="col-6">
          <h5>{name}</h5>
          <div className="d-flex justify-content-between mt-4">
          <button 
          className="icon-btn"
          onClick={()=>{this.props.removeFromOrder(this.props.item)}}
          ><i className="fas fa-minus icon-round"></i></button>
          <span>{price}x{quantity}</span>
          <button 
          className="icon-btn"
          onClick={()=>{this.props.addToOrder(this.props.item)}}
          ><i className="fas fa-plus icon-round"></i></button>
          
          </div>
          </div>
          </div>
          
          <div>
            
          </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-between my-3">
          
            <span>$ {price * quantity}</span>
            <button 
            className="icon-btn"
            onClick={()=>{this.props.removeALLFromOrder(this.props.item)}}
            ><i className="far fa-trash-alt icon-delete"></i></button>
          </div>
      </div>
    )
  }
}
