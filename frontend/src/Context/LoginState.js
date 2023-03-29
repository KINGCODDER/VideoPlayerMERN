import React, { useState } from "react";
import axios from "axios";
import LoginContext from "./LoginContext";

const LoginState = (props) => {
  const host = "http://localhost:3005";
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({ status: "not defined" });
  const [videos, setVideos] = useState({ status: "not defined" });
  const [video, setVideo] = useState({ status: "not defined" });
  const [status, setStatus] = useState("Not defined");
  const [likes, setLikes] = useState({ status: "not defined" });
  const [error, setError] = useState("No Error");

  const signup = async (data) => {
    try {
      const user = await axios.post(`${host}/api/v1/user/signup`, {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      setUser(user.data);
      setShow(true);
      localStorage.setItem("token", user.data.token);
      setStatus("success");
    } catch (err) {
      setStatus("fail");
      setError("Please Signup with correct Credentials");
    }
  };

  const login = async (data) => {
    try {
      const user = await axios.post(`${host}/api/v1/user/login`, {
        email: data.email,
        password: data.password,
      });

      setStatus("success");
      setShow(true);
      localStorage.setItem("token", user.data.token);
      setUser(user.data);
    } catch (err) {
      setStatus("fail");
      setError("Please Login with correct Credentials");
    }
  };

  const handleLogin = () => {
    setShow(true);
  };

  const verifyUser = async (token) => {
    try {
      const user = await axios.get(`${host}/api/v1/user/verify-token`, {
        headers: {
          "jwt-token": token,
        },
      });

      setUser(user.data);
      setShow(true);
    } catch (err) {}
  };

  const getVideos = async () => {
    try {
      const videos = await axios.get(`${host}/api/v1/videos`);

      setVideos(videos.data);
    } catch (err) {
      setStatus("fail");
      setError("Enable to Fetch Please try again later");
    }
  };

  const getVideoOne = async (id) => {
    try {
      const videos = await axios.get(`${host}/api/v1/videos/${id}`);

      setVideo(videos.data);
      setLikes(videos.data.data.likes);
    } catch (err) {
      setStatus("fail");
      setError("Please try again after some time");
    }
  };

  const updateLikes = async (id, token) => {
    try {
      const video = await axios.get(`${host}/api/v1/videos/${id}/like`, {
        headers: {
          "jwt-token": token,
        },
      });

      setLikes(video.data);
    } catch (err) {
      setStatus("fail");
      setError("Please Either login or try again after some time");
    }
  };
  const updateUnlikes = async (id, token) => {
    try {
      const video = await axios.get(`${host}/api/v1/videos/${id}/unlike`, {
        headers: {
          "jwt-token": token,
        },
      });
      setLikes(video.data);
    } catch (err) {
      setStatus("fail");
      setError("Please Either login or try again after some time");
    }
  };
  return (
    <LoginContext.Provider
      value={{
        show,
        handleLogin,
        user,
        signup,
        login,
        getVideos,
        videos,
        verifyUser,
        status,
        getVideoOne,
        updateLikes,
        updateUnlikes,
        likes,
        video,
        error,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginState;
