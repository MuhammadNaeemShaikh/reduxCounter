const initialstate = 0;

export const changeNumber = (state=initialstate,action) => {
    switch (action.type) {
        case 'increment':
                return state + action.payload;
            break;
        case 'decrement':
            return state-1;
        break;
    
        default:
            return state;
            break;
    }

}