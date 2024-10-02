console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3);
}, 3000);
console.log(4);
console.log(5);
console.log(6 );


let number = 0;
 const clockId = setInterval(() =>{
    number++;
    if(number >10){
        clearInterval(clockId)
    }
console.log( clockId,number)
},2000)
// interval off = clearInterval(clockId)

// console.log(1)
// console.log(2)
// console.log(3)
// setTimeout(() =>{
//     console.log(4) 
    
// },4000)
// console.log(5)

// let number = 0;
// const interval = setInterval(() =>{
// number++
// if(number >16
    
// ){
//     clearInterval(interval,number)
// }
// console.log(number)
// },2000)