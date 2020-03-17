import React from "react";
import "materialize-css/dist/css/materialize.min.css";

interface prop {
  props: string;
}

export default function Added({ taskName, taskDetails }) {
  return (
    <div className="row">
      <div className="col l12 m6 l3">
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{taskName}</span>
                <p>{taskDetails}</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
