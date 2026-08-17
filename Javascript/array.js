//? array declaration
//by using [ Literals ]
// let arr = [10,"js",true,()=> {},{}, 20n, 45.5,null, undefined,[]];
// console.log(typeof arr);
// console.log(arr);
// console.log(arr[3]);

//?by using new keyword
// let arr1 = new Array(10)
// console.log(arr1);
// console.log(arr1.length);

// let arr2 = new Array(10,20)
// console.log(arr2);
// console.log(arr2.length);

//? Basic CRUD operation:
///create
// let names =['Rahul','kaif','kishore']
// console.log(names);

//?read
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

//?update
// names[0] = "sreenivas"
// console.log(names);

//?delete
// delete names[1]
// console.log(names);

// MUTATING METHODS OF ARRAY:
//? push()
// let arr = [10,20,30,40,50]
// console.log(arr.push(60,70));
// console.log(arr);

//?pop()
// console.log(arr.pop());
// console.log(arr);

//?unshift()
// console.log(arr.unshift(5,6));
// console.log(arr);

//?shift()
// console.log(arr.shift());
// console.log(arr);

//?splice()
// console.log(arr.splice(2,2));
// // console.log(arr);

//?sort()
// let arr4=["apple","ball","zomato","swiggy","instagram","zepto","minutes"]
// console.log(arr4.sort())

// let arr5=["Apple",{},"apple",()=>{},"Ball",10,"ball",30,"zomato","swiggy",40,"Instagram","zepto","Minutes"]
// console.log(arr5.sort())

// let arr4=[100,10,3,420,5];
// console.log(arr4.sort((a,b)=>a-b)); //ascending order
// console.log(arr4.sort((a,b)=>b-a))  //descending order

//?reduce(accumulator, element);
// let arr5 = [10,20,30,40,50]
// console.log(arr5.reduce((acc,ele)=>{return acc+ele}))

// console.log(arr5.map((ele)=>ele*ele).reduce((acc, ele)=>acc+ele))
// console.log(arr5.reduce((acc, ele)=>acc+ele*ele, 0))

// let names = ["a", "s", "l","m","a","c","b","c","k","b"]
// console.log(
//     names.reduce((acc, ele)=>{
//         acc[ele] = (acc[ele]||0)+1;
//         return acc;
//     },{})
// );

// 1. Move 0 to the end of the array without changing the order of other elements.
// const arr1 =[1, 3, 4, 6, 3, 9, 0, 0, 0, 0];
// const result1 = (arr1.filter(x => x != 0).concat(arr1.filter(x => x === 0)));
// console.log(result1); 

// 2. Even cube it and odd square it and return the new array
// let arr2 =[8, 5, 6, 2, 0, 7, 1, 9];
// console.log(arr2);
// console.log(arr2.map((e1)=>{
//     if(e1 %2==0)
// {
//     return e1**3
// }else{
//     return e1**2
// }}));

// 3. Reverse the string and return the new array
// let words = ['apple', 'banana', 'mango', 'watermelon', 'papaya', 'orange'];
// let result3 = words.map(str => str.split('').reverse().join(''));
// console.log(result3);

// 4. Return the length of each string in the array
// let words = ['apple', 'banana', 'mango', 'watermelon', 'papaya', 'orange'];
// let result4 = words.map(str => str.length);
// console.log(result4); 

// 5. Return the strings that end with a vowel
// let words = ['apple', 'banana', 'mango', 'watermelon', 'papaya', 'orange'];
// let result5 = words.filter(str => /[aeiou]$/i.test(str)); // easy approach
// console.log(words.filter((e1) => {
//     return "aeiou".includes(e1[e1.length - 1].toLowerCase());
// }));
// console.log(result5);

// 6. Remove duplicates from the array
// let arr6 =[1, 3, 3, 0, ,4, 4, 6, 9];
// let result6 = arr6.filter((el, i) => {
//     return arr6.indexOf(el) == i;
// });
// console.log(result6);

// 7. Capitalize the first letter of each string in the array
// let words = ['apple', 'banana', 'mango', 'watermelon', 'papaya', 'orange'];
//  result7 = words.map(el => el.charAt(0).toUpperCase() + el.slice(1));
// console.log(result7); 

// 8. Return the strings that have more than 5 characters
// let result8 = words.filter(str => str.length > 5);
// console.log(result8);

// 9. Replace all vowels in the strings with '@'
// let words = ['apple', 'banana', 'mango', 'watermelon', 'papaya', 'orange'];
// console.log(
//     words.map(str =>str.split("").map(char => ("aeiou".includes(char.toLowerCase()) ? "@" : char)).join("")
//     )
// );

// 10. Return the strings that contain at least one vowel
// let words1 = ['apple', 'banana', 'mango', 'watermelon', 'papaya', 'orange','fly','sky','try'];
// console.log(words1.filter((e1)=>{
//     return e1.toLowerCase().split("").some((ch)=>{
//         return "aieou".includes(ch)
//     })
// }));