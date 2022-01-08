let z;

function Displayer() {
  console.log("Z = ", z);
}

function Calculator(x, y, displayZ) {
  setTimeout(() => {
    z = x + y;
    displayZ();
  }, 2000);
}

Calculator(5, 5, Displayer);

/**
 * ຈົ່ງແກ້ໄຂ code  ຂ້າງເທີງເພື່ອໃຫ້ໄດ້ຜົນໄດ້ຮັບທີ່ຖືກຕ້ອງ.
 *
 *  ==================================== Display ========================================
 *  Z =  10
 *
 */
