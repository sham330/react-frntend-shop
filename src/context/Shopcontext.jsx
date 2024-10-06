import React, { createContext, useState } from 'react'
import all_product from '../components/assets/all_product'

export const Shopcontext = createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;

        
    }
    return cart;
}


const Shopcontextprovider = (props) =>{
    const [cartItems,setCartItems] = useState(getDefaultCart());
    

    const addtocart = (Itemid) => {
        setCartItems((prev)=>({...prev,[Itemid]:prev[Itemid]+1}))
        console.log(cartItems);

    }
    const Removefromcart = (Itemid) => {
        setCartItems((prev)=>({...prev,[Itemid]:prev[Itemid]-1}))

    }

    const GetTotalcartamount = () => {
        let totalamount = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        let iteminfo = all_product.find((product)=>product.id===Number(item))
                        totalamount += iteminfo.new_price * cartItems[item];
                    }
                    
            }
            return totalamount;
    }
    const gettotalcartitems = () => {
        let totalitem=0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        totalitem += cartItems[item]
                    }
            }
            return totalitem;
    }


    
const ContextValue = {gettotalcartitems,GetTotalcartamount,all_product,cartItems,addtocart,Removefromcart};
    return(
        <Shopcontext.Provider value={ContextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default Shopcontextprovider;
