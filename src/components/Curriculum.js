import React from "react";
import { Courses } from "./Courses";
import { Education } from "./layout/Education";
import { SocialMedia } from "./SocialMedia";

export const Curriculum = () => {
  return (
    <div className="page">
      <h1 className="heading">Curriculum</h1>
      <h2>Education</h2>
      <Education />
      <h2>Courses</h2>
      <Courses/>
      <h2>About Me</h2>
      <SocialMedia/>
    </div>
  );
};
