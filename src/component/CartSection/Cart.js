import React, { useEffect, useState } from 'react';
import SinggleCart from '../Cart/SinggleCart';
import OrderSummary from '../orderSummary/OrderSummary';
import { addToDb, getStroedCard } from '../utilities/fakedb';
import './Cart.css';


 const Cart = () => {
    const [product , setProducts] = useState([]);
    // console.log(product);
    const [cart , setClickData] = useState([]);
    // console.log(cart);
    useEffect(()=>{
         fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const clickChack = (selectedProduct)=>{
        const exists = cart.find(extend => extend.id === selectedProduct.id);
        let clickData =[];
        if(!exists){
           selectedProduct.quantity = 1;
           clickData = [...cart, selectedProduct];
        }else{
            const rest = cart.filter(product=> product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            clickData = [...rest, exists];
        }
       
        setClickData(clickData);
        addToDb(selectedProduct.id);
    }

    useEffect(()=>{
        const getStore = getStroedCard();
        const saveCart =[];
        for(const id in getStore){
            const fiendProduct = product.find(product=> product.id === id);
            if(fiendProduct){
                const productValue = getStore[id];
                fiendProduct.quantity = productValue;
                saveCart.push(fiendProduct);
            }
        }
        setClickData(saveCart);
    },[product]);

    return (
        <div className='cart container-fluid mx-auto'>
            <div className='mt-32 grid gap-4 grid-cols-3 p-6'>
                {
                    product.map(product=><SinggleCart
                    product={product}
                    clickChack={clickChack}
                    ></SinggleCart>)
                }
            </div>
            <div className='pl-4 bg-[#ffc062] h-1/6 sticky top-0 p-4'> 
                <OrderSummary OrderSummary={cart}></OrderSummary>
            </div>
        </div>
    );
 };
 
 export default Cart;