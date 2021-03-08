import React, {useState} from 'react';
import classes from "./App.module.css";

type TimerType = {
    digits: number
}

function App() {

    let [number, setNumber] = useState(0)

    return (

        <div className={classes.App}>
            <Timer digits={number}/>
            <div className={classes.ButtonFrame}>
                <button onClick={() => setNumber(number + 1)} disabled={(number === 5)}>Inc</button>
                <button onClick={() => setNumber(0)} disabled={(number === 0)}>Reset</button>
            </div>
        </div>
    );
}
function Timer(props: TimerType) {
     return <div className={props.digits===5? classes.TimerFrameRed:classes.TimerFrame}><b>{props.digits}</b></div>
}

export default App;
