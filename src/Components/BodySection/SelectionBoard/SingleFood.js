import React, {useState} from "react";
import "./SingleFood.css"

const SingleFood =(props)=>{
    const [quantity, setquantity] = useState(0)
    const plusHandler = ()=>{
        setquantity(quantity + 1)
    }
    const minusHandler = ()=>{
        if(quantity ===0){
            setquantity(0)
        }
        else{
            setquantity(quantity - 1)
        }
    }

    const finalPrice = parseFloat(props.price) * quantity
    const foodData = {name:props.name, price:props.price, quantity:quantity, finalPrice:finalPrice}
    const addHandler =()=>{
        if(quantity===0){
            return(
                alert("you need to pick at least 1 item in the quantity section")
            )
        }
        console.log(foodData)
        console.log(finalPrice)
        props.singleFoodInfo(foodData)
    }
    return(
        <div className="singleFood">
        <div className="singleFoosData">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h1 className="price">৳{props.price}</h1>
        </div>
        <div className="singleFoodControlls">
            <div className="quantitySection">
            <h1>Quantity</h1>
                <div className="quantitybuttonsSection">
                    <button className="quantituButton" onClick={minusHandler}>-</button>
                    <p className="qualtityAmount">{quantity}</p>
                    <button className="quantituButton" onClick={plusHandler}>+</button>
                </div>
            </div>
            <button onClick={addHandler} className="addButton">+Add</button>
        </div>
        </div>
    )
}

export default SingleFood;