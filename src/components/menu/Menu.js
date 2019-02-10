import React, { Component } from 'react'
import { data } from '../../data/menuData';
import MenuItem from './MenuItem'
import { LoadMenu } from '../../actions/MenuActions'
import { addToOrder, removeFromOrder} from '../../actions/OrderActions'
import { connect } from 'react-redux'
import './Menu.css'
class Menu extends Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
   
    return (
     <main>
       <section className="meals catergory" id="meals">
       <div className="container"> 
       <div className="row">
      <div className="col-10 mx-auto col-sm-6 text-center mb-4">
        <h1 className="text-capitalize">Meals</h1>
      </div>
    </div>
        <div className="row">
        {
          data.filter(food => food.type === 'meal').map( item => (
            <MenuItem 
            key={ item.id } 
            item={ item } 
            addToOrder = {this.props.addToOrder}
            removeFromOrder = {this.props.removeFromOrder}
            orderItem = {this.props.order.filter(orderItem => orderItem.id === item.id)[0]}
            />
          ))
        }
        </div>
      </div>
       </section>
       <section className="dessert catergory" id="dessert">
       <div className="container "> 
       <div className="row">
      <div className="col-10 mx-auto col-sm-6 text-center mb-4">
        <h1 className="text-capitalize">Desserts</h1>
      </div>
    </div>
        <div className="row">
        {
          data.filter(food => food.type === 'dessert').map( item => (
            <MenuItem 
            key={ item.id } 
            item={ item } 
            addToOrder = {this.props.addToOrder}
            removeFromOrder = {this.props.removeFromOrder}
            orderItem = {this.props.order.filter(orderItem => orderItem.id === item.id)[0]}
            />
          ))
        }
        </div>
      </div>
       </section>
       <section className="smoothie catergory" id="smoothie">
       <div className="container"> 
       <div className="row">
      <div className="col-10 mx-auto col-sm-6 text-center mb-4">
        <h1 className="text-capitalize">Smoothies</h1>
      </div>
    </div>
        <div className="row">
        {
          data.filter(food => food.type === 'smoothie').map( item => (
            <MenuItem 
            key={ item.id } 
            item={ item } 
            addToOrder = {this.props.addToOrder}
            removeFromOrder = {this.props.removeFromOrder}
            orderItem = {this.props.order.filter(orderItem => orderItem.id === item.id)[0]}
            />
          ))
        }
        </div>
      </div>
       </section>
       <section className="drink catergory" id="drink">
       <div className="container"> 
       <div className="row">
      <div className="col-10 mx-auto col-sm-6 text-center mb-4">
        <h1 className="text-capitalize">Drinks</h1>
      </div>
    </div>
        <div className="row">
        {
          data.filter(food => food.type === 'drink').map( item => (
            <MenuItem 
            key={ item.id } 
            item={ item } 
            addToOrder = {this.props.addToOrder}
            removeFromOrder = {this.props.removeFromOrder}
            orderItem = {this.props.order.filter(orderItem => orderItem.id === item.id)[0]}
            />
          ))
        }
        </div>
      </div>
       </section>
       
     </main>
    )
  }
}
const mapStateToProps = state => ({
  menu: state.menu,
  order: state.order,
});

export default connect(mapStateToProps, { LoadMenu, addToOrder, removeFromOrder})(Menu)