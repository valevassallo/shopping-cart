import React from "react";
import styled from "styled-components";

function Calcs() {
  const OrderInfo = styled.div`
    width: 360px;
    margin-top: 128px;
    margin-bottom: 264px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const DeliveryDate = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    text-align: center;
    margin-bottom: 16px;
  `;

  const Calculations = styled.div`
    width: 360px;
    height: 160px;
    padding: 16px;
    background: white;
  `;

  const Row = styled.div`
    margin-bottom: 8px;
    width: 328px;
    height: 24px;
  `;

  const TotalRow = styled.div`
    margin-top: 16px;
    width: 328px;
    height: 24px;
  `;

  const Left = styled.span`
    float: left;
  `;

  const Right = styled.span`
    float: right;
  `;

  const DisabledOrderButton = styled.button`
    margin-top: 16px;
    width: 360px;
    height: 48px;
    background: #f7f7f7;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #c1c1c1;
  `;

  const OrderButton = styled.button`
    margin-top: 16px;
    width: 360px;
    height: 48px;
    background: #ff8000;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
  `;

  const LittleTruck = styled.svg`
    margin-right: 11px;
  `;

  const totalPrice = 49.0;

  return (
    <OrderInfo>
      <DeliveryDate>
        <LittleTruck
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1967 13.6449C9.44449 13.6449 8.01904 15.0707 8.01904 16.8224C8.01904 18.5746 9.44449 20 11.1967 20C12.9484 20 14.3742 18.5746 14.3742 16.8224C14.3742 15.0707 12.9484 13.6449 11.1967 13.6449ZM11.1967 17.757C10.6812 17.757 10.2621 17.3379 10.2621 16.8224C10.2621 16.3069 10.6812 15.8878 11.1967 15.8878C11.7121 15.8878 12.1312 16.3069 12.1312 16.8224C12.1312 17.3379 11.7121 17.757 11.1967 17.757Z"
            fill="#0500FF"
          />
          <path
            d="M10.7307 0C11.0184 0.0686127 11.2095 0.162113 11.3041 0.280502L17.4028 7.90928C17.5154 8.04972 17.577 8.22737 17.577 8.41121V16.04C17.577 16.4719 17.2421 16.8224 16.8294 16.8224H16.0373C15.6668 16.8224 15.3393 16.5435 15.2915 16.1593C14.998 13.8066 13.2047 12.3473 11.0354 12.3473C8.86609 12.3473 7.0728 13.8065 6.77935 16.1593C6.73152 16.5435 6.40369 16.8224 6.03358 16.8224H1C0.447715 16.8224 0 16.3747 0 15.8224V1C0 0.447715 0.447715 0 1 0H10.7307ZM5.98832 6.25951C5.98832 6.69183 6.32287 7.04195 6.73598 7.04195L12.8855 7C13.5195 7 13.7911 6.50974 13.3855 6L10.3855 2.5C10.3321 2.43298 10.2483 2.34571 10.1643 2.26289C9.98871 2.08955 9.749 2 9.50225 2H7.17772C6.9869 2 6.79906 2.05322 6.64743 2.16905C6.38406 2.37025 5.99639 2.71483 5.99639 3L5.98832 6.25951Z"
            fill="#0500FF"
          />
        </LittleTruck>
        Buy now and get it by tomorrow
      </DeliveryDate>
      <Calculations>
        <Row>
          <Left>Products</Left>
          <Right>$23.00</Right>
        </Row>
        <Row>
          <Left>Shipping Cost</Left>
          <Right>$8.00</Right>
        </Row>
        <Row>
          <Left>Taxes</Left>
          <Right>$2.00</Right>
        </Row>
        <TotalRow>
          <Left>Total</Left>
          <Right>$31.00</Right>
        </TotalRow>
      </Calculations>
      {totalPrice < 50.0 ? (
        <DisabledOrderButton disabled>complete order</DisabledOrderButton>
      ) : (
        <OrderButton>complete order</OrderButton>
      )}
    </OrderInfo>
  );
}

export default Calcs;
