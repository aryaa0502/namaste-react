//creating single h1 tag
// const heading = React.createElement("h1", {id: "heading"}, "Hello World From React");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//creating nested html elements
// const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "I'm an h1 tag!")));
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//creating sibling elements
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I'm an h1 tag!"), React.createElement("h2", {}, "I'm an h2 tag!")]
  )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
