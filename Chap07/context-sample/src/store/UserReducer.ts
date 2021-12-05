export const USER_TYPE = "USER_TYPE"; // Costante per l'action type

export interface User {
    id: string;
    username: string;
    email: string;
    city: string;
}

/*
    Per convenzione una action ha due menbri:
    - type
    - payload
*/
export interface UserAction {
    type: string;
    payload: User | null;
}

/*
    Il nostro reducer. Reducer accetta sempre come input
    lo stato e la action, il nuovo stato.
    MAI cambiare l'oggetto state direttamente. O lo ritorni
    così come oppure ritorni i dati nuovi
*/
export const UserReducer = ( state: User | null = null, action: UserAction): User | null => {
    switch(action.type){
        case USER_TYPE:
            console.log("user reducer", action.payload);
            return action.payload;
        default:
            return state;
    }
}