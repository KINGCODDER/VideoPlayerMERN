import React, { useContext, useEffect } from "react";
import "../Styles/Content.css";
import LoginContext from "../Context/LoginContext";
import VideoCard from "./VideoCard";
import LoadingFullScreen from "./LoadingFullScreen";

function Content() {
  const context = useContext(LoginContext);
  const { getVideos, videos } = context;

  useEffect(() => {
    console.clear();
    getVideos();
  }, []);

  return videos.status === "success" ? (
    <>
      <div className="container px-0 d-flex flex-column">
        <div className="heading-small my-4 d-flex justify-content-between align-items-center">
          <h2>Videos</h2>
        </div>

        <div className="d-flex my-4 justify-content-between ">
          <div className="row  gy-5">
            {videos ? (
              <>
                {videos.data.map((item, index) => {
                  return (
                    <VideoCard
                      id={item._id}
                      key={item._id}
                      thumbnail={item.thumbnail}
                      title={item.title}
                      description={item.description}
                    />
                  );
                })}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    <LoadingFullScreen />
  );
}

export default Content;
