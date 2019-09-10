import React from "react";
import styled from "styled-components";

function ProductSearch({ setProduct }) {
  const [content, setCont] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setProduct(content);
  }

  function handleChange(event) {
    setCont(event.target.value);
  }

  const Input = styled.input`
    width: 360px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 16px;
  `;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          aria-label="Input to get searched product"
          placeholder="Search Products"
          type="text"
          required
          name="product"
          id="product"
          onChange={handleChange}
          autoFocus
          autoComplete="off"
          value={content}
        />
      </form>
    </>
  );
}

export default ProductSearch;
