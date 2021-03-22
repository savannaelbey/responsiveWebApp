
import React, { Component } from 'react';
import Client from 'shopify-buy';

// Create a context object
const ShopContext = React.createContext();
// Initializing a client to return content
const client = Client.buildClient({
  domain: process.env.REACT_APP_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_STORE_FRONT_ACCESS_TOKEN
});

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
  }

  componentDidMount() {
    // if local storage has a checkout Id saved, fetch thec checkout, else create new checkout
    if (localStorage.checkout) {
      this.fetchCheckout(localStorage.checkout);
     } else {
      this.createCheckout();
     }
  }

  createCheckout = async () => {
    client.checkout.create().then((checkout) => {
      localStorage.setItem("checkout", checkout.id);
      this.setState({ checkout: checkout });
    });
  }

  fetchCheckout = async (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      this.setState({ checkout: checkout });
    });
  }

  fetchAllProducts = async () => {
    client.product.fetchAll().then((products) => { this.setState({ products: products }) });
  }

  fetchProductWithId = async (id) => {
    client.product.fetch(id).then((product) => { this.setState({ product: product }) });
  }

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [{
      variantId,
      quantity: parseInt(quantity, 10)
    }]
    client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd).then((checkout) => { this.setState({ checkout: checkout }) });
  }

  closeCart = () => { this.setState( {isCartOpen: false} )}

  openCart = () => { this.setState( {isCartOpen: true} )}

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithId: this.fetchProductWithId,
          addItemToCheckout: this.addItemToCheckout,
          closeCart: this.closeCart,
          openCart: this.openCart,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

//const ShopConsumer = ShopContext.Consumer;
export { ShopContext};
export default ShopProvider;
