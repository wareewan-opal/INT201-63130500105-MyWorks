{
    let name = 'Wareewan';
    console.log(name);
} // เรียกได้เฉพาะใน {}

var name1 = 'Wareewan'; //เรียกได้ทุกที่
console.log(name1);

//Explict Conversions use Boolean , Number , String
x = 5;
y = 3;
console.log(x * y);
console.log(typeof(x)) //number
 
//function
function snoopy(a, b) {
    return (a * b);
}

let yellow = snoopy; //ให้ค่าฝั่งขวา = ฝั่งซ้าย

let snoopyResult = snoopy(10,50); //กำหนดค่าจาก snoopy(a,b) a = 10 b = 50
let snoopyResult2 = yellow(20,30); //กำหนดค่าจาก snoopy(a,b) a = 20 b = 30

// print from console.log
console.log(`Result snoopy1 : ${snoopyResult}`);
console.log(`Result snoopy2 : ${snoopyResult2}`);

let myObj = {
    id : 1,
    task : 'Grading exam'
};
let myObj2 = {
    id : 1,
    task : 'Grading exam'
};

// สร้าง newObj มีค่า address เท่ากับ myObj
// ขวา = ซ้าย
newObj = myObj; 

console.log(`newObj === myObj is : ${newObj === myObj}`); // true
console.log(`newObj === myObj is : ${newObj === myObj2}`); //false

let a = [];
let b = a;
b[0] = 1;
let c = [1];

// ถามว่า type ของ a กับ b มันเหมือนกันมั้ย แล้วเราให้ค่า b = a -> result = true
console.log(`a === b is ${a === b}`);

//
console.log(`b == c is ${b == c}`); 

console.log(b); //[1]
console.log(c); //[1]
