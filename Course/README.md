# [React course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595340#overview)

- [React course](#react-course)
  - [Section 1: Getting started](#section-1-getting-started)
  - [Section 2: Javascript Refresher](#section-2-javascript-refresher)
  - [Section 3: React Basics \& Working With Components](#section-3-react-basics--working-with-components)
  - [Section 4: React State \& Working with events](#section-4-react-state--working-with-events)
  - [Section 5: Renderig Lists \& Conditional Content](#section-5-renderig-lists--conditional-content)

## Section 1: Getting started

- It's a Javascript library used to build client-side applications
- It makes building modern and rich interfaces easier, we do it in a declarative way instead of imperative

## Section 2: Javascript Refresher

- Use "let" if you want to create a variable:
  ```javascript
  let prop = "hello";
  ```
- Use "const" if you want to create something that does not change:
  ```javascript
  const constantValue = "hello";
  ```
- Arrow functions awoids the issue with the "this" keyword
- Export & Imports

  ```javascript
  // person.js file
  const person = {
    name: "Marco"
  };
  export default person;

  // utility.js file
  export const clean = () => {...}
  export const baseData = 10;

  // app.js file
  /*
  * When there is an export with the "default" keyword I can
  * use the original name or rename it.
  */
  import person from "./person.js";
  import prs from "./person.js";

  /*
  * These are "name import".
  * Because we have not given any "default" we need to use
  * the curly branchets and specify what we are pointing to
  */
  import { baseData } from "./utility.js"
  import { clean } from "./utility.js"
  import { clean as cln} from "./utility.js"; // using an alias for clean
  import * as bundled from "./utility.js"; // Import all the named import and access them with bundled.*
  ```

- Classes, they are similar to what classes are in other languages:

  ```javascript
  // Definition
  class Person {
    name = "Marco"; // Property
    call = () => {...} // Method
  }

  const myPerson = new Person(); // Instantiation
  myPerson.call(); // Colling method
  console.log(myPerson.name); // Accessing property

  class Person extends Master; // Inheritance

  //////////////////////////////////////////////////
  class Human {
    constructor(){
      this.gender = "male"; // Property
    }
    printGender(){
      console.log(this.gender);
    }
  }

  class Person2 extends Human{
    constructor(){
      super(); // Mandatory if you inherit
      this.name = "Marco"; // Property
    }
    printMyName(){
      console.log(this.name);
    }
  }

  const person2 = new Person();
  person2.printMyName();
  person2.printGender();
  ```

- Classes, Properties & Methods, different syntax to achieve the same as before

  ```javascript
  // Class property definition
  // ES 6
  constructor(){
    this.myProperty = "value";
  }
  // ES 7
  myProperty = "value";

  // Class methods definition
  // ES 6
  myMethod(){...}

  // ES 7
  myMethod = () => {...} // No issues with the "this" keyword

  ///////////////////////////////////////////
  class Human {
    gender = "male"; // Property

    printGender = () => {
      console.log(this.gender); // I still need to use "this"
    }
  }

  class Person2 extends Human{
    this.name = "Marco"; // Property
    this.gender = "female"; // Updating super property

    printMyName = () => {
      console.log(this.name);
    }
  }

  const person2 = new Person();
  person2.printMyName();
  person2.printGender();
  ```

- Spread & Rest Operators:

  ```javascript
  // Spread operator (...) is used to split up array OR object properties
  const newArray = [...oldArray, 1, 2]; // created a new array from old + additionl values
  const newObject = { ...oldObject, newProp: 5 }; // Creates a new object with the old props plus the new one

  // Rest operator is used to merge a list of cuntion arguments into an array
  const filterArgs = (...args) => {
    // I get the parameters as array
    return args.filter((el) => el === 1); // filter considering value and type
  };

  console.log(filterArgs(1, 2, 3)); // prints [1]
  ```

- Destructuring:

  ```javascript
  // Allows you to extract array elements or object properties and store them in variables. Sounds like the spread operator.
  // Spread takes out all the elemets or props and distributes them in a new array or object
  // Destruct allows you to extract single elements or props to store them in a variable/s
  [a,b]=["Hello","Marco"];
  console.log(a); // Hello
  console.log(b); // Marco

  {name}={name:"Marco", age:123};
  console.log(name); // Marco
  console.log(age); // undefined
  ```

- Reference & Primitive types, they work similar to other languages

  ```javascript
  const number = 1; // Primitive
  const num2 = number; // Copy of the value

  const person = { // Referemce
    name = "Marco"
  }
  const person2 = person; // Reference copy
  ```

## Section 3: React Basics & Working With Components

- Why components:
  - Reusability, don't repeat yourself
  - Separation of concerns, don't do too many things in one and the same place (function)
- JSX stands for Javascript XML. At the end HTML is XML you can say
- A component in react is just a javascript function!!!
- Components **must** be defined with starting uppercase name. Thi because the react assumption is that "lower" case components are the built in html compenents, like "div", "p", "h2", while the one starting with upper case like "MyComponent" are the one we have defined
- Components **must** return one "root" element
- When you want to provide custom CSS code, the convention is to define the "CSS" file next to the component that it is going to use it, naming the file after the react component: "MyComponent.js", "MyComponent.css"
- In your custom component, react will make sure to pass only one parameter, the "props". You can call it whatever you want in your function definition, this object will contain all the properties passed to your function componenet
- props.children it is always provided automatically by react and it is set to the content between the opening and closing tag of my custom component

## Section 4: React State & Working with events

- It is not a mandatory convention to add a "handler" suffix to the functions which will handle the events, like the "click" event: const clickHandler = () => {...}
- React useState:
  - It registers the state for a specific component instance
  - When a state is changed, react will re-evaluate only that component instance
  - React keeps track of when we call the useState for the first time, so it will track the initial value and use it only the very first time we evaluate the function component
  - Whenever you update the state, and depende on the previous state you should call the "set state function" in this way:
    ```javascript
    setMyState((prevState) => {
      return { ...prevState, myProp: propValue };
    });
    ```
    we go for this approach because React schedules the set states. So if we have multiple set state and we depend on the previous state value, we this version of the set state we can be sure that React will always use the latest state available when processing our set state
- Lifting state up: it is when one component needs data generate in a different component in a different "component branch". To make these data available we have to "lift them up" to the closest "common parent component" which will then pass them dowm where needed

## Section 5: Renderig Lists & Conditional Content

- When rendering list react requires a "Key". This is needed because reacts uses that ID to understand what to update/add. If I don't specify the key, react will re-render the whole list again, which will reduce the performance and can lead to bugs because if it's re-creates the elements you might loose the saved state of the components
- Inline CSS can be added to an element using the "style" attribute, which accepts a js object as parameter. The key of the object is the CSS attribute name that you want to set, and the value is the value that you want to set. If you are trying to set a CSS property which has a "-" as separator, use the "camel case" syntax: "backgournd-color" -> backgroundColor
-
