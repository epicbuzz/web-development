#### Introduction to JavaScript
- JavaScript is a versatile, high-level programming language primarily used for web development.
- It's essential for creating interactive and dynamic websites.

---

### Variables
Variables are containers for storing data values. In JavaScript, we can declare variables using `var`, `let`, and `const`.

1. **var**
   - Function-scoped.
   - Can be re-declared and updated.
   ```javascript
   var name = "Alice";
   var name = "Bob"; // Re-declaration is allowed
   name = "Charlie"; // Updating is allowed
   ```

2. **let**
   - Block-scoped.
   - Cannot be re-declared within the same scope but can be updated.
   ```javascript
   let age = 25;
   // let age = 30; // Error: age has already been declared
   age = 30; // Updating is allowed
   ```

3. **const**
   - Block-scoped.
   - Cannot be re-declared or updated.
   - Must be initialized at the time of declaration.
   ```javascript
   const birthYear = 1995;
   // const birthYear = 2000; // Error: birthYear has already been declared
   // birthYear = 2000; // Error: Assignment to constant variable
   ```

---

### Data Types
JavaScript supports various data types:

- **Primitive Types**: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`
  ```javascript
  let message = "Hello"; // string
  let score = 100; // number
  let isActive = true; // boolean
  let nothing; // undefined
  let empty = null; // null
  let id = Symbol("id"); // symbol
  let bigNumber = 12345678901234567890n; // bigint
  ```

---

### Arrays
Arrays are used to store multiple values in a single variable.

1. **Creating an Array**
   ```javascript
   let fruits = ["Apple", "Banana", "Cherry"];
   ```

2. **Accessing Elements**
   ```javascript
   console.log(fruits[0]); // Apple
   console.log(fruits[1]); // Banana
   ```

3. **Array Methods**
   - `push()`: Adds a new element to the end of an array.
     ```javascript
     fruits.push("Date");
     ```
   - `pop()`: Removes the last element from an array.
     ```javascript
     fruits.pop();
     ```
   - `shift()`: Removes the first element from an array.
     ```javascript
     fruits.shift();
     ```
   - `unshift()`: Adds a new element to the beginning of an array.
     ```javascript
     fruits.unshift("Elderberry");
     ```

---

### Objects (Hashes)
Objects are collections of key-value pairs. They are used to store related data and more complex entities.

1. **Creating an Object**
   ```javascript
   let person = {
       firstName: "John",
       lastName: "Doe",
       age: 30,
       isStudent: false
   };
   ```

2. **Accessing Object Properties**
   - Dot notation:
     ```javascript
     console.log(person.firstName); // John
     ```
   - Bracket notation:
     ```javascript
     console.log(person["lastName"]); // Doe
     ```

3. **Adding/Updating Properties**
   ```javascript
   person.email = "john.doe@example.com"; // Adding a new property
   person.age = 31; // Updating an existing property
   ```

4. **Removing Properties**
   ```javascript
   delete person.isStudent;
   ```

---

### Summary
- JavaScript variables can be declared using `var`, `let`, and `const`.
- Arrays are used for storing ordered collections of data.
- Objects (hashes) are used for storing collections of key-value pairs.

### Homework
- Practice declaring and initializing variables using `var`, `let`, and `const`.
- Create an array of your favorite movies and use array methods to manipulate it.
- Define an object representing a book, with properties like `title`, `author`, `yearPublished`, and `genre`.

---

Feel free to ask any questions during the next class or via email. Happy coding!