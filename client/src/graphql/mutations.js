import { gql } from "apollo-boost";

const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: ID!, $quantity: Int, $cartId: ID) {
    updateProduct(quantity: $quantity, cartId: $cartId) {
      id
      name
      quantity
      cartId
    }
  }
`;

const CREATE_CART = gql`
  mutation CreateCart() {
    createCart() {
      id
    }
  }
`;

const CREATE_ORDER = gql`
  mutation CreateOrder($code: String!) {
    createOrder(code: $code) {
      id
      code
    }
  }
`;

const UPDATE_CART = gql`
  mutation UpdateCart($id: ID!, $orderId: ID!) {
    updateCart(id: $id, orderId: $orderId) {
      id
      orderId
    }
  }
`;

export { UPDATE_PRODUCT, CREATE_CART, CREATE_ORDER, UPDATE_CART }