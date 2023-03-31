import React, {useState}  from 'react';
import './App.css';
import BodySection from './Components/BodySection/BodySection';
import Header from './Components/HeaderSection/Header';
import Popup from './Components/popupComponent/Popup';

const Food = []

function App() {
  const [cart, setCart] = useState(false);
  const [selectedFood , setSelectedFood] = useState(Food)

  const enterData = storeData=>{
    const finalFoodList={
        ...storeData
    }
    setSelectedFood( foodData=>{
        return[storeData, ...foodData]
    })
    console.log(finalFoodList)
}

  const showCart = ()=>{
    setCart(true)
  }
  const hideCart = ()=>{
    setCart(false)
  }
  const cartCount = selectedFood.length
  console.log(selectedFood)

  return (
    <div className="App">
      {cart &&<Popup onHide={hideCart} setCartCount={cartCount} summery={selectedFood}/>}
      <Header onShow={showCart} setCartCount={cartCount}/>
      <BodySection items={enterData}/>
    </div>
  );
}

export default App;
