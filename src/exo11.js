let makeUnique = [1, 2, 1, 3, 2, 4, 5, 7, 5, 1]
// let sans_doublons = [...new Set(makeUnique)]
let sans_doublons = Array.from(new Set(makeUnique))
console.log(sans_doublons)
