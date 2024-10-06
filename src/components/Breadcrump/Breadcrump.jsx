import React from 'react'
import './breadcrump.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

export const Breadcrump = (props) => {
    const {product}=props;
  return (
    <div className='breadcrump'>
        HOME <img src={arrow_icon}/> SHOP <img src={arrow_icon}/> {product.category} <img src={arrow_icon}/>{product.name}
         </div>
     )
}
