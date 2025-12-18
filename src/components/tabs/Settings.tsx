import { disable, enable, isEnabled } from "@tauri-apps/plugin-autostart";
import { useCallback, useEffect, useState } from "react";
import { SliderButton } from "../SliderButton";
import { GrGithub } from "react-icons/gr";
import { BsTwitter, BsYoutube } from "react-icons/bs";

const Settings = () => {
  const [isStartUpEnabled, SetStartUp] = useState<boolean>(true);

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
    <main className="px-2 pl-5">
      <section>
        <div className="flex justify-between items-center">
          <strong>Enable StartUp</strong>
          <SliderButton value={isStartUpEnabled} SetValue={SetStartUp} DoSomthing={HandleStartUp} />
        </div>
        <p className="text-[13px] mt-2 p-2 bg-blue-600/30 rounded-md">
          Automatically launches the application as soon as your operating system boots up
        </p>
      </section>
      <section className="select-none flex gap-2 items-end">
        <img src="src-tauri/icons/Copychan.png" alt="copychan" draggable="false" />
        <div className="pb-6">
            <h1>Support me</h1>
            <span className="flex gap-2">
                <a href="https://github.com/aditya-wuw/Copy-Chan" target="_blank"><GrGithub size={20}/></a>
                <a href="https://www.youtube.com/@NoFaceIsDev" target="_blank"><BsYoutube size={20}/></a>
                <a href="https://x.com/GenzaGenza" target="_blank"><BsTwitter size={20}/></a>
            </span>
        </div>
      </section>
    </main>
  );
};

export default Settings;
