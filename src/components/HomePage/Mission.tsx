import React from "react";
import "./Mission.scss";
import { missionValues, valuesValues, visionValues } from "../../data/mission";

import parse from "html-react-parser";

export const Mission = () => {
  const mission = missionValues;
  const vision = visionValues;
  const values = valuesValues;

  return (
    <div id="mainValues">
      <div id="mission" className="container mt-lg-5">
        <div className="row d-flex flex-column flex-xl-row justify-content-between gx-5">
          <div className="col col-xl mb-5">
            <h2 className="mx-md-auto ms-2 mb-4 card-title title-1">
              {mission.title}
            </h2>
            <div>
              <p className="card-text">{mission.text}</p>
            </div>
          </div>

          <div className="col col-xl mb-5">
            <h2 className="mx-md-auto ms-2 mb-4 card-title title-2">
              {vision.title}
            </h2>
            <p className="card-text">{vision.text}</p>
          </div>
        </div>

        <div className="row values d-flex flex-column flex-xl-row">
          <div className="col col-md-12 mb-5 ">
            <h2 className="mx-md-auto ms-2 mb-4 card-title title-3">
              {values.title}
            </h2>
            <ul className="card-text values-body">{parse(values.text)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};
