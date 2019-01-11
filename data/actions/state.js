
export function addPlayer(data){
    return{
        type: 'addPlayer',
        payload: data,
    };
}

export function deletePlayer(data){
    return{
        type: 'deletePlayer',
        payload: data,
    };
}