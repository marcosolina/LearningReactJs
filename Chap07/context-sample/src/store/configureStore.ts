/*
    Qui tengo l'oggetto "store" usato
    da Redux e dalla app
*/

import { createStore } from "redux";
import { rootReducer } from "./AppState";

const configureStore = () => {
    return createStore(rootReducer, {}); // Build the actual store basato sull nostro AppState reducer
};

export default configureStore;