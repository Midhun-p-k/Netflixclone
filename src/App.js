import React from "react";
import "./App.css";
import { Banner } from "./Components/Banner/Banner";
import { Navbar } from "./Components/Navbar/Navbar";
import { RawPost } from "./Components/Rawpost/RawPost";
import { originals, actions } from "./Constance/Urls";
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RawPost title="Netflix Originals" url={originals}/>
      <RawPost title="Actions" isSmall  url={actions}/>
    </div>
  );
}

export default App;
