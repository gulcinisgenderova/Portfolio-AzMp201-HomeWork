import React from 'react'
import Tablex from './Table'
import Basket from './Basket'
import "./homestyle.css"

const Home = () => {
  return (
    <div className='homes'>
      <Tablex/>
      <Basket/>
    </div>
  )
}

export default Home
