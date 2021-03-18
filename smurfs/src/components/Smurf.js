import React, {useState} from "react"; 
import {connect} from "react-redux";
import axios from "axios";

const Smurf = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: "",
    });

    const addSmurfs = e => {
        axios
            .post("http://localhost:3333/smurfs", newSmurf)
            .then(res => {
                console.log("new smurf:", res);
                // dispatch({type: "ADD_SMURF", payload: res.data });
            })
            .catch(err => {console.log(err)});
    };

    const handleChanges = e => {
        const {name, value} = e.target;
        setNewSmurf(prevState => ({
            ...prevState, 
            [name]: value
        }));
    };

    return (
        <form onSubmit={addSmurfs}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={newSmurf.name} onChange={handleChanges} /> <br/>

            <label htmlFor="age">Age:</label>
            <input type="text" name="age" value={newSmurf.age} onChange={handleChanges} /><br/>

            <label htmlFor="height">Height:</label>
            <input type="text" name="height" value={newSmurf.height} onChange={handleChanges} /><br/>

            <button type="submit">Add</button><br/>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    };
};


export default connect(mapStateToProps)(Smurf);