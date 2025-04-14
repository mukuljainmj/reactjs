import React from "react";
import ReactDOM from "react-dom/client";

// JSX transpiled to React.createElement before it reaches to JS Engine
// Above action id done by Parcel -> Babel
const root = ReactDOM.createRoot(document.getElementById("root"));

const ParentComp = () => {
  return <div></div>;
};

root.render(<ParentComp></ParentComp>);
