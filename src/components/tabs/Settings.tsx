import { disable, enable, isEnabled } from "@tauri-apps/plugin-autostart";
import { useCallback, useEffect, useState } from "react";
import { SliderButton } from "../SliderButton";
import { GrGithub } from "react-icons/gr";
import { getVersion } from "@tauri-apps/api/app";
import { BsYoutube } from "react-icons/bs";
const AppVersion = await getVersion();

const Settings = () => {
  const [isStartUpEnabled, SetStartUp] = useState<boolean>(true);
  // const [darkmode, setdarkmode] = useState<boolean>(true);
  const StartUpCheck = useCallback(async () => {
    console.log(await isEnabled());
    let isStartUpEnabled = await isEnabled();
    SetStartUp(isStartUpEnabled);
  }, [isEnabled]);

  function HandleStartUp() {
    isStartUpEnabled ? disable() : enable();
    StartUpCheck();
  }

  useEffect(() => {
    StartUpCheck();
  }, []);

  return (
    <main className="px-3">
      <section>
        <div className="flex justify-between items-center">
          <strong>Enable StartUp</strong>
          <SliderButton value={isStartUpEnabled} SetValue={SetStartUp} DoSomthing={HandleStartUp} />
        </div>
        <p className="text-[13px] mt-3 p-2 bg-blue-600/30 rounded-md">
          Automatically launches the application as soon as your operating system boots up
        </p>
      </section>
      <section className="mt-3">
        <h1 className="font-bold">ShortCuts</h1>
        <div className="flex justify-between  items-center">
          <span className="ml-3">Show the app</span>
          <input
            className="p-1 bg-blue-600/30 rounded-md text-center w-30"
            type="text"
            disabled
            value={"Ctrl+Alt+S"}
          />
        </div>
        <div className="flex justify-between  items-center mt-3">
          <span className="ml-3">Hide the app</span>
          <input
            className="p-1 bg-blue-600/30 rounded-md text-center w-30"
            type="text"
            disabled
            value={"Ctrl+Alt+X"}
          />
        </div>
        <p className="text-[13px] mt-2 p-2 bg-blue-600/30 rounded-md">
          Used to quickly open up the application <br />
        </p>
      </section>

      <footer>
        <section className="select-none flex gap-2 items-end">
          <img src={"/Copychan.png"} alt="copychan" draggable="false" />
          <div className="pb-6">
            <h1 className="text-[13px] dark:text-gray-300 text-gray-700">build {AppVersion}</h1>
            <h1>Support me</h1>
            <span className="flex gap-2">
              <a href="https://github.com/aditya-wuw/Copy-Chan" target="_blank">
                <GrGithub size={20} className="hover:text-blue-300" />
              </a>
              <a href="https://www.youtube.com/@NoFaceIsDev" target="_blank">
                <BsYoutube size={20} className="hover:text-red-500" />
              </a>
            </span>
          </div>
        </section>
      </footer>
    </main>
  );
};

export default Settings;
