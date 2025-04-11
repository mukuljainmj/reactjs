/**
 * <div id="parent">
 *  <div id="child1">
 *      <h1>Hello World From React</h1>
 *  </div>
 *  <div id="child2">
 *  </div>
 * </div>
 */

const heading = React.createElement(
  "h1",
  { id: "heading", className: "heading" },
  "Hello World From React"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root, 'root');
// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, 
  [React.createElement("div", { id: "child" }, heading), React.createElement("div", { id: "child2" })],
);
console.log(parent);
root.render(parent);
