import React from "react";
import { stats } from "../data";

export default function Stas() {
  return (
    <>
      {stats.map(({ no, title }, index) => {
        return (
          <div className="stats__box" key={index}>
            <h3 className="stats__no">{no}</h3>
            <p
              className="stats__title"
              dangerouslySetInnerHTML={{ __html: title }}
            ></p>
          </div>
        );
      })}
    </>
  );
}
