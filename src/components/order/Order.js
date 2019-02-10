import React, { Component } from 'react'
import OrderItem from './OrderItem';
import { addToOrder, removeFromOrder, removeALLFromOrder} from '../../actions/OrderActions'
import { connect } from 'react-redux'
import './Order.css'
class Order extends Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  sortOrder(order){
    return order.sort((a,b)=> a.id - b.id)
  }
  confirmDetails = e=>{
    e.preventDefault();
    this.props.history.push('/details')
  }
  render() {
    const { order } = this.props;
    let content;
    if(order.length > 0){
      content = (
        <React.Fragment>
          {
            this.sortOrder(order).map(item=>(
              <OrderItem key={item.id} 
              item={item}
              addToOrder = {this.props.addToOrder}
              removeFromOrder = {this.props.removeFromOrder}
              removeALLFromOrder = {this.props.removeALLFromOrder}
              />
            ))
          }
          <div className="row">
      <div className="col-10 mx-auto col-sm-6 text-center">
        <h2 className="text-capitalize mt-2">Total : $ {order.reduce((total, item)=>{return total + (item.price*item.quantity)},0)}</h2>
        <button className="btn-order-confirm mt-2"
        onClick={this.confirmDetails}
        >Confirm Order</button>
      </div>
    </div>
        </React.Fragment>
        )
        
    }else{
      content = <div className="row">
      <div className="col-10 mx-auto col-sm-6 text-center">
        <h1 className="text-capitalize">No items in the order</h1>
      </div>
    </div>

    }
    return (
      <main className="order-window">
        <div className="container anv">
        { content }
      </div>
      </main>
      
    )
  }
}
const mapStateToProps = state => ({
  order: state.order
});
export default connect(mapStateToProps, {addToOrder, removeFromOrder, removeALLFromOrder })(Order)