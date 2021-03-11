import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import None from "./None";
import "./style.css";

function Button() {
  var status = false;

  function ImportsComp() {
    status = !status;
    //console.log(status);
    if (status == true) {
      ReactDOM.render(<App />, document.getElementById("root"));
    } else if (status == false) {
      ReactDOM.render(<None />, document.getElementById("root"));
    }
  }
  return (
    <div>
      <button class="btn" onClick={ImportsComp}>
        {" "}
        Показать код
      </button>
    </div>
  );
}
ReactDOM.render(<Button />, document.getElementById("div"));
