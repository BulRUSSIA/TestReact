import React from 'react';
import Button from "../Button/Button";

export default function Navbar() {
    return (
        <div className="Navbar">
           <div className="Navbar__wrapper">
               <Button title="Все" black={true}/>
               <Button title="Мясные"/>
               <Button title="Острые"/>
               <Button title="Гриль"/>
               <Button title="Закрытые"/>
               <Button title="Гавайские"/>
           </div>
        </div>
    )
}
