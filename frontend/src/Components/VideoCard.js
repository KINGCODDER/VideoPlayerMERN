import React from "react";
import "../Styles/VideoCard.css";
import { useNavigate } from "react-router-dom";

function VideoCard({ id, thumbnail, title, description }) {
  const navigate = useNavigate();
  return (
    <div className="col-lg-4 col-md-6 mb-3 d-flex align-items-stretch">
      <div className="card" onClick={() => navigate(`/videoplayer/${id}`)}>
        <div className="img-container">
          <img src={thumbnail} className="card-img-top" alt="thumbnail" />
          <button type="button" className="btn btn-play">
            <i className="bi bi-play-circle-fill"></i>
          </button>
        </div>

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text selector">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
