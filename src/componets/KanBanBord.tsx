import React, { useState, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { render } from "@testing-library/react";
import Added from "./Added";

export default function KanBanBord() {
  /**
   * Feature Still Under Test
   * 
   * document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".collapsible");
      var instances = M.Collapsible.init(elems, {});
   });
   *  
   */

  const [addInput, setInput] = useState("");
  const [addInputTask, setInputTask] = useState("");

  const changeInputName = e => {
    setInput(e.target.value);
  };

  const changeInputTask = e => {
    setInputTask(e.target.value);
  };

  const clearState = () => {
    setInput("");
    setInputTask("");
  };

  const checkIfKanBanValid = () => {
    if (addInput.trim() !== "" && addInputTask.trim() !== "") {
      render(<Added taskName={addInput} taskDetails={addInputTask} />);
      clearState();
      let me = document.querySelector("#input_text");
    }
  };

  const changeOnBtnClick = () => {
    if (addInput !== "" && addInputTask !== "") {
      checkIfKanBanValid();
    }
  };

  return (
    <div>
      <div className="row kanbanSection">
        <div className="col s12 m4 l8 board">
          <p className="kanbanOrg">ORGANIZATION</p>
          <span className="kanBan">Kanban Board</span>
        </div>
        {/* <p>This is crazy</p> */}
        <div className="col s18 m4 r2 bb">
          <p className="k">
            <button
              className="waves-effect waves-light btn"
              onClick={changeOnBtnClick}
            >
              ADD LIST
            </button>
          </p>
        </div>
      </div>
      <Fragment>
        <div className="row">
          <form
            className="col s12"
            onSubmit={e => {
              e.preventDefault();
              changeOnBtnClick();
            }}
          >
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="input_text"
                  type="text"
                  data-length="10"
                  onChange={changeInputName}
                  value={addInput}
                  // placeholder="Input Task Title"
                />
                <label>Input Task</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="textarea2"
                  className="materialize-textarea"
                  data-length="120"
                  onChange={changeInputTask}
                  value={addInputTask}
                ></textarea>
                <label>Task Details</label>
              </div>
            </div>
          </form>
        </div>
      </Fragment>
    </div>
  );
}
