import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://647d6bbbaf9847108549ae5c.mockapi.io/crud2", {
        name: name,
        email: email,
        headers: { Authorization: "******" },
      })
      .then((res) => {
        console.log(res);
        console.log("function is working");
        history("/read");
      });
  };

  return (
    <div>
      <h2>Create</h2>
      <form className="w-25 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary mx-5"
            onClick={handleSubmit}>
            Submit
          </button>

          <Link to="/read">
            <button className="btn btn-secondary mx-4 my-2">Read Details</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Create;
