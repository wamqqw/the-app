import React from "react";
import { useState } from "react";
import "../css/counter.css"

const Main = () => {
    const [count , setCount ] = useState(0)

    function clickMe(amount, sign) {
        // setCount(count =>count + 1)
        switch(sign) {
            case "+":
                setCount(count + amount)
                break;
            case "-":
                setCount(count - amount)
        }
    }

    function Button(props) {
        <button className="blue" onClick={() => clickMe(props.amount, props.sign)}>
            {props.sign}{props.amount}
        </button>
    }

    return (
        <div className = "box">
            <h1>Your Score: {count}</h1>
            <Button 
                amount={1}
                sign="+"
            />
            <Button
                amount={100}
                sign ='-'
            />
            <Button
                amount={10}
                sign ='+'
            />
        </div>
    )
}

export default Main