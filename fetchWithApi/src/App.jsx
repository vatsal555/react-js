import { useEffect, useState } from "react";
import Api from "./Api";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    getList();
  }, []);
  function getList() {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((res) => {
        // console.log("response", res);
        setData(res);
        setName(res[0].name);
        setEmail(res[0].email);
      });
    });
  }
  // console.warn(data);
  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.log("response", res);
        getList();
      });
    });
  };

  const handleUpdate = (id) => {
    let item = data[id - 1];
    setName(item.name);
    setEmail(item.email);
  };
  return (
    <>
      <h1>Fetch with Api</h1>
      {/* <Api /> */}
      <table border="5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() => handleUpdate(item.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input type="text" value={name} /> <br />
        <br />
        <input type="email" value={email} /> <br />
        <br />
        <button>Update data</button>
      </div>
    </>
  );
}

export default App;
