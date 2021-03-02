import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'graphql.myshopify.com',
  storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38'
});

console.log(client);

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
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout", checkout.id);
    await this.setState({ checkout: checkout });
  }

  fetchCheckout = async (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      this.setState({ checkout: checkout });
    });
  }

  // addDiscount = async (checkoutId, discountCode) => {
  //   client.checkout.addDiscount(checkoutId, discountCode).then(checkout => { });
  // }

  fetchAllProducts = async () => {
    client.product.fetchAll().then((products) => { this.setState({ products: products }) });
    // const products = await client.product.fetchAll();
    // this.setState({ products: products });
  }

  fetchProductWithId = async (id) => {
    client.product.fetch(id).then((product) => { this.setState({ product: product }) });
     // const product = await client.product.fetch(id);
     // this.setState({ product: product });

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
          closeCart: this.closeCart,
          openCart: this.openCart,
          addItemToCheckout: this.addItemToCheckout
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;
export {ShopConsumer, ShopContext};
export default ShopProvider;
