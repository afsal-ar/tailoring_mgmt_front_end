import React from "react";
import { Link } from "react-router-dom";

const LoginType: React.FC = () => {
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <div className="card p-4 text-center shadow-sm">
                    <h3>Select Login Type</h3>

                    <div className="d-flex flex-column gap-3 mt-4">
                        <Link to="/login/admin" className="btn btn-primary btn-lg">
                            Admin Login
                        </Link>

                        <Link to="/login/customer" className="btn btn-outline-primary btn-lg">
                            Customer Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginType;