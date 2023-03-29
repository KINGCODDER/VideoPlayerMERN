import React, { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import LoginContext from "../Context/LoginContext";
import { useParams } from "react-router-dom";
import LoadingFullScreen from "./LoadingFullScreen";
import ShortVideoCard from "./ShortVideoCard";

function VideoPlayer() {
  const params = useParams();
  const context = useContext(LoginContext);
  const {
    videos,
    video,
    getVideoOne,
    getVideos,
    likes,
    updateLikes,
    updateUnlikes,
  } = context;
  useEffect(() => {
    getVideos();
    getVideoOne(params.id);
  }, []);

  const handleLike = () => {
    const token = localStorage.getItem("token");
    updateLikes(params.id, token);
    document.getElementById("like").classList.add("hide");
    document.getElementById("unlike").classList.remove("hide");
  };

  const handleUnlike = () => {
    const token = localStorage.getItem("token");
    updateUnlikes(params.id, token);
    document.getElementById("unlike").classList.add("hide");
    document.getElementById("like").classList.remove("hide");
  };

  return (
    <div>
      {video.status === "success" ? (
        <div className="container d-flex">
          <div className="video-container w-100 d-flex flex-column align-items-start">
            <ReactPlayer url={video.data.url} width="100%" playing />

            <div className="likes-tab my-2 float-start">
              <button
                className="btn btn-light btn-like rounded-pill"
                onClick={handleLike}
                id="like"
              >
                {likes.status === "success" ? likes.data : video.data.likes}{" "}
                Likes <i className="bi bi-hand-thumbs-up"></i>
              </button>
              <button
                id="unlike"
                className="btn btn-light btn-like rounded-pill hide"
                onClick={handleUnlike}
              >
                {likes.status === "success" ? likes.data : video.data.likes}{" "}
                Likes <i className="bi bi-hand-thumbs-up-fill"></i>
              </button>
            </div>
            <div className="video-title float-start">
              <h1>{video.data.title}</h1>
            </div>
            <div className="video-description float-start text-start">
              <h3>Description: </h3>
              <p>{video.data.description}</p>
            </div>
          </div>

          <div className="suggested-videos w-75">
            {videos ? (
              <>
                {videos.data
                  .filter((e) => e._id !== params.id)
                  .map((item, index) => {
                    return (
                      <>
                        <ShortVideoCard video={item} key={index} />
                      </>
                    );
                  })}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <LoadingFullScreen />
      )}
    </div>
  );
}

export default VideoPlayer;
