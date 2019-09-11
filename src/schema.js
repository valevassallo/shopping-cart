const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Order {
    id: Int!
    code: String!
    cart: Cart
  }
  type Cart {
    id: Int!
    orderId: Int
    order: Order
    products: [Product]
  }
  type Product {
    id: Int!
    name: String!
    price: Float!
    quantity: Int
    img: String
    cartId: Int
    cart: Cart
  }
  type Query {
    cart(id: Int!): Cart!
    product(id: Int, name: String): Product
    order(id: Int!): Order!
  }
  type Mutation {
    updateProduct(id: Int!, quantity: Int, cartId: Int): Product
    createCart: Cart
    updateCart(id: Int, orderId: Int): Cart
    createOrder(code: String): Order
  }
`;

module.exports = typeDefs;
