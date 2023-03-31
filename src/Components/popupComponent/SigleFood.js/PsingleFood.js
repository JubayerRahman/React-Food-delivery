import React from "react";
import "./PsingleFood.css"
const PsingleFood =(props)=>{

    return(
        <div>
            <div className="Psinngle">
        <h1>{props.name}</h1>
        <div className="quantity">
            <p>{props.quantity}</p>
            <p>X</p>
            <p>{props.price}</p>
            <p>=</p>
            <p>{props.finalPrice}</p>
        </div>
        </div>
        </div>

    )
}
export default PsingleFood;