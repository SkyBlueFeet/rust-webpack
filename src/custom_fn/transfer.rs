use web_sys::js_sys::ArrayBuffer;

use web_sys::console;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn transfer_to_wasm(attribute: &ArrayBuffer, item_size: u32) {

    console::log_1(&JsValue::from("qwer"));
    console::log_1(&JsValue::from(attribute));
    console::log_1(&JsValue::from(item_size));
}