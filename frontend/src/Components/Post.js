import React from "react";
import "../Styles/Post.css";

function Post({
  image,
  badge,
  profile,
  view,
  name,
  title,
  text,
  content,
  location,
  date,
  company,
}) {
  return (
    <div>
      <div className="card w-75 mt-2">
        <img
          src={image}
          className={`card-img-top ${content === "job" ? "hide" : "show"}`}
          alt="..."
        />
        <div className="card-body text-left">
          <h5 className="card-badge">{badge}</h5>
          <h4 className="card-title d-flex justify-content-between">
            {title}
            <span
              className="options w-25 text-right "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-three-dots"></i>
            </span>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  Edit
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Report
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Option3
                </a>
              </li>
            </ul>
          </h4>
          <div className={`timeline ${content === "post" ? "hide" : "show"}`}>
            <div className="information d-flex align-items-center">
              <div className={`time my-3 ${date ? "show" : "hide"}`}>
                <i className="bi bi-calendar2-event me-2 d-inline-block"></i>
                <span className="d-inline-block text-date">{date}</span>
              </div>
              <div className={`time my-3 ${company ? "show" : "hide"}`}>
                <i className="bi bi-briefcase me-2"></i>
                <span className="d-inline-block text-date">{company}</span>
              </div>
              <div className="location ms-5">
                <i className="bi bi-geo-alt me-2"></i>
                <span className="text-date">Ahmedabad, India</span>
              </div>
            </div>
            <a
              href="/"
              type="button"
              className={`btn btn-outline-${content} w-100 mb-4`}
            >
              {content === "timeline" ? "Visit Website" : "Apply on Timesjobs"}
            </a>
          </div>
          <p className={`card-text ${content === "post" ? "show" : "hide"}`}>
            {text}
          </p>
          <div className="footer-card d-flex align-items-center justify-content-between">
            <div className="profile">
              <img src={profile} alt="" className="" />
              <span className="profile-name ms-3">{name}</span>
            </div>
            <div className="actions">
              <div className="views d-inline-block me-5">
                <i className="bi bi-eye me-2"></i>
                <span className="view-count">{view}</span>
              </div>
              <button type="button" className="btn btn-post d-inline-block">
                <i className="bi bi-share-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
