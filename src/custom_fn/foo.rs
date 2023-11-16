use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Foo {
    contents: u32,
}

#[wasm_bindgen]
impl Foo {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Foo {
        Foo { contents: 0 }
    }

    pub fn get_contents(&self) -> u32 {
        self.contents
    }
}