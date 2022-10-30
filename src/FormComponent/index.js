import React, { useState } from "react";
import {
  Form,
  FloatingLabel,
  InputGroup,
  Col,
  Row,
  Button,
} from "react-bootstrap";

function FormComponent({ handleSubmit, post }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <Form
      className="my-3"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(text, author);
        setText("");
        setAuthor("");
      }}
    >
      <Row className="g-2 ">
        <InputGroup hasValidation className="mx-2">
          <FloatingLabel controlId="floatingInput" label="Title">
            <Form.Control
              value={text}
              required
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Title"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Author">
            <Form.Control
              value={author}
              required
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="Author"
            />
          </FloatingLabel>
        </InputGroup>
      </Row>
      <div className="d-flex justify-content-end">
        <Button
          disabled={post.length >= 15}
          variant="primary "
          type="submit"
          className="pull-right mt-2 float-right "
        >
          Отправить
        </Button>
      </div>
    </Form>
  );
}

export default FormComponent;
