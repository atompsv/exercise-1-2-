/**
 * ຈົ່ງຂຽນ function ຫາຜົນລວມຂອງ 2 ຈຳນວນ. (ຂຽນໃນຮູບແບບຂອງ Arrow Function)
 */

 let first = 32
 let second = 55
 
 // coding


// ແບບທີ່ 1
  let sum = (...args) => {
    let total = 0
    for (let i = 0; i < args.length; i++) {
      total += args[i]
    }
    return total
  }

  console.log(sum(first, second));

// ແບບທີ່ 2
let s = (a, b) => a + b
console.log(s(first, second));s
