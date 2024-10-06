import React, { useContext } from 'react'
import './productdisplay.css'
import star_icon from '../assets/star_icon.png';
import dull_star_icon from '../assets/star_dull_icon.png';
import { Shopcontext } from '../../context/Shopcontext';

export const Productdisplay = (props) => {
    const {product}=props;
    const {addtocart} =useContext(Shopcontext);
  return (
    <div className='productdisplay'>
        <div className="display-left">
        <div className="display-list">
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
        </div>
        <div className="display-img">
            <img className='display-main-img' src={product.image}/>
        </div>

        </div>
        <div className="display-right">
            <h1>{product.name}</h1>
            <div className="display-right-star">
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={dull_star_icon}/>
                <p>(122)</p>
            </div>
            <div className="display-right-prices">
                <div className="display-right-old-price">
                    ${product.old_price}
                </div>
                <div className="display-right-new-price">
                    ${product.new_price}
                </div>
            </div>
            <div className="product-description">
            "Elevate your everyday wardrobe with our Casual Everyday T-Shirt. Made from 100% breathable cotton.
            </div>
            <div className="product-size">
                <h1>Select size</h1>
                <div className="product-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                </div>
            </div>
            <button onClick={()=>{addtocart(product.id)}}>ADD CART</button>
            <p className='product-category'><span>Category:</span>Women Tshirt croptop</p>
            <p className='product-category'><span>Tags:</span>Latest Modern</p>
        </div>

    </div>
  )
}
