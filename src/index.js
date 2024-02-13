import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from "@/App";
import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <img src="/assets/earth-3.png" alt="earth" className="earth-image"></img>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
