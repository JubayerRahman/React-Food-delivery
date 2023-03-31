import React, {useState} from "react";
import Popup from "../popupComponent/Popup";
// import CartIcon from "./CartIcon";
// import Icon from "./cart-shopping-solid.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css'

const Header =(props)=>{
    
    return(
        <div className="mainHeaderdiv">
            <div className="manHeaderSection">
            <h1> React Food By Jobayer</h1>
            <button className="cartSection" onClick={props.onShow}>
                <i className="fa-solid fa-cart-shopping icon"></i>
                <p>Your Cart</p>
                <span className="cartAmount">{props.setCartCount}</span>
            </button>
        </div>
        </div>
    )
    }

export default Header;