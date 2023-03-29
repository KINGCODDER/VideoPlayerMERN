import React, { useContext, useState, useRef } from "react";
import formImage from "../Resources/form-image.png";
import "../Styles/Popup.css";
import LoginContext from "../Context/LoginContext";

function PopupMobile() {
  const context = useContext(LoginContext);
  const { login, signup } = context;

  const [inputValue, setInputValue] = useState();

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className="modal"
        id="myModalMobile2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm ">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <span className="modal-title fs-5 views" id="exampleModalLabel">
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </span>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="bi bi-x-circle-fill"></i>
              </button>
            </div>
            <div className="modal-body d-flex flex-column p-4">
              <div className="popup-header">
                <h4 className="popup-heading mt-2 d-inline-block float-start ">
                  Welcome Back
                </h4>
                <span className="mt-2 d-flex align-items-center float-end">
                  {" "}
                  Don’t have an account yet?{" "}
                  <button
                    type="button"
                    className="login-signup-link btn btn-link ps-0 "
                    id="myInput"
                    data-bs-toggle="modal"
                    data-bs-target="#myModalMobile"
                  >
                    Create new for free!
                  </button>{" "}
                </span>
              </div>
              <div className="form-container d-flex mt-4">
                <form
                  action=""
                  className="w-100 me-4"
                  onSubmit={(e) => {
                    e.preventDefault();

                    login(inputValue);
                  }}
                >
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit "
                    className="btn btn-primary w-100 rounded-pill my-3"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Sign In
                  </button>
                </form>

                <div className="form-image w-100 d-flex flex-column justify-content-between">
                  <img src={formImage} alt="form" />
                  <span className="warning">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal"
        id="myModalMobile"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="bi bi-x-circle-fill"></i>
            </button>
            <div className="modal-header justify-content-center">
              <span className="modal-title fs-5 views" id="exampleModalLabel">
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </span>
            </div>
            <div className="modal-body d-flex flex-column p-4">
              <div className="popup-header">
                <h4 className="popup-heading mt-2 d-inline-block float-start ">
                  Create Account
                </h4>
              </div>
              <div className="form-container d-flex mt-4">
                <form
                  action="#"
                  className="w-100 me-4"
                  onSubmit={(e) => {
                    e.preventDefault();

                    signup(inputValue);
                  }}
                >
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="signup d-flex justify-content-between align-items-center">
                    <button
                      type="submit "
                      className="btn btn-login w-100 rounded-pill my-3"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Create Account
                    </button>

                    <span className="mt-2 d-flex align-items-center float-end">
                      {" "}
                      <button
                        type="button"
                        className="login-signup-link btn btn-link ps-0 "
                        id="myInput"
                        data-bs-toggle="modal"
                        data-bs-target="#myModalMobile2"
                      >
                        or Sign In
                      </button>{" "}
                    </span>
                  </div>
                </form>

                <div className="form-image w-100 d-flex flex-column justify-content-between">
                  <img src={formImage} alt="form" />
                  <span className="warning">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupMobile;
