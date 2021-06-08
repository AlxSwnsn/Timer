import React from 'react';
import classes from "./App.module.css";
import {useState} from "react";
import Timer from "./Timer";

function App() {
    return (
        <div className={classes.App}>
            <>
                <Timer/>
            </>
            <>
                <Timer2/>
            </>
        </div>
    );
}

function Timer2() {

    let [maxValue, setMaxValue] = useState(" ")
    let [startValue, setStartValue] = useState(" ")

    const inputMax = React.createRef<HTMLInputElement>()
    const inputStart = React.createRef<HTMLInputElement>()

    let getNumbers = () => {
        if (inputStart.current)
            maxValue = inputStart.current.value
        setMaxValue(maxValue)
    }
    if (inputMax.current) {
        startValue = inputMax.current.value
        setStartValue(startValue)
    }

    return (

            <div className={classes.Clock2}>
                <div className={classes.ValuesFrame}>
                    <div className={classes.Text}>Max value</div>
                    <input ref={inputMax} className={classes.Input} onChange={(e) => e.currentTarget.value}/>
                    <div className={classes.Text}>Start value</div>
                    <input ref={inputStart} className={classes.Input} onChange={(e) => e.currentTarget.value}/>
                </div>
                <div className={classes.ButtonFrame}>
                    <button className={classes.Button} onClick={() => {
                        getNumbers()
                    }}>Set
                    </button>
                </div>
            </div>

    )
}


export default App;
