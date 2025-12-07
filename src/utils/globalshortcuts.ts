import { invoke } from '@tauri-apps/api/core';
import { register, unregister } from '@tauri-apps/plugin-global-shortcut';

export async function register_shortcuts(shortcut:string){
    await unregister(shortcut);
    await register(shortcut,async()=>{
        await invoke("show_window");
        console.log("called shortcut show");
    })
}