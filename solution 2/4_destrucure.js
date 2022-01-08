let emp = [
  {
    id: 1,
    first_name: "Peadar",
    last_name: "Arkill",
    email: "parkill0@hubpages.com",
    gender: "Male",
    salary: "$994.20",
    job: "Human Resources Manager",
  },
  {
    id: 2,
    first_name: "Stacia",
    last_name: "Tomasicchio",
    email: "stomasicchio1@blog.com",
    gender: "Female",
    salary: "$3118.68",
    job: "Paralegal",
  },
  {
    id: 3,
    first_name: "Claudina",
    last_name: "Hearley",
    email: "chearley2@amazon.de",
    gender: "Male",
    salary: "$3441.74",
    job: "Environmental Specialist",
  },
  {
    id: 4,
    first_name: "Pandora",
    last_name: "Livingstone",
    email: "plivingstone3@booking.com",
    gender: "Male",
    salary: "$3541.33",
    job: "Civil Engineer",
  },
  {
    id: 5,
    first_name: "Gabbi",
    last_name: "Dartan",
    email: "gdartan4@sohu.com",
    gender: "Male",
    salary: "$1550.07",
    job: "Human Resources Assistant IV",
  },
  {
    id: 6,
    first_name: "Benji",
    last_name: "Mathan",
    email: "bmathan5@cargocollective.com",
    gender: "Male",
    salary: "$1093.37",
    job: "Assistant Manager",
  },
  {
    id: 7,
    first_name: "Curr",
    last_name: "Semper",
    email: "csemper6@soup.io",
    gender: "Genderqueer",
    salary: "$2605.27",
    job: "Developer III",
  },
  {
    id: 8,
    first_name: "Bevan",
    last_name: "Kenchington",
    email: "bkenchington7@tinypic.com",
    gender: "Male",
    salary: "$3150.43",
    job: "Structural Analysis Engineer",
  },
  {
    id: 9,
    first_name: "Corrie",
    last_name: "Rigeby",
    email: "crigeby8@auda.org.au",
    gender: "Female",
    salary: "$575.82",
    job: "Nurse",
  },
  {
    id: 10,
    first_name: "Sherwood",
    last_name: "Mauditt",
    email: "smauditt9@cdbaby.com",
    gender: "Female",
    salary: "$2741.27",
    job: "Paralegal",
  },
  {
    id: 11,
    first_name: "Odelia",
    last_name: "Lofts",
    email: "oloftsa@soup.io",
    gender: "Male",
    salary: "$2098.50",
    job: "VP Product Management",
  },
  {
    id: 12,
    first_name: "Steffane",
    last_name: "Bunt",
    email: "sbuntb@cdbaby.com",
    gender: "Female",
    salary: "$2817.60",
    job: "Senior Developer",
  },
];

/**
 * ໃຫ້ destructuring, Array Object ຂ້າງເທີງເປັນ array object ໃຫມ່ຕາມດັ່ງລຸ່ມນີ້
 * {
 *      fullname: "Steffane Bunt",
 *      gender: "Female",
 *      salary: "$2817.60",
 *      job: "Senior Developer"
 * }
 */

let newEmp = [];

/**
 * Coding
 */

emp.forEach((e) => {
  let new_emp = {
    fullname: e.first_name + " " + e.last_name,
    gender: e.gender,
    salary: e.salary,
    job: e.job,
  };
  newEmp.push(new_emp);
});

console.log(newEmp);
/**
 * ==================================== Display ========================================
    [
        {
            fullname: 'Peadar Arkill',
            gender: 'Male',
            salary: '$994.20',
            job: 'Human Resources Manager'
        },
        <......>
        {
            fullname: 'Odelia Lofts',
            gender: 'Male',
            salary: '$2098.50',
            job: 'VP Product Management'
        },
        {
            fullname: 'Steffane Bunt',
            gender: 'Female',
            salary: '$2817.60',
            job: 'Senior Developer'
        }
    ]
 */
