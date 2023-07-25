import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Update(props) {
  const [saveId, setSaveId] = useState(0);
  const [saveName, setSaveName] = useState("");
  const [saveEmail, setSaveEmail] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(` https://647d6bbbaf9847108549ae5c.mockapi.io/crud2/${id}`)
      .then((res) => {
        setSaveId(res.data.id);
        setSaveName(res.data.name);
        setSaveEmail(res.data.email);
        console.log(res.data.name);
      });
  }, [id]);

  const handleSubmit = (e) => {
    axios
      .put(` https://647d6bbbaf9847108549ae5c.mockapi.io/crud2/${id}`, {
        id: saveId,
        name: saveName,
        email: saveEmail,
      })
      .then((res) => {
        console.log("responce", res);
        navigate("/read");
      });
  };

  return (
    <div className="w-25 m-auto py-3">
      <h2>Update Details</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={saveName}
          onChange={(e) => {
            setSaveName(e.target.value);
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
          value={saveEmail}
          onChange={(e) => {
            setSaveEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-primary "
          onClick={() => handleSubmit()}>
          Update
        </button>
      </div>
    </div>
  );
}

export default Update;
