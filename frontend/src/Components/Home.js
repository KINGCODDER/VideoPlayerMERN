import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

function Home() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Header />} />
          <Route path={"/videoplayer/:id"} element={<VideoPlayer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Home;
