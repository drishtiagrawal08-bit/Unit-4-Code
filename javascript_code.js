// Each example is inside a { } block so everything runs in one file without redeclaration errors.
// Run: node javascript_code.js

// ---------- Basics ----------
{
  console.log("Hello JavaScript");
  console.log(10 + 20);
}

// ---------- Comments ----------
{
  // single-line comment
  /*
    multi-line
    comment
  */
  console.log("Hello");
}

// ---------- var, let, const ----------
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a, b, c);

  let x = 10;
  x = 20;
  console.log(x);

  const y = 10;
  // y = 20; // Error: const cannot be reassigned
}

// ---------- Scope ----------
{
  // global
  let college = "United University";
  function show() {
    console.log(college);
  }
  show();

  // function scope
  function test() {
    let x = 10;
    console.log(x);
  }
  test();
  // console.log(x); // Error

  // block scope
  if (true) {
    let x = 10;
    const y = 20;
    console.log(x, y);
  }
  // console.log(x); // Error

  // var vs let
  if (true) {
    var p = 10;
    let q = 20;
  }
  console.log(p); // 10
  // console.log(q); // Error
}

// ---------- Scope chain ----------
{
  let college = "United University";
  function teacher() {
    let subject = "JavaScript";
    function lecture() {
      let topic = "Scope";
      console.log(college);
      console.log(subject);
      console.log(topic);
    }
    lecture();
  }
  teacher();
}

// ---------- Data types ----------
{
  let name = "Rahul";
  let age = 20;
  let passed = true;
  let x;
  let y = null;
  console.log(typeof name);
  console.log(typeof age);
  console.log(typeof passed);
  console.log(typeof x);
  console.log(typeof y);

  let big = 12345678901234567890n;
  let id = Symbol("id");
  console.log(big, id);
}

// ---------- Primitive vs reference ----------
{
  let a = 10;
  let b = a;
  b = 20;
  console.log(a); // 10
  console.log(b); // 20

  let student1 = { name: "Rahul" };
  let student2 = student1;
  student2.name = "Amit";
  console.log(student1.name); // Amit
}

// ---------- Type conversion ----------
{
  let x = "10";
  console.log(typeof x);
  let y = Number(x);
  console.log(y);
  console.log(typeof y);

  console.log(String(100));
  console.log(Number("100"));
  console.log(Boolean(1));
  console.log(Boolean(0));
}

// ---------- Operators ----------
{
  let a = 10;
  let b = 3;
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a % b);
  console.log(a ** b);

  let x = 10;
  x++;
  console.log(x);
  x--;
  console.log(x);
}

// ---------- Assignment operators ----------
{
  let x = 10;
  x += 5;
  console.log(x);
  x -= 2;
  console.log(x);
  x *= 2;
  console.log(x);
  x /= 2;
  console.log(x);
}

// ---------- Comparison ----------
{
  console.log(10 > 5);
  console.log(10 < 5);
  console.log(10 >= 10);
  console.log(10 == "10");  // true
  console.log(10 === "10"); // false
}

// ---------- Logical ----------
{
  let age = 20;
  let student = true;
  console.log(age >= 18 && student);
  console.log(age >= 18 || student);
  console.log(!student);
}

// ---------- if ----------
{
  let marks = 75;
  if (marks >= 40) {
    console.log("Pass");
  }
}

// ---------- if...else ----------
{
  let marks = 35;
  if (marks >= 40) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

// ---------- else if ----------
{
  let marks = 78;
  if (marks >= 90) {
    console.log("A+");
  } else if (marks >= 75) {
    console.log("A");
  } else if (marks >= 60) {
    console.log("B");
  } else if (marks >= 40) {
    console.log("C");
  } else {
    console.log("Fail");
  }
}

// ---------- Ternary ----------
{
  let age = 20;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }

  let result = age >= 18 ? "Adult" : "Minor";
  console.log(result);
}

// ---------- switch ----------
{
  let day = 2;
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    default:
      console.log("Invalid day");
  }
}

// ---------- for loop ----------
{
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

// ---------- while ----------
{
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
}

// ---------- do...while ----------
{
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);

  // while: nothing runs if the condition is false
  let j = 10;
  while (j < 5) {
    console.log(j);
  }

  // do...while: runs at least once
  let k = 10;
  do {
    console.log(k);
  } while (k < 5);
}

