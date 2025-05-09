const people = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];

function isMarried() {
  for (const item of people) {
    if (item.age > 25) {
      item.isMarried = true;
    } else {
      item.isMarried = false;
    }
  }
}

isMarried();
// console.log(people);

// function getNameMaxMinAge(arr) {
//   for (const i of arr) {

//   }
// }

// getNameMaxMinAge(people);

// Ikkita object berilgan ularning ba'zi kalitlari bir xil. Bir xil kalitlaridan iborat bo'lmagan yangi object hosil qiling.

// Input: obj1 = { a: 3, b: 10, c: 5, d: 7 };
// obj2 = { a: 10, d: 4, e: 6, f: 15 };
// Output: obj = {b: 10, c: 5, e: 6, f: 15};

let obj1 = { a: 3, b: 10, c: 5, d: 7 };
let obj2 = { a: 10, d: 4, e: 6, f: 15 };
let obj = {};

for (const i in obj1) {
  if (!obj2[i]) {
    obj[i] = obj1[i];
  }
}
for (const i in obj2) {
  if (!obj1[i]) {
    obj[i] = obj2[i];
  }
}

console.log(obj);
