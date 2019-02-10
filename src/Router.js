import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Order from './components/order/Order';
import OrderComplete from './components/order/OrderComplete'
import OrderDetails from './components/order/OrderDetails';
class Router extends Component {
  render() {
    return (
      <Switch>
         <Route exact path="/" component={ Home }/>
         <Route exact path="/complete" component={ OrderComplete }/>
         <Route exact path="/details" component={ OrderDetails }/>
         <Route exact path="/order" component={ Order }/>
         <Route component={ NotFound }/>
      </Switch>
    )
  }
}
export default Router