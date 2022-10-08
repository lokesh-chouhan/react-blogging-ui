import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(val => val + 1)
    }
    const decrement = () => {
        setCount(val => val - 1)
    }
    return (
        <div className='row'>
            <div className='col-4'>  <button className='btn btn-primary' onClick={increment}>increase</button></div>
            <div className='col-4'>{count}</div>

            <div className='col-4'>  <button className='btn btn-primary' onClick={decrement}>decrease</button></div>

        </div>
    )
}
