import React,{useState} from "react";
// import SingleFood from "../BodySection/SelectionBoard/SingleFood";
import "./popup.css"
import PsingleFood from "./SigleFood.js/PsingleFood";

const Popup =(props)=>{
    const [dev, setDev]= useState('')
    const [cartDialog, setCartDialog]= useState('')
    const onDevHandler =()=>{
        setDev("this app is developed by lazy developer Jobayer and he didn't work on further features to deliver the food to your doorstep.  ")
    }
    // const cartCount = props.setCartCount;
    // if(cartCount === 0){
    //     setCartDialog("Your Cart is Empty")
    // }
    const food = props.summery;

    console.log(food.length)
    let final =0
    for (let i = 0; i < food.length; i++) {
        // const element = array[index];
        final += food[i].finalPrice
        console.log(final)
        
    }
    return(
        <div className="popup-Bg">
            <div className="popup">
                <h1 className="cartTitle">React Food By Jobayer cart section</h1>
                {food.map(
                    (foods)=>(
                        <PsingleFood
                        key= {Math.random()}
                        name ={foods.name}
                        quantity ={foods.quantity}
                        price ={foods.price}
                        finalPrice ={foods.finalPrice}
                        />
                    )
                )}
                <div className="total">
                    <h1>Total:</h1>
                    <h1>৳{final}</h1>
                </div>
                <p className="dev">{dev}</p>
                <div>
                    <button className="popupButtons" onClick={props.onHide}>Close</button>
                    <button onClick={onDevHandler} className="popupButtons">Place order</button>
                </div>
            </div>
        </div>
    )
}

export default Popup;