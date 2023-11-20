// Prevents additional console window on Windows in release, DO NOT REMOVE!!


#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod events;

#[derive(Clone, serde::Serialize)]
struct Payload {
    message: String,
}



fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![events::test::my_custom_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// #[tauri::command]
// fn my_custom_command(invoke_message: String) {
//     println!("{}", invoke_message);
//     // "Hello from Rust!".into()
//     // invoke_message.into()
// }
