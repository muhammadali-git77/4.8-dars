//1. Quyidagi objectni outputdagi ko'rinishda chiqaring. (toString, join)
console.log("1  ------------------------");

// Input:
// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };
// Output:
// firstName: Abdulaziz
// lastName: Toshpulatov
// age: 23
// languages: js,python,c++,nodejs
// friend

const me = {
  firstName: "Abdulaziz",
  lastName: "Toshpulatov",
  age: 23,
  languages: ["js", "python", "c++", "nodejs"],
  friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
};

for (const item in me) {
  console.log(`${item}: ${me[item]}`);
}

//2. Kalitlari 1 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvatratiga teng object hosil qiling. (for)

// Input: 5
// Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
console.log("2  ------------------------");

let obj = {};
function createObj(inp) {
  for (let i = 1; i <= inp; i++) {
    obj[i] = i ** 2;
  }
  console.log(obj);
}
createObj(6);

//3. 2-misoldan hosil bo’lgan objectning kalitlari va qiymatlari yig’indisini toping. (Object.keys(), Object.values())
console.log("3  ------------------------");

let counterK = 0;
let counterV = 0;

for (const i in obj) {
  counterK += Number(i);
  counterV += obj[i];
}

console.log(counterK + counterV);

//4. Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for)
// Input: ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"]
// Output: {"Abdulaziz": 9, "Safarmurod": 10, "O’rol": 5, "Jahongir": 8}
console.log("4  ------------------------");

let arr = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
let objNames = {};

for (const item of arr) {
  objNames[item] = item.length;
}

console.log(objNames);

//5. Shunday object berilganki, uning kalitlari mahsulotlardan va qiymatlari esa ularning narxlaridan tuzilgan. Barcha mahsulot qancha turishini toping. (Object.values())

// Input: {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000}
// Output: 50000
console.log("5  ------------------------");

let objProduct = { Apelsin: 10000, Olma: 12000, Mandarin: 8000, Banan: 20000 };

let productCounter = 0;
for (const i in objProduct) {
  productCounter += objProduct[i];
}

console.log(productCounter);

//8. Bir necha takrorlanuvchi sonlar ishtirok etgan massivdan shunday obyekt hosil qilingki, bu object kalitlari massivning takrorlanmas sonlaridan, qiymatlari esa o’sha sonlarning massivda necha marta ishtirok etganidan tuzilgan bo’lsin. (for)

// Input: [ 7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9 ]
// Output: { 7: 3, 8: 2, 4: 3, 5: 3, 9: 1 }
console.log("8  ------------------------");

let arr8 = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
let obj8 = {};

for (let i = 0; i < arr8.length; i++) {
  let nums = arr8[i];

  if (obj8[nums]) {
    obj8[nums]++;
  } else {
    obj8[nums] = 1;
  }
}

console.log(obj8);

//9. Uzun sondan shunday obyekt hosil qilingki, bunda object kalitlari sinflardan, qiymatlari esa o’sha sonning mos ravishdagi o’sha sinfdagi qiymatlaridan tuzilgan bo’lsin. (for, slice)

// Input: 8945472985629;
// Output: { birlar: 629, minglar: 985, millionlar: 472, milliardlar: 945, trilionlar: 8 }
console.log("9  ------------------------");

console.log("1234".slice(-3));

let int = 8945472985629;
let intObj = {};
int = String(int);
int = int.split("").reverse().join("");
for (let i = 0; i <= int.length; i++) {}
//Qila olmadim.
console.log(intObj);
console.log(int);

//10. Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.
console.log("10  ------------------------");

const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    alreadyRead: false,
  },
  {
    title: "Dunyo ishlari",
    author: "O'tkir Hoshimov",
    alreadyRead: true,
  },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattoh Abu G'udda",
    alreadyRead: false,
  },
];
// map variant
// books.map((item) => {
//   console.log(
//     `${item.author}ning "${item.title}" kitobi o'qil${
//       item.alreadyRead ? "ma" : ""
//     }gan`
//   );
// });

// for
for (const item of books) {
  console.log(
    `${item.author}ning "${item.title}" kitobi ${
      item.alreadyRead ? "o'qilmagan" : "o'qilgan"
    }`
  );
}

//11. Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.
console.log("11  ------------------------");

