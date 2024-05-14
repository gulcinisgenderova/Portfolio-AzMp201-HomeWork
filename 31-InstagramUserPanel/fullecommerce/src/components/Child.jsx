import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../redux/slices/counterSlice'

const Child = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    // console.log(count)
  return (
    <div>
      shsh

      <div> count- {count}</div>
      <button onClick={()=>{
        
        dispatch(increment())
      }}>inc</button>
      <button>dec</button>

    </div>
  )
}

export default Child
