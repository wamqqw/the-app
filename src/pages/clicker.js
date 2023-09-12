import React, { useEffect, useState } from 'react';
import './clicker.css'
import { json } from 'react-router-dom';

function сlicker() {
    const [count, setCount] = useState(0); 
    const [amount, setAmount] = useState(1); 
    //
    const UserData = {
      score: count,
      click: amount,
    }
    localStorage.setItem("data", JSON.stringify(UserData))


    useEffect(() => {
      const getData = localStorage.getItem("data")
      if(getData.score) {
        setCount(getData.score)
      }
    });

    
    const handleClick = () => {
      let record = Number(count) + Number(amount)
      setCount(record);
    };

    const buyUpgrade = () => {
      if (count >= 10) { 
        setCount(count - 10); 
        setAmount(amount + 1); 
      } else {
        alert('Not enough points to buy upgrades!');
      }
    };

  
    return (
      <div className='clicker'>
        <h1>ClickerGame</h1>
        <p className='points'>Points : {count}</p>
        <p>Level click: {amount}</p>
        <button className='mainBtn' onClick={handleClick}>Click me!</button>
        <button className="upgradeBtn" onClick={buyUpgrade}>Upgrade (10 points)</button>
      </div>
    );
  }
  
export default сlicker;