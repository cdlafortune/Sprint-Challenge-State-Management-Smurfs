const initialState = {
    smurfs: [],
    loading: false, 
    isFetching: false,
    error: "" 
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_SMURFS_START": 
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        
        case "FETCHING_SMURFS_SUCCESS":
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            };
        
        // case "ADD_SMURF": 
        //     return {
        //         ...state, 
        //         smurfs: [...state, action.payload]
        //     };

        default: 
            return state;
    };
};

