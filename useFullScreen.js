import React, { useRef } from "react";
import ReactDOM from "react-dom";

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof onFulls === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof onFulls === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are Full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFulls);
  return (
    <div className="App" style={{ height: "500px" }}>
      <div ref={element}>
        <img
          src="https://1.bp.blogspot.com/-rX9YLuWNx_8/Xy4lp3uFj_I/AAAAAAAAAno/TnwLSVKe41Ey9DLXW5eEFrVnPu-3pBhaACLcBGAsYHQ/s750/1015.gif"
          alt="슬기"
        />
        <button onClick={exitFull}>ExitFullScreen</button>
      </div>
      <button onClick={triggerFull}>FullScreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
