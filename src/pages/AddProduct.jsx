import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ addProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const onSibmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !price.trim() || !desc.trim() || !image.trim()) {
      alert("some inputs are empty");
      return;
    }
    const newProduct = {
      title,
      price,
      desc,
      image,
    };
    addProduct(newProduct);
    console.log(newProduct);
    setTitle("");
    setPrice("");
    setDesc("");
    setImage("");
    navigate("/");
  };
  return (
    <Form onSubmit={onSibmit} style={{ width: "50%", margin: "100px auto" }}>
      <h2>Add product form</h2>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Price</Form.Label>
        <Form.Control
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Price"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          placeholder="Description"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="url"
          placeholder="Url..."
        />
      </Form.Group>
      <Button
        type="submit"
        style={{ width: "fitContent", display: "block", margin: "10px auto" }}
        variant="dark"
      >
        Create Products
      </Button>
    </Form>
  );
};

export default AddProduct;
