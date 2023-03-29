import React, { useContext, useEffect } from "react";
import "../Styles/Header.css";
import PopupMobile from "./PopupMobile";
import LoginContext from "../Context/LoginContext";
import Content from "./Content";

function Header() {
  const context = useContext(LoginContext);
  const { show, videos } = context;

  useEffect(() => {}, []);
  return (
    <>
      <div className="header w-100">
        <div className="nav-small d-flex justify-content-between p-4 align-items-center p-2">
          <button type="button" className="btn btn-back">
            <i className="bi bi-arrow-left"></i>
          </button>

          {show ? (
            <button
              type="button"
              className="btn btn-outline-join"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
            >
              Logout
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-outline-join"
              data-bs-toggle="modal"
              data-bs-target="#myModalMobile"
            >
              SignUp/LogIn
            </button>
          )}

          <PopupMobile />
        </div>
        <div className="header-content">
          <h2 className="heading">Video Player</h2>
          <span className="text">{videos.results} Videos</span>
        </div>
      </div>

      <Content />
    </>
  );
}

export default Header;
