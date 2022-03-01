import React from "react";
import "./SectionHeading.css";

export default function ScreenHeading(props) {
  return (
    <div className="heading-container">
      <div className={`screen-heading ${props.classTitle}`}>
        <span>{props.title}</span>
      </div>
      {props.subHeading ? (
        <div className={`screen-sub-heading ${props.classTitle}`}>
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className="heading-seperator">
        <div className={`seperator-line ${props.classTitle}`}></div>
        <div className="seperator-blob">
          <div></div>
        </div>
      </div>
    </div>
  );
}