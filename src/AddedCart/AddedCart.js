import React from 'react';
import './AddedCart.css'

const AddedCart = ({item}) => {
    return (
        <div className='cart-container'>
           <div className='imagePart'>
           <img src={item.img} alt="" />
           </div>
           <div className="textPart">
           <h1>Name:{item.name}</h1>
           <h3>Price:{item.price}</h3>
           <p>Bullet:{item.bullet}</p>
           <p>Capacity:{item.capacity}</p>
           <p>Action:{item.action}</p>
           <p>Catagory:{item.category}</p>

           </div>
        </div>
    );
};

export default AddedCart;