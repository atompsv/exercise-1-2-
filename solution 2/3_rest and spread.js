/**
 * ຈົ່ງຂຽນ code ຮັບcommand-line arguments ຈາກ terminal.
 * ແລ້ວສ້າງຂໍ້ຄວາມຕອບກັບ.
 */

const process = require("process");

/**
 * coding
 */
let names = process.argv.slice(2);

let greeting = (...args) => {
  let arr = [...args];
  arr.forEach((e) => {
    console.log(`Hello,  ${e}`);
  });
};

greeting(...names);

/**
 * $> node '.\3_rest and spread.js' Alexandro  Valencia   Emelyne
 *
 * ==================================== Display ========================================
 * Hello,  Alexandro
 * Hello,  Valencia
 * Hello,  Emelyne
 */
