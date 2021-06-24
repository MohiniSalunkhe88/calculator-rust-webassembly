import * as wasm from './addition_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
export function greet() {
    wasm.greet();
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function add(a, b) {
    var ret = wasm.add(a, b);
    return ret;
}

/**
* @param {number} d
* @param {number} e
* @returns {number}
*/
export function sub(d, e) {
    var ret = wasm.sub(d, e);
    return ret;
}

/**
* @param {number} g
* @param {number} h
* @returns {number}
*/
export function mul(g, h) {
    var ret = wasm.mul(g, h);
    return ret;
}

/**
* @param {number} p
* @param {number} q
* @returns {number}
*/
export function div(p, q) {
    var ret = wasm.div(p, q);
    return ret;
}

/**
* @param {number} s
* @param {number} t
* @returns {number}
*/
export function modulo(s, t) {
    var ret = wasm.modulo(s, t);
    return ret;
}

export function __wbg_alert_a7322b74138deee7(arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
};

