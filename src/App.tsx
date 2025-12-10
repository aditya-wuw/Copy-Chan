import { useEffect, useState } from "react";
import "./App.css";
import Copy from "./components/tabs/Copy";
import Emoji from "./components/tabs/Emoji";
import Symbol from "./components/tabs/Symbol";
import { TabItem } from "./types/app.types";
import Nav from "./components/nav/Nav";
import { setupTray } from "./utils/systemtray";
import { register_shortcuts } from "./utils/globalshortcuts";

function App() {
  const [ActiveTab, SetActiveTab] = useState<TabItem>({label:"copy"});
  useEffect(() => {
    setupTray();
    register_shortcuts();
  }, []);

  return (
    <main className="container select-none">
      <Nav ActiveTab={ActiveTab} SetActiveTab={SetActiveTab} />
      <strong className="flex justify-center">{ActiveTab.label}</strong>
      <div className="content overflow-y-scroll h-100 scroll-smooth mx-1">
        {ActiveTab.label === "copy" && <Copy />}
        {ActiveTab.label === "emoji" && <Emoji />}
        {ActiveTab.label === "symbols" && <Symbol />}
      </div>
    </main>
  );
}

export default App;
