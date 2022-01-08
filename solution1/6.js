let students = [
  {
    id: 1,
    first_name: "Marita",
    last_name: "Mustill",
    pass: false,
  },
  {
    id: 2,
    first_name: "Berenice",
    last_name: "Buckoke",
    pass: false,
  },
  {
    id: 3,
    first_name: "Charlene",
    last_name: "Andriesse",
    pass: false,
  },
  {
    id: 4,
    first_name: "Anatola",
    last_name: "Hutchence",
    pass: true,
  },
  {
    id: 5,
    first_name: "Delphine",
    last_name: "Leguay",
    pass: false,
  },
  {
    id: 6,
    first_name: "Conny",
    last_name: "Blodgett",
    pass: true,
  },
];

/**
 * ໃຫ້ຂໍ້ມູນຂອງນັກຮຽນ ດັ່ງຂ້າງເທີງ. ຈົ່ງຂຽນ code ສະແດງນັກຮຽນທີ່ສອບເສັງຜ່ານ.
 */

// coding


for (let i = 0; i < students.length; i++) {
  if (students[i].pass == true) {
      console.log(students[i]);
  }
}
