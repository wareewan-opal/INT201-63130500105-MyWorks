// การสลับคำ
function reverse(word) {
    var str = String(word);
    let next = '';
    for (let i = str.length - 1; i >= 0; i--) {
        next += str[i];
    }
    console.log(next);
}
reverse('Hello World');
//การแทนค่า (ตัดสระออก)
function replace(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; // การประกาศค่า
    var str = String(word);
    let next = '';
    for (let i = 0; i <= str.length; i++) {
        if (vowels.includes(str[i])) { // includes = การเช็คว่าสิ่งที่เราต้องการมั้ย
            next += '*';
        } else {
            next += str[i];
        }
    }
    console.log(next);
}
replace('Hello World');


function getVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var str = String(word);
    let vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelsCount += 1;
        }
    }
    console.log(vowelsCount);
}
getVowels('Hello World');