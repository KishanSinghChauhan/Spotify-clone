export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:'BQC_r8JAr7NkLQEQRSiRxkBGFVOYhWR5g69OddCdVz6ihd-vq1XYCXmagupe2PbkQ2OyMJWeJZYxjddeNfgc9emEh_astWqL-SZpTgOn_GcNr0V7OAT0U5oyzzXQSyMTHoNQWefsVs9kItyd09apha8QdA0FCASwrolM6bPrDIsJU-Y9rCli'
};

const reducer = (state,acton) => {
    switch (acton.type){
        case 'SET_USER':
            return {
                ...state,
                user:acton.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token:acton.token
            } 
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:acton.playlists
            }       
        default:
            return state;    
    }
}

export default reducer;