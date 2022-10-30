import React, { useState, useEffect } from "react";
import "./App.css";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";
import { Alert, Container, Spinner } from "react-bootstrap";
import axios from "axios";

let min = 5;
let max = 15;

function App() {
  let baseUrl = "http://localhost:3000/posts";
  const [loading, setLoading] = useState(true);
  const titles = ["id", "title", "author"];
  const [post, setPost] = useState([]);
  let messageWarning = `Должно быть минимум 5 полей в таблице`;

  async function getPosts() {
    await axios.get(baseUrl).then((responce) => {
      setPost(responce.data);
      setLoading(false);
      post.length >= min && (messageWarning = "");
      post.length >= 14 &&
        (messageWarning = "Должно быть максимум 15 полей в таблице");
    });
  }

  useEffect(() => {
    getPosts();
  }, []);

  async function storePost(data) {
    return await axios.post(baseUrl, data).then((resp) => getPosts());
  }
  const handleSubmit = (text, author) => {
    storePost({ title: text, author: author });
  };

  return (
    <div className="App">
      <Container fluid="md">
        <FormComponent handleSubmit={handleSubmit} post={post} />
        {post.length <= 5 && (
          <Alert variant="warning">Должно быть минимум 5 полей в таблице</Alert>
        )}
        {post.length >= 15 && (
          <Alert variant="warning">
            Должно быть максимум 15 полей в таблице
          </Alert>
        )}
        {post.length > 0 && <TableComponent titles={titles} post={post} />}
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Container>
    </div>
  );
}

export default App;
