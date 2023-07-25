import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Read(props) {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://647d6bbbaf9847108549ae5c.mockapi.io/crud2")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }

  const handleDelete = (id) => {
    axios
      .delete(`https://647d6bbbaf9847108549ae5c.mockapi.io/crud2/${id}`)
      .then((res) => {
        getData();
        // console.log("element deleted , remaining responce :", res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="d-flex text-align-center w-25 m-auto justify-content-between py-3">
        <h2>List of Data</h2>
        <Link to="/">
          <button className="btn btn-success">Add Details</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((items) => {
          return (
            <>
              <tbody  key={items.id}>
                <tr>
                  <th scope="row">{items.id}</th>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>
                    <Link to={`/update/${items.id}`}>
                      <button  className="btn btn-primary">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button 
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(items.id);
                      }}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default Read;
