/**
 * ຈົ່ງຂຽນ function ຫາຈຳນວນຄີກ ແລະ ຈຳນວນຄູ່ທີ່ຢູ່ໃນ array.
 */

let arr = [3, 4, 66, 32, 34, 66, 33, 40, 23, 45, 10]

// coding

/**
 * ==================================== Display ========================================
 * Odd: [3, 33, 23, 45]
 * Even: [4, 66, 32, 34, 66, 40, 10]
 */

let odd = []
let even = []


arr.forEach(e => {
    let val = Number(e)
    if (e%2 == 0) {
        odd.push(val)
    } else {
        even.push(val)
    }
})

console.log(`Odd: `, odd)
console.log(`Even: `, even)