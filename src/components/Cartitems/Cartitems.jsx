import React, { useContext } from 'react'
import './cartitems.css'
import { Shopcontext } from '../../context/Shopcontext'
import remove_icon from '../assets/cart_cross_icon.png';

export const Cartitems = () => {
    const {GetTotalcartamount,all_product,cartItems,Removefromcart} = useContext(Shopcontext);
  return (
    <div className='cartitems'>
        <div className="items-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
                { return  <div>
                    <div className='cartitems-format items-format-main'>
                        <img src={e.image} className='cart-icon'/>
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cart-quantity'>{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img className='removeicon' src={remove_icon} onClick={()=>{Removefromcart(e.id)}}/>
                
                        </div>
                        <hr/>
                        </div>}
                        return null;

        })}
        <div className="cartdown">
            <div className="cartitemtotal">
                <h1>Cart Totals</h1>
                <div>
                    <div className="itemstotalitem">
                        <p>Subtotal</p>
                        <p>${GetTotalcartamount()}</p>
                    </div>
                    <hr/>
                    <div className="itemstotalitem">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="itemstotalitem">
                        <h3>Total</h3>
                        <p>${GetTotalcartamount()}</p>
                    </div>
                </div>
                <button>PROOCED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have promo code, Enter it here</p>
                <div className="promobox">
                    <input type='text' placeholder='promo code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
