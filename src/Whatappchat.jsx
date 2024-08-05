import React from 'react'
import { useState } from 'react';
import './card.css'
const Whatappchat = () => {

    const [phoneNumber, setPhoneNumber] = useState('+91'); // Default value

    const openWhatsApp = () => {
      if (phoneNumber) {
        const url = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`; 
        window.open(url, '_blank');
      }
    };
  return (
       <>
        {/* <p>Enter number to Message directly without saving the contact</p> */}
    <div className='card'>
      <div>
      <input
      className='input_card'
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number with country code"
      />
      <br />
      <button className='btn_card' onClick={openWhatsApp}>Open WhatsApp Chat</button>
      </div>
    </div>
       </>
  )
}

export default Whatappchat