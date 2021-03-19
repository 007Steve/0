import React from "react";
import "../styles/ProjectPage.css";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import projectData from "../projectData";
import { motion } from "framer-motion";
function ProjectPage() {
  const { id } = useParams();
  const projectInfo = projectData.find((data) => data.name === id);

  // let projectId = projectInfo.id;
  // const nextProjectId = ++projectId;
  // const nextProject = projectData[nextProjectId].name;

  return (
    <div className="projectPage">
      <motion.h1
        initial={{ y: 20, opacity: 0.7 }}
        animate={{ y: -20, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="projectPage_title"
      >
        {id}
      </motion.h1>

      <motion.img
        initial={{ y: 20, opacity: 0.6 }}
        animate={{ y: -20, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 3 }}
        className="projectPage__video"
        src={projectInfo.backgroundPic}
        // control="false"
        autoPlay
        loop
      ></motion.img>
      <div className="projectPage__container">
        <div className="projectPage__infoContainer">
          <motion.p
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1.1 }}
            className="projectPage__p"
          >
            Stack:
            <span className="projectPage__span">{projectInfo.tools}</span>
          </motion.p>

          <motion.p
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 2.1 }}
            className="projectPage__p"
          >
            Website:
            <a href={`${projectInfo.website}`}>
              <span className="projectPage__span"> Link</span>
            </a>
          </motion.p>
          <motion.p
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 3.1 }}
            className="projectPage__p"
          >
            Github:
            <a href={`${projectInfo.github}`}>
              <span className="projectPage__span"> Code</span>
            </a>
          </motion.p>
        </div>
        <motion.div className="projectPage__description">
          <motion.p>{projectInfo.description}</motion.p>
        </motion.div>
      </div>
      <video
        className="projectPage__projectImage"
        src={projectInfo.video}
        control="false"
        autoPlay
        loop
      ></video>

      <img
        className="projectPage__projectImage"
        src={projectInfo.thumbnail}
        alt=""
      />
      <div className="projectPage__nextProjectContainer">
        <motion.p className="projectPage__nextProjectText">
          Next Project
        </motion.p>
        <a href={`/project/${projectInfo.next}`}>
          <motion.h1
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="projectPage__nextProjectTitle"
          >
            {projectInfo.next}
          </motion.h1>
        </a>
      </div>
    </div>
  );
}

export default ProjectPage;
