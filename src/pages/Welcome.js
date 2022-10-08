import React, { useEffect, useState } from 'react'
import Counter from '../components/Counter';
import { fetchBloglist } from '../libs/Api';
export default function Welcome() {
    // for managing state [data]
    const [list, setlist] = useState([]);
    const [count, setCount] = useState(0);


    useEffect(() => {
        // if (document.readyState)
        //     fetchBloglist().then(setlist)

        return () => {

        }
    }, [])

    const fetchData = (e) => {
        e.preventDefault();
        fetchBloglist().then(setlist)
    }

    const increment = () => {
        setCount(val => val + 1)
    }
    const decrement = () => {
        setCount(val => val - 1)
    }
    return (
        <div>
            <ol>
                {list && list.map((blog) => <li><a href={`/post/${blog.id}`}>{blog.employee_name}</a></li>)}
            </ol>


            <button onClick={fetchData}>fetch</button>
            <div className='row'>
                <div className='col-4'>  <button className='btn btn-primary' onClick={increment}>increase</button></div>
                <div className='col-4'>{count}</div>

                <div className='col-4'>  <button className='btn btn-primary' onClick={decrement}>decrease</button></div>

            </div>
            {/* <Counter/>*/}
        </div>
    )
}
