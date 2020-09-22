var arr = [99, 100, 101, 1]
var max = arr.reduce(function (a, b) {
    return Math.max(a, b)
})

//const Biggest = [99, 100, 101, 1]
// function getMaxTableau(Biggest) {
//     return Math.max.apply(null, Biggest)
// }
console.log(max)
