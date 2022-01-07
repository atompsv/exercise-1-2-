const https = require("https");

/**
 * 
 * ໃຫ້ສ້າງ function ສຳລັບດຶງເອົາຂໍ້ມູນຜູ້ໃຊ້ຈາກ API: 
 * endpoint:  "https://jsonplaceholder.typicode.com/users"
 * ແລ້ວ ນຳໃຊ້ໃນ execute() ໃ້ຫ້ໄດ້ຜົນລັບດັ່່ງໃນ comment.
 */
let getUser = () => {
  /**
   * coding
   * 
   * 
   */
};

let excute = async () => {
  try {
    let users = await getUser()
    /**
     * coding
     * 
     * 
     * 
     */
    console.log("Data Response: ", users);
  } catch (err) {
    console.log("Error Message: ", err);
  }
};

excute();


/**
 * ==================================== Display ========================================
    Data Response:  [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
            }
        },
        <.....>
 */