// ---------- break ----------
{
  for (let i = 1; i <= 10; i++) {
    if (i == 5) {
      break;
    }
    console.log(i);
  }
}

// ---------- continue ----------
{
  for (let i = 1; i <= 5; i++) {
    if (i == 3) {
      continue;
    }
    console.log(i);
  }
}

// ---------- Functions ----------
{
  function greet() {
    console.log("Hello Students");
  }
  greet();
}

// ---------- Parameters ----------
{
  function greet(name) {
    console.log("Hello " + name);
  }
  greet("Rahul");
  greet("Amit");
}

// ---------- Return ----------
{
  function add(a, b) {
    return a + b;
  }
  let result = add(10, 20);
  console.log(result);
}

// ---------- Function expression ----------
{
  const add = function (a, b) {
    return a + b;
  };
  console.log(add(10, 20));
}

// ---------- Arrow function ----------
{
  const add = (a, b) => {
    return a + b;
  };
  console.log(add(10, 20));

  const add2 = (a, b) => a + b;
  console.log(add2(10, 20));
}

// ---------- Arrays ----------
{
  let students = ["Rahul", "Amit", "Neha"];
  console.log(students);
  console.log(students[0]);
  console.log(students[1]);

  // modify
  students[1] = "Priya";
  console.log(students);
}

// ---------- Array methods ----------
{
  let students = ["Rahul", "Amit"];
  students.push("Neha");
  console.log(students);
  students.pop();
  students.shift();
  students.unshift("Priya");
  console.log(students);
}

// ---------- Array length ----------
{
  let numbers = [10, 20, 30, 40];
  console.log(numbers.length);
}

// ---------- Loop through array ----------
{
  let students = ["Rahul", "Amit", "Neha"];
  for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
  }

  // for...of
  for (let student of students) {
    console.log(student);
  }
}

// ---------- forEach ----------
{
  let numbers = [10, 20, 30];
  numbers.forEach(function (number) {
    console.log(number);
  });
  numbers.forEach(number => console.log(number));
}

// ---------- map ----------
{
  let numbers = [1, 2, 3, 4];
  let squares = numbers.map(function (number) {
    return number * number;
  });
  console.log(squares); // [1, 4, 9, 16]
}

// ---------- filter ----------
{
  let marks = [35, 67, 89, 42, 25];
  let passed = marks.filter(function (mark) {
    return mark >= 40;
  });
  console.log(passed);
}

// ---------- find ----------
{
  let marks = [35, 67, 89, 42];
  let result = marks.find(mark => mark > 80);
  console.log(result);
}

// ---------- reduce ----------
{
  let numbers = [10, 20, 30, 40];
  let total = numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
  console.log(total);
}

// ---------- Strings ----------
{
  let name = "JavaScript";
  console.log(name.length);
  console.log(name.toUpperCase());
  console.log(name.toLowerCase());
  console.log(name.charAt(0));

  let text = "Hello JavaScript";
  console.log(text.includes("Java"));
  console.log(text.startsWith("Hello"));
  console.log(text.endsWith("Script"));
  console.log(text.indexOf("Java"));
}

// ---------- Template literals ----------
{
  let name = "Rahul";
  let age = 20;
  console.log("My name is " + name + " and my age is " + age);
  console.log(`My name is ${name} and my age is ${age}`);
}

// ---------- Objects ----------
{
  let student = {
    name: "Rahul",
    age: 20,
    course: "BCA"
  };
  console.log(student.name);
  console.log(student.age);
  console.log(student.course);
}

// ---------- Object method ----------
{
  let student = {
    name: "Rahul",
    greet: function () {
      console.log("Hello " + this.name);
    }
  };
  student.greet();
}

// ---------- Add / delete property ----------
{
  let student = {
    name: "Rahul",
    age: 20
  };
  student.city = "Prayagraj";
  delete student.age;
  console.log(student);
}

// ---------- Nested objects ----------
{
  let student = {
    name: "Rahul",
    address: {
      city: "Prayagraj",
      state: "UP"
    }
  };
  console.log(student.address.city);
}

// ---------- Destructuring ----------
{
  let student = {
    name: "Rahul",
    age: 20
  };
  let { name, age } = student;
  console.log(name);
  console.log(age);
}

// ---------- Spread ----------
{
  let a = [1, 2, 3];
  let b = [...a, 4, 5];
  console.log(b);

  let student = {
    name: "Rahul",
    age: 20
  };
  let updatedStudent = {
    ...student,
    age: 21
  };
  console.log(updatedStudent);
}

