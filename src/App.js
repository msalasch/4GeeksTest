import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from './components/Cart'
import Products from './components/Products'
import Error from './components/Error'
import Navbar from './components/Navbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart_products: [],
      total:0
    }
    this.addedOnCard = this.addedOnCard.bind(this)

  }
  addedOnCard(product) {
    this.setState({
      total: this.state.total+1
    })
    this.state.cart_products.push(product)
  }
  render() {

    return (
      <div>
        <Router>
          <div>
            <Navbar productsOnCart={this.state.total} />
            <Switch>
              <Route
                path='/'
                render={() => <Products onAdd={this.addedOnCard} />}
                exact
              />
              <Route
                path='/cart'
                render={() => <Cart products={this.state.cart_products} />}
              />
              <Route component={Error} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
