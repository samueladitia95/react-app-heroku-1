import React from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import User from "./components/User";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Counter />
      <hr />
      <User />
    </div>
  );
};

export default App;
