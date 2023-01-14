import React from "react";
import project from "../images/project.jpg";
const Project = () => {
  return (
    <div className="col-8 mx-auto text-center">
      <p className="project">Projects</p>
      <img src={project} alt="project" width={1000} height={500} />
    </div>
  );
};

export default Project;