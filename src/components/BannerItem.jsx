import React from 'react'
import { Link } from 'react-router-dom'

function BannerItem() {
  return (
    <div className='item'>
      <h1>{title}</h1>
      <p>{content}</p>
    <Link to="#" > Read More </Link>
    </div>
  )
}

export default BannerItem