const products = [
  { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
  { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
  { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
  { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
  { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
];

for (const item of products) {
  console.log(
    (item.price - item.price * (item.quantity / 100)) * item.discount
  );
}

//12. Objectning kalitlaridan va qiymatlaridan iborat bo'lgan massiv tuzing.

// Input: const obj = {
//   "it": 20,
//   "mushuk": 10,
//   "sigir": 200,
//   "tovuq": 2
// }
// Output: ["it", 20, "mushuk", 10, "sigir", 200, "tovuq", 2]
console.log("12  ------------------------");

const objCreateArray = {
  it: 20,
  mushuk: 10,
  sigir: 200,
  tovuq: 2,
};

let arrCreateArray = [];

for (const item in objCreateArray) {
  arrCreateArray.push(item, objCreateArray[item]);
}

console.log(arrCreateArray);

//13. GPA ni hisoblovchi dastur tuzing.

// GPA = (grade1 * kredit1 + grade2 * kredit2 + ...) / (kredit1 + kredit2 + ...)
console.log("13  ------------------------");

const grades = [
  { name: "Fizika", grade: 4, kredit: 6 },
  { name: "Matematika", grade: 5, kredit: 6 },
  { name: "Tarix", grade: 4, kredit: 4 },
  { name: "Dasturlash", grade: 5, kredit: 8 },
  { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
];

let counterGrades = 0;
let counterKredit = 0;
let gpa = 0;

for (const grade of grades) {
  counterGrades += grade.grade * grade.kredit;
  counterKredit += grade.kredit;
}
gpa = counterGrades / counterKredit;

console.log(counterGrades);
console.log(counterKredit);
console.log(gpa);

//14. Abdulaziz Programmer nechta to'g'ri va noto'g'ri javob topganligini toping.
console.log("14  ------------------------");

const rightAnswers = {
  1: "B",
  2: "A",
  3: "C",
  4: "D",
  5: "B",
  6: "C",
  7: "A",
  8: "D",
  9: "A",
  10: "B",
};
const myAnswers = {
  1: "C",
  2: "A",
  3: "D",
  4: "D",
  5: "B",
  6: "C",
  7: "B",
  8: "C",
  9: "A",
  10: "C",
};

let rightAnswerCounter = 0;
let unrightAnswerCounter = 0;

for (const answer in myAnswers) {
  if (myAnswers[answer] == rightAnswers[answer]) {
    rightAnswerCounter++;
  } else {
    unrightAnswerCounter++;
  }
}

console.log("To'g'ri javob: ", rightAnswerCounter, "ta");
console.log("Noto'g'ri javob: ", unrightAnswerCounter, "ta");

//15. Qiymatlari sonlardan iborat obj nomli object berilgan. Qiymatlarini n martaga oshiruvchi getMultipleValues(n) nomli funksiya yozing.

// Input:  let n = 3
// const obj = { a: 2, b: 3, c: 4, d: 6 };
// Output:  const res = { a: 6, b: 9, c: 12, d: 18 }
console.log("15  ------------------------");

// let n = 3;
const nObj = { a: 2, b: 3, c: 4, d: 6 };
const nRes = {};

function nFunc(n) {
  for (const key in nObj) {
    nRes[key] = nObj[key] * n;
  }
  return nRes;
}

console.log(nFunc(2));

//16. Quyidagi obyektdan destructing orqali barcha qiymatlarini oling.
console.log("16  ------------------------");

const product16 = {
  type: "Iphone 14",
  company: {
    name: "Apple",
    price: "200 mlrd",
    founder: {
      firstName: "Steve",
      lastName: "Jobs",
      birthDate: 1950,
    },
  },
};

const {
  type,
  company: {
    name,
    price,
    founder: { firstName, lastName, birthDate },
  },
} = product16;

console.log(type, name, price, firstName, lastName, birthDate);

// PUPILS MASSIVI
const pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];

//17. Quyidagi massivdagi barcha o'quvchilarni protcentlarining o'rtacha qiymatini toping, shuningdek, objectlarga quyidagi propertylarni qo'shib yangi massiv qaytaring.
console.log("17  ------------------------");

let pupilsNewArr = [];

function pupilsCreateNewArr() {
  let counterMedium = 0;

  for (const item of pupils) {
    counterMedium += item.protcent;
  }

  counterMedium /= pupils.length;
  let medimprotcent = Number(counterMedium.toFixed(2));

  for (const i of pupils) {
    pupilsNewArr.push({
      ...i,
      medimprotcent,
    });
  }
}

pupilsCreateNewArr();

console.log(pupilsNewArr);

//18. grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90 o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan holatlarda 2 bahoni o'zlashtiring.
console.log("18  ------------------------");

for (const item of pupilsNewArr) {
  if (item.protcent >= 90) {
    item["grade"] = 5;
  } else if (item.protcent >= 80) {
    item["grade"] = 4;
  } else if (item.protcent >= 70) {
    item["grade"] = 3;
  } else {
    item["grade"] = 2;
  }
}

console.log(pupilsNewArr);

//19. isPassed propertyga protcent 70 dan o'tsa va teng bo’lsa true, aks holda false qiymat o'zlashtirilsin.
console.log("19  ------------------------");

for (const item of pupilsNewArr) {
  if (item.protcent >= 70) {
    item.isPassed = true;
  } else {
    item.isPassed = false;
  }
}

console.log(pupilsNewArr);

//20. Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham hisoblang.
console.log("20  ------------------------");

let passed = 0;
let unpassed = 0;

for (const item of pupilsNewArr) {
  if (item.isPassed) {
    passed++;
  } else {
    unpassed++;
  }
}

console.log(
  `${passed} nafar o'quvchi imtihondan o'tdi, ${unpassed} nafari yiqildi.`
);
