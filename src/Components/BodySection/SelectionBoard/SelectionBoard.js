import React, {useState} from "react";
import './SelectionBoard.css'
import SingleFood from "./SingleFood";

const Food = []


const SelectionBoard =(props)=>{
    const foods =[
        {key:"1", name:"ভাত", description:"তাজা এবং ভালো মানের চাল একজনের জন্য যথেষ্ট", price:"10"},
        {key:"2", name:"ডিমের তরকারি", description:"আলু ও লঙ্কা দিয়ে সুন্দর ডিমের তরকারি",price:"18"},
        {key:"3", name:"আলু ভাজি", description:"মশলা দিয়ে আলু ভাজা", price:"15"},
        {key:"4", name:"ইলিশ মাছের তরকারি", description:"এই মাছের তরকারি পেঁয়াজ এবং অনেক মশলা দিয়ে প্রস্তুত করা হয়", price:"125"},
        {key:"5", name:"মুরগীর তরকারি", description:"তাজা উপাদান এবং আলু দিয়ে মুরগির তরকারি প্রস্তুত করা হয়", price:"80"},
        {key:"6", name:" তেলাপিয়া মাছ", description:"এই মাছ দক্ষতা এবং পারফেকশন সঙ্গে রান্না করা হয়.", price:"65"},
    ]
    const [selectedFood , setSelectedFood] = useState(Food)

    const enterData = storeData=>{
        const finalFoodList={
            ...storeData
        }
        setSelectedFood( foodData=>{
            return[storeData, ...foodData]
        })
        console.log(finalFoodList)
        // props.singleFoodInfo(enterData)
        props.items(finalFoodList)
    }

    return(
        <div className="selectionBoard">
        {foods.map((foods)=>(
        <SingleFood
        key={foods.key}
        name ={foods.name}
        description={foods.description}
        price ={foods.price}
        singleFoodInfo ={enterData}
        />))} 
        </div>
    )
}

export default SelectionBoard; 