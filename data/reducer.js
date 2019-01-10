import { getPlayers } from "./actions/state";
import { addPlayer } from './actions/state';

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'addPlayer': return addPlayer(state, action);
//         default : return state;
//     }
// }

function reducer ( currentState, action ) {
    switch(action.type) {
        case 'addPlayer': {
            return {
                ...currentState,
                players: [...currentState.players,{
                    name: action.payload
                }]
            }
        }
        default: {
            return currentState;
        }
    }
}

export default reducer;
