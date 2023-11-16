use wasm_bindgen::prelude::*;
use web_sys::console;
// use web_sys::File;
// use web_sys::

// use gdal::errors::Result;
// use gdal::spatial_ref::{CoordTransform, SpatialRef};
// use gdal::Dataset;
// use gdal::{vector::*, DriverManager};
// use std::fs;
// use std::path::Path;

mod custom_fn;



// When the `wee_alloc` feature is enabled, this uses `wee_alloc` as the global
// allocator.
//
// If you don't want to use `wee_alloc`, you can safely delete this.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}


// This is like the `main` function, except for JavaScript.
#[wasm_bindgen(start)]
pub fn main_js() -> Result<(), JsValue> {
     // This provides better error messages in debug mode.
    // It's disabled in release mode so it doesn't bloat up the file size.
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();


    // Your code goes here!
    console::log_1(&JsValue::from_str("Hello world!"));

    // custom_fn::custom_fn::transferValueToWasm(attribute, item_size);
    
    Ok(())
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

pub fn parse_shp(){
    // 
}
