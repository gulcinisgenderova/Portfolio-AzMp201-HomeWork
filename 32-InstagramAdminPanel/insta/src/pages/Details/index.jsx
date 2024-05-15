import React from 'react'
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom'

const Details = () => {
  const {id}= useParams()
  console.log(id);
  return (
    <div>Detail :{id}</div>
  )
}

export default Details