"use script";

const person = {
  name: "sarvar", // date-type-string
  lastname: "mehmonov",
  age: 28, // date-type-number
  wishes: [],
  languages: function () {},
  mother: {
    name: Xamida,
    lastname: kuchkarova,
  },
};

const obj = {
  name: "div",
  width: 400,
  height: 500,
  color: {
    border: "red",
    bg: "coral",
  },
};

//console.log(Object.keys(obj)); // obyektklar nomini ruyxati massiv xolatda
console.log(Object.keys(obj).length);

//console.log(obj);
//delete obj.name;
//console.log(obj);

//for (let key in obj) {
//  console.log(key);
//}

let counter = 0;

for (let key in obj) {
  if (typeof obj[key] == "object") {
    for (let i in obj[key]) {
      console.log(`property ${key} value ${obj[key][i]}`);
      counter++;
    }
  } else {
    console.log(`property ${key} value ${obj[key]}`);
    counter++;
  }
}
console.log(counter);

//metod yaratish
const newMethod = {
  makeExample: function () {
    console.log("My first method");
  },
};

newMethod.makeExample();

const option = {
  color: {
    bg: "crimson",
    color: "Blue",
  },
};

// obyekt ichidagi har bir kalit sozlar " " ichida yoziladi
//console.log(option["color"]["bg"]); // bu eski usul

const { bg, color } = option.color;
console.log(bg);
