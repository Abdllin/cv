
// const person = {    
//     name: 'vlad',
//     age: "22",
//     languages: ['ru', 'en'],
//     address: {
//        city: 'ufa',
//        street: 'prospect',
//     },
//     'complex key': 'complex value',      
//     [new Date()]: 'computed value',
//     intro: [2+2],
//     foam(){
//       console.log(this.intro)
//     },
//     alert: window.alert('shluha' + [2+2]),
//     del(){
//       delete person.del
//     },
//     working: ['a', 'b', 'c', 'd'],
//     grade: true,
//     military: false,
//     mary: false,
//     stag: false,
//     beaty: false,
//   }

//   const person2 = {    
//     name: 'vlad',
//     age: "22",
//     languages: ['ru', 'en'],
//     address: {
//        city: 'ufa',
//        street: 'prospect',
//     },
//     'complex key': 'complex value',      
//     [new Date()]: 'computed value',
//     intro: [2+2],
//     foam(){
//       console.log(this.intro)
//     },
//     alert: window.alert('shluha' + [2+2]),
//     del(){
//       delete person.del
//     },
//     working: ['a', 'b', 'c', 'd'],
//     grade: true,
//     military: false,
//     mary: false,
//     stag: false,
//     beaty: false,
//   }


  // console.log(person.age, person.name)

// const {age, grade, military, stag, mary, beaty} = person

// console.log(age, grade, military, stag, mary, beaty)

//     }
    
//    const bound

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   // get area() {
//   //   return this.calcArea();
//   // }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area); // 100

// const obj = {
//   log: ['a', 'b', 3, 4, 2],
//   get foam(){
//     return this.log[this.log.length-1] + this.log[this.log.length-2]
//   },
// }
// console.log(obj.foam)



// const obj = {
//   log: ['a', 'b', 'c'],
//   get latest() {                           - синтаксис
//     return this.log[this.log.length - 1];
//   },
// };

// console.log(obj.latest);
// // Expected output: "c"

// class square {
//   constructor(height, weight) {

//   this.height = height
//   this.weight = weight
//   }

//   get area() {
//     return this.calcul()
//   }  

// calcul() {
//   return this.height * this.weight
// }
// }

// const outp = new square(10, 15)
// console.log(outp.area)




// class foo {
//   constructor(name, age, location){    // че входит 
//     this.name = name                   // биндим
//     this.age = age
//     this.location = location
//   }
//     greet(){                          // логика (обьект)
//       console.log('hello', this.name) 
//     }
//   }



//  const person1 = new foo('lexa', '22', 'ufa')     // ввод данных, (связываем переменную с вводом)

// person1.greet()     // вывод 






// function entering(PersonalAge, Graduation, Army, Stage, Married, bwt){

//   let Rating = 0

//   if (PersonalAge > 23) Rating++

//   if (Graduation === true) Rating++ 

//   if (Army === true) Rating++

//   if (Stage === true) Rating++

//   if (Married === true) Rating++

//   if (bwt === true) Rating++

//   return Rating

// }

// const {age, grade, military, stag, mary, beaty} = person

// function picking(){

// if (  entering(age, grade, military, stag, mary, beaty) > entering(person2.age, person2.grade, person2.military, person2.stag, person2.mary, person2.beaty)) return ('person')

// else return ('person2')

// }

// console.log(picking())


setInterval(()=>{
  console.log('flat')
}, 1000)