// ---------- Rest parameter ----------
{
  function add(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  console.log(add(10, 20, 30, 40));
}

// ---------- Hoisting ----------
(function () {
  // var
  console.log(x); // undefined
  var x = 10;
})();

{
  // let: Temporal Dead Zone (cannot be used before it is declared)
  try {
    console.log(z);
    let z = 10;
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// ---------- Function hoisting ----------
(function () {
  greet(); // works
  function greet() {
    console.log("Hello");
  }
})();

{
  try {
    greet2();
    const greet2 = () => {
      console.log("Hello");
    };
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// ---------- Closures ----------
{
  function outer() {
    let count = 0;
    function inner() {
      count++;
      console.log(count);
    }
    return inner;
  }
  let counter = outer();
  counter(); // 1
  counter(); // 2
  counter(); // 3
}

// ---------- this ----------
{
  let student = {
    name: "Rahul",
    showName: function () {
      console.log(this.name);
    }
  };
  student.showName(); // Rahul
}

// ---------- Optional chaining ----------
{
  let student = {
    name: "Rahul"
  };
  console.log(student.address?.city); // undefined
}

// ---------- Nullish coalescing ----------
{
  let name = null;
  let result = name ?? "Unknown";
  console.log(result);

  let x = 0;
  console.log(x || 100); // 100
  console.log(x ?? 100); // 0
}

// ---------- Error handling ----------
{
  try {
    let result = undefinedVariable + 10;
  } catch (error) {
    console.log("Something went wrong");
  }

  try {
    console.log("Program running");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("This always runs");
  }
}

// ---------- JSON ----------
{
  let student = {
    name: "Rahul",
    age: 20
  };
  let jsonData = JSON.stringify(student);
  console.log(jsonData);

  let objectData = JSON.parse(jsonData);
  console.log(objectData.name);
}

// ---------- Classes ----------
{
  class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    showDetails() {
      console.log(this.name);
      console.log(this.age);
    }
  }
  let s1 = new Student("Rahul", 20);
  s1.showDetails();
}

// ---------- Inheritance ----------
{
  class Student {
    study() {
      console.log("Student is studying");
    }
  }
  class BCAStudent extends Student {
    code() {
      console.log("Student is coding");
    }
  }
  let s = new BCAStudent();
  s.study();
  s.code();
}

// ---------- Callback ----------
{
  function greet(name, callback) {
    console.log("Hello " + name);
    callback();
  }
  function finish() {
    console.log("Welcome to JavaScript");
  }
  greet("Rahul", finish);
}

// ---------- Promise ----------
{
  let promise = new Promise(function (resolve, reject) {
    let success = true;
    if (success) {
      resolve("Task completed");
    } else {
      reject("Task failed");
    }
  });

  promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

// ---------- async/await ----------
{
  function getData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data received");
      }, 2000);
    });
  }

  async function showData() {
    console.log("Waiting...");
    let result = await getData();
    console.log(result);
  }
  showData();
}

// ---------- fetch API ----------
{
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

  async function getUsers() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let users = await response.json();
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  }
  getUsers();
}

// ---------- localStorage (works only in the browser) ----------
// localStorage.setItem("name", "Rahul");
// let name = localStorage.getItem("name");
// console.log(name);
// localStorage.removeItem("name");
// localStorage.clear();

// ---------- DOM, CSS, Events, Input, Validation (browser only, with HTML) ----------
// This does not run in Node, so it is kept as a comment.
/*
<h1 id="title">Hello</h1>
<button onclick="sayHello()">Click Me</button>
<input id="name">
<button onclick="showName()">Submit</button>
<p id="result"></p>

<script>
  let heading = document.getElementById("title");
  console.log(heading);
  heading.innerText = "Hello JavaScript";
  heading.style.color = "red";
  heading.style.fontSize = "40px";

  function sayHello() {
    alert("Hello Students!");
  }

  let button = document.querySelector("button");
  button.addEventListener("click", function () {
    console.log("Button clicked");
  });

  function showName() {
    let name = document.getElementById("name").value;
    document.getElementById("result").innerText = "Hello " + name;
  }

  function validate() {
    let name = document.getElementById("name").value;
    if (name == "") {
      alert("Name is required");
      return false;
    }
    return true;
  }
</script>
*/
