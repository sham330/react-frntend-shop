import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import {Shopcontext} from '../context/Shopcontext';
import { Breadcrump } from '../components/Breadcrump/Breadcrump';
import { Productdisplay } from '../components/Productdisplay/Productdisplay';
import { Descriptionbox } from '../components/Descriptionbox/Descriptionbox';
import { Relatedproduct } from '../components/Relatedproduct/Relatedproduct';


export const Product = () => {
  const{all_product}=useContext(Shopcontext);
  const{productId}=useParams()
  const product=all_product.find((e)=>e.id=== Number(productId))
  return (
    <div>
      <Breadcrump product={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox/>
      <Relatedproduct/>
      
    </div>
  )
}
