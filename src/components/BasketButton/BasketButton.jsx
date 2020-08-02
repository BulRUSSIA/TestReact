import React from 'react';
import shop_cart from '../../static/img/garbage.svg'

export default function BasketButton() {
    return (
        <div className="Basket">
            <div className="Basket__price">
                520 ₽
            </div>
            <div className="Basket__separate">

            </div>
            <img src={shop_cart} alt="basket"/>
            <div className="Basket__price">
                3
            </div>
        </div>
    )
}
