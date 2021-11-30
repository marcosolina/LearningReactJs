/*
    Questo oggetto conserva l'intero stato
    della app
*/

import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";

// Questo oggetto rappresenta l'aggregato di tutti i reducers
export const rootReducer = combineReducers({
    user: UserReducer
}); // Questa funzione prende tutti i nostri reducers e li mette insieme in un unico oggetto

// Creiamo un oggetto TypeScript basato su rootReducer usando l'utilit ReturnType
export type AppState = ReturnType<typeof rootReducer>;