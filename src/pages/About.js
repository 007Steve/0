import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
function About() {
  return (
    <div className="about">
      <div className="about__container">
        <motion.img
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1.1 }}
          className="about__image"
          src="https://stephenplummer.me/DSC_1020.jpeg"
          alt=""
        />
        <div className="about__infoContainer">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2.2 }}
            className="about__title"
          >
            HELLO, I'M STEPHEN PLUMMER
          </motion.h1>
          <motion.p
            initial={{ y: 60, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 3.5 }}
            className="about__description"
          >
            I AM A FRONT-END DEVELOPER BASED OUT OF STRATFORD CONNECTICUT. I
            LOVE PUSHING THE LIMITS OF TECHNOLOGY SUCH AS AR/VR BY CREATING
            ENGAGING EXPERIENCES. SOME OF MY FAVORITE THINGS INCLUDE CODING,
            PHOTOGRAPHY, AND FISHING.
          </motion.p>
        </div>
      </div>
      <footer className="about__footer">
        <div className="about__footerLinks">
          <motion.a
            href="https://www.linkedin.com/in/stephen-plummer-9bb4b1153/"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2 }}
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 3.1 }}
          >
            <p className="about__links">LinkedIn </p>
          </motion.a>
          <motion.a
            href="https://github.com/007Steve"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2 }}
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 2.1 }}
          >
            <p className="about__links">GitHub </p>
          </motion.a>
          <motion.a
            href="https://twitter.com/StephenPlummer0"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2 }}
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1.1 }}
          >
            <p className="about__links">Twitter </p>
          </motion.a>
        </div>
        <div className="about__footerEmail">
          <motion.p
            whileTap={{ scale: 0.9 }}
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: .5 }}
            className="projectPage__nextProjectText"
          >
            email
          </motion.p>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 2.1 }}
            className="about__Email"
          >
            Stephen.Plummer1.sp@gmail.com
          </motion.h2>
        </div>
      </footer>
    </div>
  );
}

export default About;
