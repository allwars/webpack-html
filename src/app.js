
import "toastify-js/src/toastify.css";

import "./styles/main.scss";
import "./static/logo.png";


  if ("loading" in HTMLImageElement.prototype) {
    console.log("El navegador soporta `lazy-loading`...");
  } else {
    console.log("`lazy-loading` no soportado...");
  }

