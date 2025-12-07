import { useEffect, useState } from "react";
import "./App.css";
import Copy from "./components/tabs/Copy";
import Emoji from "./components/tabs/Emoji";
import Symbol from "./components/tabs/Symbol";
import { Tab } from "./types/app.types";
import Nav from "./components/nav/Nav";
import { invoke } from "@tauri-apps/api/core";
import { setupTray } from "./utils/systemtray";
import { register_shortcuts } from "./utils/globalshortcuts";

function App() {
  const [ActiveTab, SetActiveTab] = useState<Tab>("copy");
  function HandleClose() {
    invoke("hide_window");
  }

  useEffect(() => {
    setupTray();
    register_shortcuts("Control+Alt+X");
  }, []);  

  return (
    <main className="container">
      <div className="flex justify-between">
        <Nav ActiveTab={ActiveTab} SetActiveTab={SetActiveTab} />
        <button className="px-5 hover:bg-red-500" onClick={HandleClose}>
          close
        </button>
      </div>
      <div className="content overflow-y-scroll h-screen scroll-smooth">
        {ActiveTab === "copy" && <Copy />}
        {ActiveTab === "emoji" && <Emoji />}
        {ActiveTab === "symbols" && <Symbol />}
      </div>
    </main>
  );
}

export default App;
