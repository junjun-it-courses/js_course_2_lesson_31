// Async

// async function f() {
//     return 1;
// }

// при запуске функции f() нам вернется промис и нам нужно обработать этот момент

// console.log(f())

// f().then(alert); // 1


// Await
// работает только внутри async–функций и его нельзя использовать в обычных функциях
// let value = await promise;


// async function f() {
//
//     let result = await new Promise((resolve, reject) => {
//         setTimeout(() => resolve("готово!"), 1000)
//     });
//
//     // let result =  promise; // будет ждать, пока промис не выполнится (*)
//
// }
// //
// f();


// Пример

// const API_URL = 'https://api.vs-dev.info/wp-json/cv/v1/home-page'
//
// async function getData(url) {
//
//     let data = fetch(url, {
//         method: 'GET',
//         headers: {
//             accept: 'application/json, text/plain, */*',
//
//         }
//     })
//
//     let response = await data;
//     response = await response.json();
//
//
//     return response;
// }
//
//
// let data = null;
// getData(API_URL)
//     .then( response => {
//         data = response
//         console.log()
//     })
