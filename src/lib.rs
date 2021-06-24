mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, Calculator!");
}

#[wasm_bindgen]
pub fn add(a: i32,b: i32)->i32 {
    let sum:i32 = a+b;
    return sum;
}

#[wasm_bindgen]
pub fn sub(d: i32,e: i32)->i32 {
    let substate:i32 = d-e;
    return substate;
}

#[wasm_bindgen]
pub fn mul(g: i32,h: i32)->i32 {
    let multiplication:i32 = g*h;
    return multiplication;
}

#[wasm_bindgen]
pub fn div(p: f64,q: f64)->f64 {
    let division:f64 = p/q;
    return division;
}

#[wasm_bindgen]
pub fn modulo(s: i32,t: i32)->i32 {
    let m:i32 = s%t;
    return m;
}
