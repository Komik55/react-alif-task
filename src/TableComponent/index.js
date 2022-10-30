import Table from "react-bootstrap/Table";

function TableComponent({ post, titles }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {titles.map((elem, ind) => (
            <th key={ind}>{elem}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {post.map((post) => (
          <tr key={post.id}>
            <th>{post.id}</th>
            <th>{post.title}</th>
            <th>{post.author}</th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableComponent;
