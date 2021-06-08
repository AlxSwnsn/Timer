import React from 'react';
import classes from "./App.module.css";
import {useState} from "react";

const Timer=()=> {

    let [number, setNumber] = useState(0)

    return (

            <div className={classes.Clock}>
                <div className={number === 5 ? classes.TimerFrameRed : classes.TimerFrame}><b>{number}</b>
                </div>
                <div className={classes.ButtonFrame}>
                    <button className={classes.Button} onClick={() => setNumber(number + 1)}
                            disabled={(number === 5)}>Inc
                    </button>
                    <button className={classes.Button} onClick={() => setNumber(0)} disabled={(number === 0)}>Reset
                    </button>
                </div>
            </div>

    )
}


export default Timer;
