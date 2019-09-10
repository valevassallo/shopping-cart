const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Order {
    id: ID!
    code: String!
    cart: Cart
  }
  type Cart {
    id: ID!
    orderId: ID
    order: Order
    products: [Product]
  }
  type Product {
    id: ID!
    name: String!
    price: Float!
    quantity: Int
    img: String
    cartId: ID
    cart: Cart
  }
  type Query {
    cart(id: ID!): Cart!
    product(id: ID, name: String): Product
    order(id: ID!): Order!
  }
  type Mutation {
    updateProduct(id: ID!, quantity: Int, cartId: ID): Product
    createCart: Cart
    updateCart(id: ID, orderId: ID): Cart
    createOrder(code: String): Order
  }
`;

module.exports = typeDefs;
