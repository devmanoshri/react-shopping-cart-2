import React from "react";
import { PropTypes } from "prop-types";
import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartState } from "../context/ShoppingCartContext";

StoreItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  imgUrl: PropTypes.string,
};

export default function StoreItem({ item }) {
  const { id, name, price, imgUrl } = item;
  const { addToCart } = CartState();

  const quantity = 0;
  // const {
  //   state: { cart },
  //   dispatch,
  // } = CartState();

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name} </span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              // onClick={() => {
              //   dispatch({ type: "ADD_TO_CART", payload: item });
              // }}
              onClick={console.log(id)}
            >
              + Add to Cart
            </Button>
          ) : (
            <div className="text-center ">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button>-</Button>
                <span className="fs-2">{quantity}</span> in Cart
                <Button>+</Button>
              </div>

              <Button variant="danger fs-s">Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
