import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getSmurfs} from "../actions/index";

const SmurfList = (props) => {
    useEffect(() => {
        props.getSmurfs();
    }, []);

    if (props.isFetching) {
        return <h3>Loading...</h3>
    }

    else return (
        <div>
            <button onClick={getSmurfs} className="load-btn">Load Smurfs</button>
            <div className="smurf-list">
            {props.smurfs.map(el => {
                return (<div className="smurf"> 
                    <h4>{el.name}</h4>
                    <p>{el.age}</p>
                    <p>{el.height}</p>
                </div>)
            })}
        </div>
        </div>
        
    );
};

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getSmurfs})(SmurfList);