import React, { useEffect, useState } from "react";

const Clock = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
         setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000)
    }, [])
    return <h1>{count}</h1>
};

export default Clock