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
        case 'deletePlayer': {
            return {
                ...currentState,
                players: state.players.filter(player => player.id !== action.id),

            }
        }
        default: {
            return currentState;
        }
    }
}

export default reducer;
