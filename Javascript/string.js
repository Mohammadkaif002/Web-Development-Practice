///?toLowerCase
// let name = `Javascript`
// console.log(name);
// console.log(name.toLowerCase());

//?toUpperCase
// let name1 = "javascript"
// console.log(name1.toUpperCase());
// console.log("hello".toUpperCase());

//?toString
// let a = 123
// let a = true
// let b = [1,2,3]
// console.log(a.toString());
// console.log((123).toString());
// console.log(a.toString());
// console.log(b.toString());

//?trimStart()
// let name2 = "   javascript   "
// console.log(name2.trimStart());

//?trimEnd()
// let name3 = "   javascript   "
// console.log(name3.trimEnd());

//?trim()
// let name4 = "   javascript   "
// console.log(name4.trim());

//?replace("searchstring","replacestring")
// let name5 = "   javascript, javascript  "
// console.log(name5.replace("javascript", "Python"));

//?replaceAll("searchstring","replacestring")
// let name6 = "   javascript, javascript, Sql   "
// console.log(name6.replaceAll("javascript", "Python"));

//? slice
// var str = "jspiders"
// // console.log(str.slice(1,4));
// console.log(str.slice(1));

//?Split("seperator")
// let str1 = "javascript"
// console.log(str1.split("a"));
// console.log(str1.split("@"));

//?concat()
// const str2 = "javascript is "
// console.log(str2.concat(" a scripting language"));

//? includes("searchstring") //returns boolean values
// let str3 = "javascript"
// console.log(str3.includes("j"));
// console.log(str3.includes("scr"));

//? indexOf("string")
// let str4 = "javascript"
// console.log(str4.indexOf("j"));
// console.log(str4.indexOf("a"));
// console.log(str4.indexOf(z));

// ? lastindexOf
// let str5 = "javascript"
// console.log(str5.lastIndexOf("a"));
// console.log(str5.lastIndexOf("z"));//if not -1

//?charAt
// let str6 = "javascript"
// console.log(str6.charAt(0));
// console.log(str6.charAt(9));
// console.log(str6.charAt(10));//empty string

//? startsWith(Boolean)
// let str7 = "javascript"
// console.log(str7.startsWith("j"));

//? endsWith
// let str8 = "javascript"
// console.log(str8.endsWith("pt"));

//? repeat
// let str9 = "javascript"
// console.log(str9.repeat,(5));

//?toString
// let a = 123
// console.log(typeof a);
// console.log(typeof toString(a));


//? Function length
// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum.length);

//?sort()
// let courses = ["html","css","java","reactjs","nodejs","expressjs"]
// console.log(courses.sort());//by default asc
//to do desc just use reverse()

// let numbers = [10,2,20,30,99,900]
// console.log(numbers.sort());//can't sort number use function
// console.log(numbers.sort((a,b)=>a-b));//here it will sort using function //HOF

//? reverse()
// console.log(numbers.sort().reverse());// use function
// console.log(courses.sort().reverse());

//? reverse ()
// let str = "we will buy biriyani to sreenivas sir"
// console.log(str.split(" ").reverse().join(" "));//output: sir sreenivas to biriyani buy will we
// console.log(str.split("").reverse().join(""));//output: ris savineers ot inayirib yub lliw ew

// let str1=str.split("").reverse().join("");
// console.log(str1.split(" ").reverse().join(" "));//output: ew lliw yub inayirib ot savineers ris

//? Array Mutating-Methods
//?join ("seperator")

//? Array Advance Methods:
// let arr = [10,20,30,40,50]
// let res = arr.forEach((ele,index,array)=>{
//     console.log(ele);
//     console.log(index);
//     console.log(array);
//     return ele
// })
// console.log(res);//undefined