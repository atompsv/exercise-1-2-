/**
 * ຈົ່ງແກ້ໄຂ function workOne, workTwo, workThree ໃຫ້ສະແດງຜົນໄດ້ຮັບທີ່ກຳນົດ
 * ເມື່ອ run execute().
 */

function workOne() {
  return new Promise((res) => {
    setTimeout(function () {
      res("work 1");
    }, 5000);
  });
}
function workTwo() {
  return new Promise((res) => {
    setTimeout(function () {
      res("work 2");
    }, 100);
  });
}
function workThree() {
  return new Promise((res) => {
    setTimeout(function () {
      res("work 3");
    }, 1000);
  });
}

let execute = async () => {
  console.log(await workOne());
  console.log(await workTwo());
  console.log(await workThree());
};

execute();

/**
 *  ==================================== Display ========================================
 *  work 1
 *  work 2
 *  work 3
 */
