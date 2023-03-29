import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/ShortVideoCard.css";

function ShortVideoCard({ video }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="short-card-container br-15"
        onClick={() => {
          navigate(`/videoplayer/${video._id}`);
          window.location.reload();
        }}
      >
        <div className="img-container w-50">
          <img className="w-100 br-15" src={video.thumbnail} alt="" />
        </div>

        <div className="short-card-title w-50 p-3">
          <h5>{video.title}</h5>
        </div>
      </div>
    </div>
  );
}

export default ShortVideoCard;
