// function outerFunction(callback) {
//     const name = 'John';
// //   console.log(this)
//     // Вызываем переданный колбэк
//     callback();
//   }

//   const obj = {
//     name: 'Alice',
//     printName() {
//       outerFunction(function () {
//         console.log(this);
//       });
//     }
//   };

//   obj.printName(); // Выведет 'Alice'


const obj = {
  name: 'olya',
  age: 23
}

console.log(...obj)