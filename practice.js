// setTimeout (() =>{
//     console.log(" hello munna")
// },5000)


// let counter = 0;
// const counterInterval = setInterval(count,1000);
// function count(){
//     console.log(counter++)
//     if(counter >5){
//         clearInterval(counterInterval)
//     }
// }

//practice-2
// function tellJoker(){
//     console.log("jokes")
// }
// const jokerInterval = setInterval(tellJoker,2000)
// setTimeout(()=>{
//     clearInterval(jokerInterval)
// },10000)

//practice=3


async function loadUserAsync() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await res.json()
    console.log(data)
}