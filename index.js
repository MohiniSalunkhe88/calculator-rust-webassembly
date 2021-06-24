import * as wasm from "addition";

document.querySelector('#addBtn').addEventListener('click', () => {
    let a = document.querySelector('#firstValue').value;
    let b = document.querySelector('#secondValue').value;
    if (!a && !b) {
     alert("please input values") 
     return
    } 
    let c = wasm.add(a, b)
    document.querySelector('#answerDisplay').innerHTML = c
 })

 document.querySelector('#subBtn').addEventListener('click', () => {
     let d = document.querySelector('#firstValue').value;
     let e = document.querySelector('#secondValue').value;
     if (!d && !e) {
      alert("please input values") 
      return
     } 
     let f = wasm.sub(d, e)
     document.querySelector('#answerDisplay').innerHTML = f
  })
  document.querySelector('#mulBtn').addEventListener('click', () => {
      let g = document.querySelector('#firstValue').value;
      let h = document.querySelector('#secondValue').value;
      if (!g && !h) {
       alert("please input values") 
       return
      } 
      let i = wasm.mul(g, h)
      document.querySelector('#answerDisplay').innerHTML = i
   })
   
document.querySelector('#divBtn').addEventListener('click', () => {
    let p = document.querySelector('#firstValue').value;
    let q = document.querySelector('#secondValue').value;
    if (!p && !q) {
     alert("please input values") 
     return
    } 
    let r = wasm.div(p, q)
    document.querySelector('#answerDisplay').innerHTML = r
 })
 
 document.querySelector('#moduloBtn').addEventListener('click', () => {
    let s = document.querySelector('#firstValue').value;
    let t = document.querySelector('#secondValue').value;
    if (!s && !t) {
     alert("please input values") 
     return
    } 
    let u = wasm.modulo(s, t)
    document.querySelector('#answerDisplay').innerHTML = u
 })
 
 document.querySelector('#clr').addEventListener('click', () => {
   
    document.querySelector('#answerDisplay').innerHTML = " "
 })
wasm.greet();