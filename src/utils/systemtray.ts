import { TrayIcon } from "@tauri-apps/api/tray";
import { Menu } from "@tauri-apps/api/menu";
import { invoke } from "@tauri-apps/api/core";

export async function setupTray() {
  const menu = await Menu.new({
    items: [
      {
        id: "show_app",
        text: "show app",
        action: async () => {
          await invoke("show_window");
        },
      },
      {
        id: "quit",
        text: "Quit App",
        action: async () => {
          await invoke("close_programe");
        },
      },
    ],
  });

  const tray = await TrayIcon.new({
    icon: "icons/CopychanSmol.png",
    id: "tray_app",
    title: "Copytrayapp",
    tooltip: "show items",
    menu,
    menuOnLeftClick: true,
  });
  console.log("tray called");
  return tray;
}
