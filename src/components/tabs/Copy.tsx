import { useEffect, useState } from "react";
import { history } from "../../types/app.types";
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { getCurrentWindow } from "@tauri-apps/api/window";
const appWindow = getCurrentWindow();

const Copy = () => {
  const [History, setHistory] = useState<history[]>([]);
  async function HandleClipbord(item: string) {
    await navigator.clipboard.writeText(item);
    await appWindow.hide();
  }

  async function fetchHistory() {
    //fetches all the text from the text
    let history: history[] = await invoke("get_history");
    setHistory(history.reverse());
  }

  async function removeHistory(id: string) {
    //logic for removing
    setHistory(History.filter((prev) => prev.id != id));
    await invoke("del_entry", { id: id });
  }

  listen("clipboard-changed", async () => {
    fetchHistory();
  });

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <main className="mr-1">
      {History.length === 0 ? (
        <span className="flex justify-center">no history</span>
      ) : (
        History.map((i) => (
          <div key={i.id} className="flex justify-between m-2 items-start">
            <div
              className="p-3 mt-2 bg-blue-500/20  hover:bg-blue-500 hover:text-white w-75 max-h-27 line-clamp-4 overflow-hidden rounded-md cursor-pointer"
              onClick={() => HandleClipbord(i.item)}
            >
              {i.item}
            </div>
            <button className="p-2 h-fit rounded-md" onClick={() => removeHistory(i.id)}>
              <RiDeleteBin6Fill size={17} className="hover:text-red-500 hover:scale-130" />
            </button>
          </div>
        ))
      )}
    </main>
  );
};

export default Copy;
