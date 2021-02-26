import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();
// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'goldenshoe.myshopify.com',
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

  createCheckout = async () => {
    client.checkout.create().then((checkout) => {console.log(checkout)});
  }

  render() {
    return (
      <ShopContext.Provider value={{...this.state}}>
        {this.props.children}
      </ShopContext.Provider>
    )
  }
}

const ShopConsumer = ShopContext.Consumer;
export {ShopConsumer, ShopContext}
export default ShopProvider
