import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./SinggleCart.css";


const SinggleCart = (props) => {
    const{category, id, img, name, price, ratings, seller, shipping}=(props.product);
    return (
        <div>
             <div className="card w-85 bg-base-100 shadow-lg">
                <figure><img src={img ? img : 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                   {category}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h4 className="product-name">{name}</h4>
                    <h2><span className='font-bold text-orange-600'>Price:</span><span className='font-extrabold text-sky-900'> ${price}</span></h2>
                    <div className="card-actions justify-start mt-2">
                    <div className="badge badge-outline">Fashion</div> 
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
                <button onClick={()=>props.clickChack(props.product)} className="btn btn-active bg-[#FFE0B3] hover:bg-[#c7974e] w-full text-[#000] font-semibold border-none hover:border-spacing-1 rounded-none">Add to Cart <FontAwesomeIcon style={{marginLeft:'5px', fontSize:'18px', color:'#F87272'}} icon={faShoppingCart}></FontAwesomeIcon></button>
                </div>
        </div>
    );
};

export default SinggleCart;