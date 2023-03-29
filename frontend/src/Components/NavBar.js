import React, { useContext, useEffect, useRef } from "react";
import logo from "../Resources/whole.png";
import "../Styles/NavBar.css";
import Popup from "./Popup";
import { useLocation, useNavigate } from "react-router-dom";
import LoginContext from "../Context/LoginContext";
import ErrorSuccess from "./ErrorSuccess";
// import profilePic from "../Resources/profile3.png";

function NavBar() {
  const context = useContext(LoginContext);
  const { show, user, verifyUser } = context;
  const navigate = useNavigate();
  const location = useLocation();
  const signupRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      verifyUser(token);
    } else {
      if (window.innerWidth >= 762) {
        signupRef.current.click();
      }
    }
  }, []);

  return (
    <>
      <ErrorSuccess />
      <div className="navbar-container d-flex">
        <div className="container-fluid navbar">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Header" />
          </a>

          <div className="login-signup dropdown">
            <span
              className={`login-signup-text dropdown-toggle ${
                show ? "hide" : "show"
              }`}
            >
              Create Account.
              <button
                type="button"
                className="login-signup-link btn btn-link ps-0 "
                id="myInput"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                ref={signupRef}
              >
                It's Free!
              </button>
            </span>
            {user.status === "success" ? (
              <div className="dropdown">
                <div
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className={`footer-card d-flex align-items-center justify-content-between dropdown-toggle ${
                    show ? "show" : "hide"
                  }`}
                >
                  <div className="profile">
                    <span className="profile-name ms-3">
                      {user.data.user.name}
                    </span>
                  </div>
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item logout-btn"
                      href="/"
                      onClick={() => {
                        localStorage.removeItem("token");
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}

            <Popup />
          </div>
        </div>
      </div>
      {location.pathname !== "/" ? (
        <div className="navbar-mobile d-flex w-100 justify-content-between align-items-center">
          <div>
            <button
              className="btn btn-transparent mx-4 fs-1"
              onClick={() => {
                navigate("/");
              }}
            >
              <i class="bi bi-arrow-left"></i>
            </button>
          </div>

          {user.status === "success" ? (
            <div className="profilename mx-4">{user.data.user.name}</div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default NavBar;
