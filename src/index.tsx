import React from "react";
import ReactDOM from "react-dom/client";
import Exam from "./Exam/Exam";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Exam />
  </React.StrictMode>
);
