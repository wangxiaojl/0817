// function sleep (delay) {
//     for (let start = Date.now(); Date.now() - start <= delay;) {}
// }
// console.log(1)
// sleep(3000)
// console.log(2)

// console.log(1)
// const axios = require('axios')
// function asyncFn(){
//     return new Promise((resolve)=>{
//         axios.get('https://api.github.com/users/zhengjinwei1995').then((res)=>{
//             resolve(res)
//         })
//     })
// }
// console.log(asyncFn())
// asyncFn().then((res)=>{
//     console.log(res)
// })
// console.log(3)

// Callback Hell
// setTimeout(() => {
//     console.log('3s later#1')
//     setTimeout(() => {
//         console.log('3s later#2')
//         setTimeout(() => {
//             console.log('3s later#3')
//         }, 3000);
//     },3000)
// },3000)

// Promise
// let response;
// const axios = require('axios')
// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then((res)=>{
//         response = res
//     })
//     .then(()=>{
//         console.log(response)
//     })
    // Promise chain

// Promise 写法
//
// const axios = require('axios')
// function secPromise(){
//     return new Promise((resolve, reject)=>{
//         axios.get('https://jsonplaceholder.typicode.com/posts/1')
//             .then((res)=>{
//                 resolve(res)
//             })
//             .catch((err)=>{
//                 reject(err)
//             })
//     })
// }
// 构造函数，接受一个函数作为参数，该函数的两个参数分别是resolve和reject
// secPromise().then((res)=>{
//     console.log(res)
// })
//     .catch((err)=>{
//         console.log(err)
//     })

// const a = secPromise()
// console.log(a)

// async/await
// ECMA2017d
// const axios = require('axios')
// async function asyncFn(){
//     try {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
//         console.log(res)
//     }
//     catch (err) {
//         console.log('error!', err)
//     }
// }
// asyncFn();
// console.log(1)

// const axios = require('axios')
// async function asyncFn(){
//     const a = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     const b = await axios.get('https://jsonplaceholder.typicode.com/posts/2')
//     // ...
// }
// async function asyncFn(){
//     const promises = [
//         await axios.get('https://jsonplaceholder.typicode.com/posts/1'),
//         await axios.get('https://jsonplaceholder.typicode.com/posts/2'),
//     ];
//     const [res1, res2] = await Promise.all(promises)
//     // ...
// }
// test test test
// test test test
// test test test
