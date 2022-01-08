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

  const findNum = (arr) => {
    let even = []
    let odd = []
    for (let i = 0; i < arr.length; i++) { // 
        if (arr[i] % 2 == 0) {
           even.push(arr[i]) 
        } else {
            odd.push(arr[i]) 
        }
    }
    
    console.log("Odd: " ,odd)
    console.log("Even: " , even)
}

findNum(arr)