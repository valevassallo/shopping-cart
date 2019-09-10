import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { CART_QUERY } from "../graphql/queries";

function ProductsInCart({ setProductsPrice, cartId }) {
  const { loading, error, data } = useQuery(CART_QUERY, {
    variables: { cartId: cartId }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
}

export default ProductsInCart;
