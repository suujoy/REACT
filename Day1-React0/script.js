
const realRoot = document.querySelector("#root");

const rh1 = React.createElement(
    "h1",
    { className: "sujoy" },
    "This is virtual dom",
);

const root = ReactDOM.createRoot(realRoot);

root.render(rh1);
