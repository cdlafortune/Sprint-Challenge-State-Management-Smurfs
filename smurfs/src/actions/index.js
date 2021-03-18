import axios from "axios";

// const headers = {
//     Accept: "Application/json"
// };

export const getSmurfs = () => dispatch => {
    dispatch({type: "FETCHING_SMURFS_START"});

    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res);
            dispatch({type: "FETCHING_SMURFS_SUCCESS", payload: res.data});
        })
        .catch(err => {console.log(err)});
};

