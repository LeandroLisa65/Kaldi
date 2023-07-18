import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "kaldi-c1c97.firebaseapp.com",
  projectId: "kaldi-c1c97",
  storageBucket: "kaldi-c1c97.appspot.com",
  messagingSenderId: "607512926028",
  appId: "1:607512926028:web:f9adb0bf0e53e2e022e1e9",
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
