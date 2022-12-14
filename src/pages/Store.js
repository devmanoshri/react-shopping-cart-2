import React from "react";
import { storeItems } from "../data/items";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";

export function Store() {
  return (
    <>
      <h1>Store</h1>

      <Row xs={1} md={2} lg={3} className="g-3">
        {storeItems.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItem item={item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
