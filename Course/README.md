# [React course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595340#overview)

- [React course](#react-course)
  - [Section 1: Getting started](#section-1-getting-started)
  - [Section 2: Javascript Refresher](#section-2-javascript-refresher)
  - [Section 3: React Basics \& Working With Components](#section-3-react-basics--working-with-components)
  - [Section 4: React State \& Working with events](#section-4-react-state--working-with-events)
  - [Section 5: Renderig Lists \& Conditional Content](#section-5-renderig-lists--conditional-content)
  - [Section 6: Styling React Components](#section-6-styling-react-components)
  - [Section 7: Debugging React Apps](#section-7-debugging-react-apps)
  - [Section 8: Time to Practice: A Complete Practice Project](#section-8-time-to-practice-a-complete-practice-project)
  - [Section 9: Diving Deeper: Working with Fragments, Portals \& "Refs"](#section-9-diving-deeper-working-with-fragments-portals--refs)
  - [Section 10: Advanced - Handling Side Effects, usind Reducers \& Using the Context API](#section-10-advanced---handling-side-effects-usind-reducers--using-the-context-api)

## Section 1: Getting started

- It's a Javascript library used to build client-side applications
- It makes building modern and rich interfaces easier, we do it in a declarative way instead of imperative

## Section 2: Javascript Refresher

- Use "let" if you want to create a variable:
  ```javascript
  let prop = 'hello';
  ```
- Use "const" if you want to create something that does not change:
  ```javascript
  const constantValue = 'hello';
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

## Section 6: Styling React Components

- When I defined simple CSS files, the classes defined in these files are globally available, they are not scoped to a scpecific component/s
- [Styled components](https://styled-components.com/) it's a package that can help us to scope the CSS style to only certain components
  - I don't like this approach because I have to define the CSS inside the component file
- CSS Modules. React provides an alternative, CSS modules. I can continue to keep the CSS definition in a separate file, but I have to add the "module" word before the extension: "MyFile.module.css"

  - After that I can import this file in my component file "import styles from './MyFile.module.css'"
  - And use is in my component accessing the classes as jsobject properties

    ```javascript
    import styles from './MyFile.module.css';

    <MyComponent className={styles.myclass} />;
    ```

## Section 7: Debugging React Apps

- [React development tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) is it a nice Google Chrome extension which add a couple of "tabs" in the devtool view, for example we will be able to navigate our components and inspect their properties

## Section 8: Time to Practice: A Complete Practice Project

- Just a recap of the modules until here

## Section 9: Diving Deeper: Working with Fragments, Portals & "Refs"

- JSX Limitations:

  - You cannot retunr more than one "root" JSX element
  - A workaround could be wrapping the JSX with a "div", but you might end up with a "<div> soup"
    ```html
    <div>
      <div>
        <div>
          <h2>Hi there</h2>
        </div>
      </div>
    </div>
    ```
  - A proper workaround could be to create a wrapper component

    ```javascript
    const Wrapper = props => {
      return props.children;
    }

    export default Wrapper;

    ...
    return(
      <Wrapper>
        ...
      </Wrapper>
    );

    ```

  - React already provides a default wrapper

    ```javascript
    return <React.Fragment>...</React.Fragment>;

    // OR
    return <>...</>;
    ```

- React Portals:

  - It helps writing HTML code which is semathically correct
  - To use portals you have to create an element in the main HTML, which will you link later in the component, so the comonent will be "portal" somewhere.
    Check [here](https://github.com/marcosolina/LearningReactJs/blob/main/Course/react_code/09-starting-project/public/index.html) and [here](https://github.com/marcosolina/LearningReactJs/blob/main/Course/react_code/09-starting-project/src/components/UI/ErrorModal/ErrorModal.js)

- References (Ref):

  - They allow us to access other DOM elements and work with them
  - It can be used for example when I have a form. In these cases I will usually use a "set state" function to update the state at every key stroke. With the usage of ref I can reference the DOM element and get the value when I need. Check [here](https://github.com/marcosolina/LearningReactJs/blob/main/Course/react_code/09-starting-project/src/components/Users/AddUser/AddUser.js)
  - **Rarely** use ref to directly manipulateing the DOM element

- Controlled vs Uncontrolled components:
  - When I access values using refs, the component becomes an "uncontrolled" component, that's because React does not controll anymore that component via direct access to the DOM element
  - It will be a Controlled component if I use the "useState" to read and set the values of the input element
  -

## Section 10: Advanced - Handling Side Effects, usind Reducers & Using the Context API

- Effect or Side Effect:

  - The main job of react library has the job to render the UI and react to user input
    - We want to evaluate & render JSX
    - Manage state & props
    - React to (User) Events & Input
    - Re-evaluate Component upon State & Prop changes
    - This is all "baked into" React via the "tools" and features covered in the course (i.e. useState() Hook, Proprs etc)
  - Side effects are anything else that might happen in the react app, for example:
    - Store data in Browser Storage
    - Send HTTP request
    - Set & Manager Timers
  - These task **must happen outside of the normal component evaluation** and render cycle - especially since they might block/delay rendering (e.g Http requests)
  - useEffect() hook:

    - It's a build in hook
    - it is called with 2 parameters: useEffect(()=>{...}, [dependencies])
    - The function is what to execute when a dependencies changed
    - If I specify an empty list of dependencies, the effect will be execute only once, at the first render of the component
    - Per rule, in the array of dependencies I list all the things that I am using in the effect function
      - Exceptions (NO NEED TO ADD TO THE DEPENDENCIES LIST):
        - "set state functions" because React will ensure that they will never change
        - Build in APIs func like fetch(), localstorage (func and features built in the browser). They are not related to React and also never change
        - No need to add variables defined OUTSIDE the component (for example a helper func in a separate file). Such variables or function are not created inside of a component function and hence changing them won't affect your component (it will not be re-evaluated is the variable or function changes)
    - You can return a function, which is called every time before executing the useEffect, except for the very first time. Here an example

      ```javascript
      useEffect(() => {
        const timerId = setTimeout(() => {
          setFormIsValid(
            enteredEmail.includes('@') && enteredPassword.trim().length > 6
          );
        }, 500);

        return () => clearTimeout(timerId); // Cleanup. It is executed before execution of the effect (except for the first time)
      }, [enteredEmail, enteredPassword]);
      ```
