# Learning React Js

I have decided to lear React JS and I bought [this](https://www.amazon.co.uk/Full-Stack-React-TypeScript-Node-applications/dp/1839219939) book. I'll use this repository to write the exercises provided in the book and possibly some mine experiments.

[Git repo of the book](https://github.com/PacktPublishing/Full-Stack-React-TypeScript-and-Node)

## Capitolo 1

- Cosa è TypeScript
- Qualche esempio di OOP con TypeScript

## Capitolo 2

- I "Tipi" che si possono usare in TypeScript
- Tipi di ritorno delle funzioni
- Classi e interfacce
- Vari esempi su come implementare "l'eredità" tra interfacce, classi astratte e classi
- Esempi su come usare generics
- Alcuni trucchi per gestire i null / undefined
- tsconfig.json info

## Capitolo 3
- Scope delle variabili
- Differenza tra "var, let, const"
- Arrow functions
- "this", "bind, call e apply"
- Spread, Object.assing, Array.concat
- "Destucturing" (prendere solo una parte di un oggetto)
- Rest (Rest of the items)
- Array functions
- Set & Map (Collections)
- async await callbacks
  - Nell'esercizio con le fetch ho dovuto fare alcune modifiche:
    - Usare la vesione "node-fetch": "^2.6.1" perchè quella corrente non supporta più il "require"
    - Attivare nel tsconfig.json: "moduleResolution": "node"

## Capitolo 4
- Single Page Application (SPA)
- Per far partire la prima SPA ho dovuto installare:
  - npm i react-router-dom
  - npm i @types/react-router-dom

## Capitolo 5
- React:
  - Class Compoents (Vecchio modo di scrivere le SPA)
  - Functional component
  - Hooks
    - L'idea è di abbandonare l'Object Oriented Model e adottare il modello a composizione

## Capitolo 6
- Test con Jest
- Nel tsconfig.json devo aggiungere ne compilerOption: "types": ["node", "jest"]
- Mocking on jest.fn
- Component mocking
- VS Code Plugins:
  - [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

## Capitolo 7
- Redux State
- React Context
- React Router
  - [React Router Documentation](https://reactrouter.com/docs/en/v6)

## Capitolo 8
- Server site development with Node.js and Express
- *.mjs è la nuova estensione da usare con Node
- nodemon -> restart Node server quando salvo delle modifiche
  - npm i nodemon -g (Alla fine non lo ho installato a livello glovale ma a livello di progetto. Rimuovi la "-g")
- express: è un framework che semplifica la gestione di richieste / risposte HTTP
  - npm i express -s

## Capitolo 9
- Con GrapQL è il client che decide che tipo di dati il servizio deve ritornare
- Creazione e configurazione del progetto
  - npm i express apollo-server-express @types/express
  - tsc -init
  - Creato typeDefs.ts
- Resolvers:
  - Sono le funzioni che recuperano o modificano i dati nel datastore
  - Questi dati sono poi abbinati con quelli definiti nella definizione GraphQL
  - npm i uuid @types/uuid
  - npm install @graphql-tools/utils
- Subscribers:
  - We have to install PubSub to be able to publish and subscribes to the events
  - npm install graphql-subscriptions
  - Il libro usa una versione vecchia... non sono riuscito a capire come fare l'esercizio con la versione nuova



## Commands
- npm init // Per inizializzare il projectto
- npm install typescript // per installare typescript
- node_modules\.bin\tsc TS_FILE // Compile the TS script
- node JS_FILE // run the js file
- node_modules\.bin\tsc --init // initialise type script (you will get the tsconfig.json file)
- .\node_modules\.bin\tsc.cmd --target "ES6" .\getterSetter.ts // Compile to a newer JavaScript target than ES3
- npx create-react-app [APP_NAME] --template typescript
- Install Redux: npm i redux react-redux @types/redux @types/react-redux
- npm i react-router-dom @types/react-router-dom // Install react router