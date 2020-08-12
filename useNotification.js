import React, { useRef } from "react";
import ReactDOM from "react-dom";

const useNotification = (title, option) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, option);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, option);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("Click Button", {
    body: "Click Again!!"
  });
  return (
    <div className="App" style={{ height: "1000px" }}>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
