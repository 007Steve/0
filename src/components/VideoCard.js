import React from "react";
import "../styles/VideoCard.css";
import HoverVideoPlayer from "react-hover-video-player";
import { Link } from "react-router-dom";

function VideoCard({ project,imageIndex , t}) {
   

  return (
    <div className={t === imageIndex? ' videCard' : 'videCard' }>
    <Link to={`/project/${project.name}`}>
      <HoverVideoPlayer
        className="player-wrapper"
        pausedOverlayWrapperClassName="paused-overlay-wrapper"
        videoClassName="player-video"
        videoSrc={project.video}
        pausedOverlay={
          <img className="videoCard__logo" src="" alt="" />
        }
        loadingOverlay={<div className="loading-spinner-overlay" />}
      />
      </Link>
    </div>
   
  );
}

export default VideoCard;
