import React from "react";
import "../styles/Home.css";
import VideoCard from "../components/VideoCard";
import projectData from "../projectData";
import HorizontalScroll from "react-scroll-horizontal";
function Home() {
 
  return (
    <div className="home">
      <div className="home__container">
        
          {projectData.map((data, idx) => (
            <VideoCard
              key={data.id}
              imageIndex={idx}
              t={idx}
              project={data}
              video={data.video}
              image={data.thumbnail}
            />
          ))}
       
      </div>
    </div>
  );
}

export default Home;
