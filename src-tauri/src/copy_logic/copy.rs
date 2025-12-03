use serde::{Deserialize, Serialize};
use std::fs::{self, File};
use std::io::{Read, Write};
use uuid::Uuid;

#[derive(Deserialize, Serialize, Debug)]
pub struct CopyBord {
    id: Uuid,
    item: String,
}
const FILE_PATH: &str = "../data/copy_data.json";
const MAX_ENTRIES: usize = 5;
// pub type CopyHistory = Vec<CopyBord>;

#[tauri::command]
pub fn copy_history_add(content: String) -> Result<(), String> {
    // generate structure 
    let new_item = CopyBord {
        id: Uuid::new_v4(),
        item: content.clone(),
    };

    // adds the directory if it's missing on the project root
    if let Some(parent) = std::path::Path::new(FILE_PATH).parent() {
        fs::create_dir_all(parent).map_err(|e| format!("Failed to create directory: {}", e))?;
    }
    
    //check and decirialize the existing json
    let mut history: Vec<CopyBord> = match File::open(FILE_PATH) {
        Ok(mut file) => {
            let mut json_str = String::new();
            if file.read_to_string(&mut json_str).is_ok() && !json_str.is_empty() {
                serde_json::from_str(&json_str).unwrap_or_else(|e| {
                    eprintln!("Error deserializing JSON: {}", e);
                    Vec::new() // Fallback to empty if deserialization fails
                })
            } else {
                Vec::new()
            }
        }
        Err(_) => {
            // File does not exist, start with an empty history
            Vec::new()
        }
    };
    history.push(new_item);

    if history.len() > MAX_ENTRIES {
        let remove_count = history.len() - MAX_ENTRIES;
        history.drain(0..remove_count); // removes oldest records
    }

    let json_string = serde_json::to_string_pretty(&history).expect("Failed to serialize to JSON");
    let mut file = File::create(FILE_PATH).expect("Failed to create file");
    file.write_all(json_string.as_bytes())
        .expect("Failed to write to file");
    Ok(())
}


//getting the enties
#[tauri::command]
pub fn get_history()->Result<Vec<CopyBord>,String>{
    let json_data = match fs::read_to_string(FILE_PATH) {
        Ok(data) => data,
        Err(_) => return Ok(vec![]), // no file -> return empty
    };
    // Parse JSON safely
    let history: Vec<CopyBord> = serde_json::from_str(&json_data)
        .map_err(|e| format!("JSON read failed: {}", e))?;

    Ok(history)
}

//delete logic
#[tauri::command]
pub fn del_entry(id: String) {
    println!("id:{} is being deleted", id);
}