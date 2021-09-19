function zodiac(years) {
    let result = years % 12;
    switch (result) {
        case 0:
            console.log('monkey');
            break;
        case 1:
            console.log('rooster');
            break;
        case 2:
            console.log('dog');
            break;
        case 3:
            console.log('pig');
            break;
        case 4:
            console.log('rat');
            break;
        case 5:
            console.log('ox');
            break;
        case 6:
            console.log('tiger');
            break;
        case 7:
            console.log('rabbit');
            break;
        case 8:
            console.log('dragon');
            break;
        case 9:
            console.log('snake');
            break;
        case 10:
            console.log('horse');
            break;
        case 11:
            console.log('sheep');
            break;
    }
}
zodiac(1900);

function randNumber() {
    return Math.floor(Math.random() * 10) + 1; // ไม่ให้เป็นเลขทศนิยม
}
const randValue = randNumber(); // const ไม่สามารถเปลี่ยนค่าได้
//ให้ randValue มีค่าเท่ากับ randNumber()

//กำหนดตัวแปรของผู้เล่นที่เราคิดขึ้นมาเอง
let guessvalue = 5;
if (randValue >= 1 && randValue <= 10) {
    if (randValue > guessvalue) {
        console.log(`Too Low , the random num is : ${randValue}`);
    } else if (randValue < guessvalue) {
        console.log(`Too High , the random num is: ${randValue}`);
    } else console.log("You WIN!!!");
}

const pound = 0.453592;
const inches = 0.0254;

function getBMI(a, b) {
    let height = a * pound;
    let weight = b * inches;
    return weight / (height * height);
}
console.log(136.686602555 * pound);
console.log(68.11024 * inches);
console.log(getBMI(68.11024, 136.686602555));