import React from "react";
import { PropTypes } from "prop-types";
import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { Button } from "react-bootstrap";
StoreItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  imgUrl: PropTypes.string,
};

export default function StoreItem({ id, name, price, imgUrl }) {
  const quantity = 1;
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
            <Button className="w-100">+ Add to Cart</Button>
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
