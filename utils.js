const charset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let key = []

export function keyGen(amount){
    for (let i = 0; i < amount; i++) {
        let randomItem = charset[Math.floor(Math.random()*57)];
        key.push(randomItem)
    }
    return key.join('');
}