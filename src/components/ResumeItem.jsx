import React from "react";

export default function ResumeItem({ icon, year, title, desc }) {
  return (
    <div className="resume__item">
      <div className="resume__icon">{icon}</div>
      <span className="resume__date">{year}</span>
      <h3
        className="resume__subtitle"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
      <p className="resume__description">{desc}</p>
    </div>
  );
}
