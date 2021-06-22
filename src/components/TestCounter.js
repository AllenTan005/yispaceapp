import React, { useState, useEffect } from 'react'

const TestCounter = () => {
   
    const [count, setCount] = useState(0)
   
    return (
        <div>
            <div>Count:{count}</div>
            <div>
                <button onClick={() =>  setCount(count + 1)}>increment</button>
            </div>
            <div>
                <button onClick={() =>  setCount(count - 1)}>decrement</button>
            </div>
 </div>
    )
}

export default TestCounter
