//? Normal Global Execution Context also with closure
// var a = 10
// let b = 20
// const c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// function demo(a,b){
//     var x = 40
//     let y = 50
//     const z = 60
//     console.log("demo");
//     function jsp(){
//         console.log("jspiders");
//         return x + y + z
        
//     }
//     jsp()
    
// }
// demo(10,20)

//?Function Counter ( Interview Question ) 
function counter(){
    let count = 0
    function incCount(){
        count++;
        console.log(count);
        
    }
    return incCount;
}
let res=counter();
res()
res()
res()
res()
res()

