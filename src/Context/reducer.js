export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null
};

const reducer = (state,acton) => {
    switch (acton.type){
        case 'SET_USER':
            return {
                ...state,
                user:acton.user
            }
        default:
            return state;    
    }
}

export default reducer;