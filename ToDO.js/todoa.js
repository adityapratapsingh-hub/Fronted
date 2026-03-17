// {
//     "task" : "hii i am aditya ",
//     "id" : 1,
//     "college" : {
//         "mathura" : "gla"
//     }
// }
let jsonData = '{"name":"Rajesh","age":22}';

let obj = JSON.parse(jsonData);

console.log(obj.name); // Rajesh
console.log(obj.age);  // 22
