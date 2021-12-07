export function getAllCookie() { // return all cookie -> String (How much Key , Value)
    return document.cookie.split('; '); // A = a ;  B = b -> a 1 b 1 (a=a b=b)
}
export function getKey(i) {
    let arrayOfKeyCookie = [];
    let index = 0;
    getAllCookie().forEach((i) => {
        let key = i.split('='); // [A=a] -> [A,a]
        arrayOfKeyCookie[index++] = key[0];
    })
    return arrayOfKeyCookie[i]; //-> Key[index]
}
export function getValue(keys) {
    for (let i of getAllCookie()) {
        let key = i.split('='); // [A=a] -> [A,a]
        if (key[0] == keys) { return key[1]; }
    }
}
export function deleteData() { //ลบของใน cookie
    for (let i = getAllCookie().length - 1; i >= 0; i--) {
        setCookie(getKey(i), getValue(getKey(i)), 'Thu, 21 Aug 2014 20:00:00 UTC')
    }
}

export function setCookie(key, value, expires = new Date(9999, 0, 1).toUTCString()) { document.cookie = `${key} = ${value} ; expires= ${expires}` }
// new Date(9999,0,1) -> 1 week0