import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();
// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'graphql.myshopify.com',
  storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38'
});

class ShopProvider extends Component {

  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    test: 'test'
  }

  componentDidMount() {
    this.createCheckout();
  }

  createCheckout = async () => {
    client.checkout.create().then((checkout) => { this.setState({ checkout: checkout }) });
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
      <ShopContext.Provider value={{
        ...this.state,
        fetchAllProducts: this.fetchAllProducts,
        fetchProductWithId: this.fetchProductWithId,
        closeCart: this.closeCart,
        openCart: this.openCart,
        addItemToCheckout: this.addItemToCheckout
      }}>
        {this.props.children}
      </ShopContext.Provider>
    )
  }
}

const ShopConsumer = ShopContext.Consumer;
export {ShopConsumer, ShopContext}
export default ShopProvider
