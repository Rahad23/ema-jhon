import React from 'react';

const OrderSummary = ({OrderSummary}) => {

    let totalPrice = 0;
    let costShiping = 0;
    let quentityProduct = 0;
    for(const product of OrderSummary){
        quentityProduct = quentityProduct + product.quantity;

        totalPrice = totalPrice + product.price * quentityProduct;
        costShiping = costShiping + product.shipping;
    }
    // console.log(quentityProduct);
    // const totalTax = totalPrice * 10/100;
    const totalTax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + costShiping + totalTax;
    return (
            <div className=''>
                <h1 className='text-center text-xl font-extrabold text-black mb-5 border-b-slate-800 border-b-2'>Order Summary</h1>
                <h1 className='text-lg font-bold text-gray-900 mb-2'>Selected Items: {quentityProduct}</h1>
                <h1 className='text-lg font-bold text-gray-900 mb-2'>Total Price: ${totalPrice}</h1>
                <h1 className='text-lg font-bold text-gray-900 mb-2'>Shipping Charge: ${costShiping}</h1>
                <h1 className='text-lg font-bold text-gray-900 mb-2'>Tax: ${totalTax}</h1>
                <h1 className='text-lg font-extrabold text-gray-900 mb-2'>Grand Total: ${grandTotal}</h1>
            </div>
    );
};

export default OrderSummary;