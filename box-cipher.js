const wiredPairs = {
    'a': 11,
    'b': 21,
    'c': 31,
    'd': 41,
    'e': 51,
    'f': 12,
    'g': 22,
    'h': 32,
    'i': 42,
    'j': 52,
    'k': 52,
    'l': 13,
    'm': 23,
    'n': 33,
    'o': 43,
    'p': 53,
    'q': 14,
    'r': 24,
    's': 34,
    't': 44,
    'u': 54,
    'v': 15,
    'w': 25,
    'x': 35,
    'y': 45,
    'z': 55,
};

function box_cipher(message) {
    let messageArr = message.split('').filter(el => el !== ' ' ).map(el => wiredPairs[el]);

    let encodedArr = messageArr.join('');

    return encodedArr;
}

console.log(box_cipher('message'));