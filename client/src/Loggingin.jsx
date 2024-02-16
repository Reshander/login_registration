import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Logingin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result)
        if(result.data ==="Sucess"){
            navigate("/home")
        }
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Loggingin</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="text"
                placeholder="Enter email"
                // autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link to="/home" type="submit" className="btn btn-success w-100 rounded-0">Register</Link>

          </div>
        </form>
      </div>
    </div>
  );
}
export default Logingin;
