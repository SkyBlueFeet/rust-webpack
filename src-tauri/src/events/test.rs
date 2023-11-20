pub struct Database;

#[derive(serde::Serialize)]
pub struct CustomResponse {
    message: String,
    other_val: String,
}

#[derive(serde::Serialize)]
pub struct Response {
    message: String,
}

#[tauri::command]
pub async fn my_custom_command(window: tauri::Window, number: usize) -> CustomResponse {
    // println!("Called from {}", window.label());
    // let result: Option<String> = some_other_function().await;
    // if let Some(message) = result {
    //   Ok(CustomResponse {
    //     message,
    //     other_val: number * 2,
    //   })
    // } else {
    //   Err("No result".into())
    // }

    CustomResponse {
        message: (number * 2).to_string(),
        other_val:String::from("custom_response")
    }
}
