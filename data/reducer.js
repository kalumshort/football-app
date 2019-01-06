import { getPlayers } from "./actions/state.js";

function reducer ( currentState, action ) {
    switch(action.type) {

        case 'getPlayers': {
            return {
            ...state,
            players: players
            };
        }
        default: {
            return currentState;
        }
    }
    
};
export default reducer;

// export default (state, action) => {
//     switch(action.type) {
//         case 'getPlayers' : return getPlayers(state, action);
//         default: return state;
//     }
// }

// const getPlayers = (state, {players}) => {
//     return {
//         ...state,
//         players: players,
//     }
// }