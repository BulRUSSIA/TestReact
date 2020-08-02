import React from 'react';
import logo from '../../static/img/label.png'

export default function Logo() {
    return (
        <a href="#">
            <div className="Logo">
                <img src={logo} alt="pizza"/>
                <div className="Logo__text-wrapper">
                    <div className="Logo__title">
                        React Pizza
                    </div>
                    <div className="Logo__text">
                        самая вкусная пицца во вселенной
                    </div>
                </div>
            </div>
        </a>
    )
}
