import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MyCard = ({ item, deleteProduct }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img style={{ height: "280px" }} variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <h3>Price:{item.price}</h3>
        <Card.Text>{item.desc}</Card.Text>
        <div style={{ display: "flex", columnGap: "10px" }}>
          <Link to={`/edit/${item.id}`}>
            <Button variant="primary">Edit</Button>
          </Link>

          <Button onClick={() => deleteProduct(item.id)} variant="danger">
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
