// const obj ={
//     name : "JSP",
//     age: 23,
//     fees : 35000
// }

//? OBJECTS METHODS
// obj.fees=30000
// console.log(obj);

// obj.branch = "BTM"
// console.log(obj);

// obj = "jsp" // ERROR BECAUSE obj is a constant variable and cannot be reassigned to a different value.

//? OBJECT.SEAL()
// Object.seal(obj)
// obj.name = "JSPIDERS"
// console.log(obj);
// delete obj.age// AFTER SEAL CANNOT MODIFY.
// console.log(obj);

// ? OBJECT.FREEZE()
// Object.freeze(obj)// TRICKY WITH ISSEALED
// obj.branch = "btm"
// console.log(obj);// AFTER FREEZE CANNOT MODIFY OR ADD OR DELETE.

//? OBJECT.ASSIGN
// let obj = {
//     name: "pen",
//     price: 10,
//     color:"red"
// }

// let obj1={
//     brand:"cello",
//     type:"ball-point"
// }
// console.log(Object.assign({},obj,obj1));// 1ST ARGUMENT SHOULD EMPTY OBJECT.

//?isSealed
// console.log(Object.isSealed(obj));
// console.log(Object.isFrozen(obj));

//? DATE OBJECT
// let today = new Date()
// console.log(today);
// console.log(typeof today);//OBJECT
// console.log(today.toDateString());//ONLY DATE

// console.log(today.getDate());
// console.log(today.getDay());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getMonth());
// console.log(today.getMilliseconds());

//? CREATE CUSTOM DATE
// let customDate = new Date("2026-5-13")
// console.log(customDate);

// customDate.setFullYear(2026,2,12)
// console.log(customDate);// IT EXTENDS 1 AND PRINT MARCH.

// let differences = Date.now()
// console.log(differences);
// console.log(differences/1000);
// console.log(differences/1000/60);







