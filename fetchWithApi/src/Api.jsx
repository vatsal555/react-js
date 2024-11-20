import { useState } from "react";

function Api() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const handleSubmit = () => {
    // console.log({ name, email, mobile });
    let data = { name, email, mobile };
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "post",
      headers: {
        Accept: "Application",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((res) => {
        console.log("response", res);
      });
    });
  };
  return (
    <>
      <h1>Send Data to Api</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
      />{" "}
      <br />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />{" "}
      <br />
      <br />
      <input
        type="mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        name="mobile"
      />{" "}
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Api;
