import React from "react";
import "./AboutContainer.scss";
import { AboutTipTools } from "./AboutTipTools";
import { AboutEducator } from "./AboutEducator";
import { AboutPictures } from "./AboutPictures";

export const AboutContainer = () => {
  return (
    <div>
      <div className="mb-5">
        <AboutPictures />
      </div>
      <div className="mb-5">
        <AboutTipTools />
      </div>
      <div className="mb-5">
        <AboutEducator />
      </div>
    </div>
  );
};
