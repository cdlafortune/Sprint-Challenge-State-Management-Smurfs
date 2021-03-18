import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "./reducers/index";
import {Provider} from "react-redux";
import "./index.css";
import Smurf from "./components/Smurf";
import SmurfList from "./components/SmurfList";
import papa from "./images/papa-smurf.png";

const logger = ({getState}) => next => action => {
    console.log("Dispatching action:" , action);
    next(action);
};

let store = createStore(appReducer, applyMiddleware(logger, thunk));

function App () {
    return (
        <div className="App">
            <h1>Get My Smurfs</h1>
            <Smurf />
            <SmurfList/>
            <img src={papa} alt="papa smurf" />
        </div>
    );
};

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);
