import { gql } from "apollo-boost";

const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: Int!, $quantity: Int, $cartId: Int) {
    updateProduct(id: $id, quantity: $quantity, cartId: $cartId) {
      id
      name
      quantity
      cartId
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
  mutation UpdateCart($id: ID!, $orderId: Int) {
    updateCart(id: $id, orderId: $orderId) {
      id
      orderId
    }
  }
`;

export { UPDATE_PRODUCT, CREATE_ORDER, UPDATE_CART };
