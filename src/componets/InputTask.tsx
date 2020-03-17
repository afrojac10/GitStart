import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";

export default function InputTask() {
  // const [addInput, setInput] = useState([""]);
  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems, {});
  });
  return (
    <div>
      <div>
        <ul className="collapsible">
          <li>
            <div className="collapsible-header">
              <i className="material-icons">filter_drama</i>First
            </div>
            <div className="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
