use tauri::{AppHandle, Manager};

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use crate::copy_logic::{
    cblisten::cblisten, copy::copy_history_add, copy::del_entry, copy::get_history,
};
use std::thread;

pub mod copy_logic;

//listens to the clipbord
fn listen_to_clipbord(app: &mut tauri::App) {
    let handle = app.handle().clone();
    thread::spawn(move || {
        cblisten(handle);
    });
}
#[tauri::command]
fn hide_window(app: AppHandle) {
    println!("hiding the window");
    if let Some(main_window) = app.get_webview_window("main") {
        main_window.hide().unwrap();
    } else {
        println!("No window labeled 'main' found");
    }
}

#[tauri::command]
fn close_programe(app_handle: AppHandle) {
    println!("closing programe");
    app_handle.exit(0);
}

#[tauri::command]
fn show_window(app: AppHandle) {
    println!("window will show");
    if let Some(main_window) = app.get_webview_window("main") {
        main_window.show().unwrap();
        main_window.set_focus().unwrap();
    } else {
        println!("No window labeled 'main' found");
    }
}

//opens the window depending on a specific shortcut
fn open_window_on_global_shortcut(_app: &mut tauri::App) {
    // add the logic
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_clipboard_manager::init())
        .plugin(tauri_plugin_global_shortcut::Builder::default().build())
        .setup(|app| {
            listen_to_clipbord(app);
            open_window_on_global_shortcut(app);
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            copy_history_add,
            del_entry,
            get_history,
            close_programe,
            show_window,
            hide_window
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
