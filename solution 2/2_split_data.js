/**
 * ຈົ່ງແຍກຂໍ້ມູນໃນ array.
 * ທີ່ເປັນຕົວເລກໃສ່ ໃນຕົວປ່ຽນ digit_collection
 * ແລະ ທີ່ເປັນຂໍ້ຄວາມໃສ່ ຕົວປ່ຽນ msg_collection.
 *
 */
let digit_collection;
let msg_collection;
let array = [14, "I ", 85, "am ", 11, "nodejs ", 10, "engineer", 99, 7];

/**
 * coding
 */

array.forEach(
  (e) => {
    if (typeof e == "number") {
      // digit_collection.push(e)
      digit_collection += e;
    } else {
      msg_collection += e;
    }
  },
  (msg_collection = ""),
  (digit_collection = 0)
);

console.log("Result: ", digit_collection);
console.log("Result: ", msg_collection);

/**
 * ==================================== Display ========================================
 *
 * Result:  226
 * Result:  I am nodejs engineer
 */
