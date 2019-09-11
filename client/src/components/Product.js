import React from "react";
import styled from "styled-components";
import { UPDATE_PRODUCT } from "../graphql/mutations";
import { useMutation } from "@apollo/react-hooks";

function Product({ product, cartId }) {
  const [quantity, setQuantity] = React.useState(0);
  const [showControls, setShowControls] = React.useState(false);
  const [updateProduct, { data }] = useMutation(UPDATE_PRODUCT);

  const node = React.useRef();

  console.log(product);

  const ProductContainer = styled.div`
    width: 328px;
    height: 74px;
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
    padding: 16px;
    display: flex;
    flex-direction: row;
  `;

  const ProductDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 16px;
    width: 240px;
  `;

  const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 160px;
  `;

  const ProductTitle = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    margin: 0;
  `;

  const Price = styled.p`
    font-weight: 600;
    font-size: 21px;
    line-height: 32px;
    color: #ff2d55;
    margin: 0px;
  `;

  const AddToCart = styled.span`
    font-size: 24px;
    width: 48px;
    height: 48px;
    background: #ff8000;
    border-radius: 50%;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const QuantityControls = styled.div`
    width: 180px;
    height: 48px;
    background: #ff8000;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;

  const ControlButton = styled.button`
    color: white;
    border: 0;
    padding: 0;
    background: none;
    font-size: 32px;
  `;

  const RightPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  React.useEffect(() => {
    if (showControls) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showControls]);

  function handleAddToCart() {
    setShowControls(true);
  }

  function handleClickOutside(e) {
    if (node.current.contains(e.target)) {
      return;
    }
    setShowControls(false);
    console.log(quantity);
    updateProduct({
      variables: {
        id: product.id,
        quantity: quantity,
        cartId: cartId
      }
    });
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
      // updateProduct({ variables: { id: product.id, cartId: null } });
    }
  }

  function handleIncrementQuantity() {
    setQuantity(function(prevState) {
      console.log(prevState);
      return prevState + 1;
    });
  }

  function handleDelete() {
    updateProduct({ variables: { id: product.id, cartId: null } });
  }

  return (
    <>
      {product ? (
        <ProductContainer>
          <img
            src={product.img}
            alt={product.name}
            width="80px"
            height="74px"
          />
          <div>{quantity}</div>
          <ProductDiv>
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <Price>${product.price.toFixed(2)}</Price>
            </ProductInfo>

            {showControls ? (
              <QuantityControls ref={node}>
                <ControlButton onClick={handleDecrementQuantity}>
                  -
                </ControlButton>
                {quantity}
                <ControlButton onClick={handleIncrementQuantity}>
                  +
                </ControlButton>
              </QuantityControls>
            ) : (
              <RightPart>
                <AddToCart onClick={handleAddToCart}>
                  {quantity ? quantity : "+"}
                </AddToCart>
                <span onClick={handleDelete}>delete</span>
              </RightPart>
            )}
          </ProductDiv>
        </ProductContainer>
      ) : (
        <span>There's no such product, try looking for another one</span>
      )}
    </>
  );
}

export default Product;
