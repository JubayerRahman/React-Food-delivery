import React, {useState} from "react";
import './BodySection.css'
import CardSection from "./CardSection/CardSection";
import SelectionBoard from "./SelectionBoard/SelectionBoard";

const Food = []

const BodySection =(props)=>{
    const [selectedFood , setSelectedFood] = useState(Food)

    const enterData = storeData=>{
        const finalFoodList={
            ...storeData
        }
        setSelectedFood( foodData=>{
            return[storeData, ...foodData]
        })
        console.log(finalFoodList)
        props.items(finalFoodList)
    }
    return(
        <div className="bodySection">
            <div className="imageBg">
           <CardSection/> 
            </div>
            <div className="selectionSection">
               <SelectionBoard items={enterData}/>
            </div>
        </div>
    )
}

export default BodySection;