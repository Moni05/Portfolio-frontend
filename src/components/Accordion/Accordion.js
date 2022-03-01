import React, { useState } from 'react';
import "./Accordion.css";

const Accordion = ({ title, content }) => {
    console.log(content);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className="accordion-expand">{isActive ? '-' : '+'}</div>
      </div>
      {isActive && 
      content.map((ele, i)=>{
        return(
          <div key={i} className="accordion-content">{ele}</div>
        )
      })}
      
    </div>
  );
};

export default Accordion;