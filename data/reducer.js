import { getPlayers } from "./actions/state";
import { addPlayer } from './actions/state';

// function reducer (currentState, action){
//     switch (action.type) {
//         case 'addPlayer': return addPlayer(currentState, action);
//         default : return currentState;
//     }
// }

function reducer ( currentState, action ) {
    switch(action.type) {
        case 'addPlayer': {
            return {
                ...currentState,
                players: [{
                    name: action.payload
                },...currentState.players]
            }
        }
        default: {
            return currentState;
        }
    }
}

export default reducer;
