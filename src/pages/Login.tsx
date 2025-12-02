import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../store/slices/authSlice";
import { RootState } from "../store";
import { Navigate } from "react-router-dom";

const Login: React.FC = () => {
  const { type } = useParams(); // "admin" or "customer"
  const dispatch = useDispatch();
  const auth = useSelector((s: RootState) => s.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (auth.user) {
    return <Navigate to={auth.user.role === "Admin" ? "/dashboard" : "/customer"} replace />;
  }

  const loginHandler = (e: any) => {
    e.preventDefault();

    dispatch(
      loginRequest({
        username,
        password,
        role: type === "admin" ? "Admin" : "Customer"
      })
    );
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card p-4 shadow-sm">
          <h3 className="mb-3">
            {type === "admin" ? "Admin Login" : "Customer Login"}
          </h3>

          <form onSubmit={loginHandler}>
            <div className="mb-2">
              <label className="form-label">Username</label>
              <input className="form-control" onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="mb-2">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className="btn btn-primary mt-3 w-100" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;