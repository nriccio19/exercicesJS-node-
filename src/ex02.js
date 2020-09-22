let counter = 0
while (true) {
    console.log(counter)
    counter += 2
    if (counter === 102) {
        break
    }
}

// for (let counter = 0; counter === 102; counter += 2) {
//     console.log(counter)
// }
// Ne marche pas !
