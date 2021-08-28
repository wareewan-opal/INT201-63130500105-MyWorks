// การประกาศตัวแปร
// var สามารถเรียกใช้ซ้ำได้ สามารถใช้ได้ทั้งนอก และ ใน {}
var a = 10;
console.log(a) // 10 

let kiki = 'Hello';
kiki = 'Hi';

function haha() {
    let x = ' Opal'
    let kiki = ' Wareewan'
    console.log(`kiki -> ${kiki}`); // Wareewan
}

haha();
console.log(kiki); // hi

// const kiki = 'My name is Zuzie'; 
// // เป็นตัวแปรที่ไม่สามารถเรียกใช้ซ้ำได้ 

//การเก็บค่า Array
let myary = [1, 2, 3, 4];
console.log(`length myary : ${myary.length}`);

// คำสั่งเช็ค type 
typeof(myary);

//Explicit Conversions
Number('5'); //  5
String(false); // "false"
Boolean([]); //  true