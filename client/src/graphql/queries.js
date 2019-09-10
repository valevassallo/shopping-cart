import { gql } from "apollo-boost";

const FIND_PRODUCT = gql`
  query product($name: String!) {
    product(name: $name) {
      id
      name
      price
      quantity
      img
    }
  }
`;

const CART_QUERY = gql`
  query cart($id: ID) {
    cart(id: $id) {
      id
    }
  }
`;

const ORDER_QUERY = gql`
  query order($id: ID) {
    order(id: $id) {
      id
    }
  }
`;

export { FIND_PRODUCT, CART_QUERY, ORDER_QUERY };
