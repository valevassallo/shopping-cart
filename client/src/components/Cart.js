import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { FIND_PRODUCT } from "../graphql/queries";

import ProductSearch from "./ProductSearch";
import Product from "./Product";
import Calcs from "./Calcs";
import ProductsInCart from "./ProductsInCart";
import EmptyCart from "./EmptyCart";

function Cart() {
  const [product, setProduct] = React.useState();
  const [productsPrice, setProductsPrice] = React.useState();
  const { loading, error, data } = useQuery(FIND_PRODUCT, {
    variables: { name: product },
    skip: !product
  });

  function handleProduct(value) {
    setProduct(value);
  }

  if (loading) return "Loading...";

  const Container = styled.div`
    height: 100vh;
    width: calc(100% - 240px);
    display: flex;
    flex-direction: row;
    background: #f7f7f9;
    justify-content: space-around;
    padding: 64px 120px;
  `;

  const CartItself = styled.div`
    width: 360px;
    height: 480px;
    background: #ffffff;
    border-radius: 4px;
    margin-top: 16px;
  `;

  return (
    <Container>
      <section>
        <ProductSearch setProduct={handleProduct} />
        {error || !data ? (
          <EmptyCart />
        ) : (
          <CartItself>
            <Product
              product={data.product}
              setProductsPrice={setProductsPrice}
            />
          </CartItself>
        )}
      </section>
      <section>
        <Calcs productsPrice={productsPrice} />
      </section>
    </Container>
  );
}

export default Cart;
