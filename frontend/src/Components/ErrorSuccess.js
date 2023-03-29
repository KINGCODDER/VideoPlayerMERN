import React, { useContext } from "react";
import LoginContext from "../Context/LoginContext";

function ErrorSuccess() {
  const context = useContext(LoginContext);
  const { status, error } = context;
  return (
    <div>
      {status === "success" ? (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Success!</strong> You have logged in
          <button
            type="button"
            className="btn-close d-flex-align-items-center"
            data-bs-dismiss="alert"
            aria-label="Close"
          >
            <i className="bi bi-x-circle-fill"></i>
          </button>
        </div>
      ) : (
        ""
      )}
      {status === "fail" ? (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Error!</strong> {error ? error : "Some unknown Error Occured"}
          <button
            type="button"
            className="btn-close d-flex-align-items-center"
            data-bs-dismiss="alert"
            aria-label="Close"
          >
            <i className="bi bi-x-circle-fill"></i>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ErrorSuccess;
