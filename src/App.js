import React from "react";
import logo from "./logo.svg";
import HelloWorld from "./Components/HelloWorld";
import Hobbies from "./Components/Hobbies";

function App() {
  return (
    <>
      <h1>This is my first website</h1>
      <p>Hi! My I'm Mau and this is my website. I like a lot of stuff like: </p>
      <HelloWorld />
      <Hobbies hobbies={["Programming", "Soccer", "Bass Guitar"]} />
    </>
  );
}

export default App;
