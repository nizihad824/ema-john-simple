import React from 'react';

const Cart = (props) => {
    const {cart}=props
    return (
        <div>
            <h2>Order Summary</h2>
              <p>Selected items:{cart.length}</p>
            
        </div>
    );
};

export default Cart;