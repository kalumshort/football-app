
export const getPlayers = players => {
    return {
        type: "getPlayers",
        players: players,
    }
}

export const addPlayer = data => {
    return{
        type: 'addPlayer',
        input: data,
    }
};