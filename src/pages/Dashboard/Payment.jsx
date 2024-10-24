import React, { useState } from 'react';  

function Payment() {  
  const [cardNumber, setCardNumber] = useState('');  
  const [expiryDate, setExpiryDate] = useState('');  
  const [cvv, setCvv] = useState('');  
  
  // function to handle the form submission  
  const handlePayment = () => {  
    // Perform payment logic here  
    alert("Payment processed!"); 
      };  

  // Check if all fields are filled  
  const isFormValid = () => {  
    return cardNumber && expiryDate && cvv;  
  };  

  return (  
    <div className='p-10 flex flex-col w-full h-full gap-5'>  
      <p>Payment details</p>  

      <div>  
        <p>Credit Card Number</p>  
        <textarea  
          name="cardNumber"  
          rows="1"  
          cols="40"  
          placeholder='XXXXXXXXXXXXX'  
          value={cardNumber}  
          onChange={(e) => setCardNumber(e.target.value)} // update state on change  
          className='border border-black focus:outline-none focus:border-blue-500 pl-2 rounded-md'  
        />  
      </div>  

      <div className='flex gap-3'>  
        <div>  
          <p>Expiry Date</p>  
          <textarea  
            name="expiryDate"  
            rows="1"  
            cols="20"  
            placeholder='mm/yy'  
            value={expiryDate}  
            onChange={(e) => setExpiryDate(e.target.value)} // update state on change  
            className='border border-black focus:outline-none focus:border-blue-500 pl-2 rounded-md'  
          />  
        </div>  

        <div>  
          <p>CVV</p>  
          <textarea  
            name="cvv"  
            rows="1"  
            cols="20"  
            placeholder='xxx'  
            value={cvv}  
            onChange={(e) => setCvv(e.target.value)} // update state on change  
            className='border border-black focus:outline-none focus:border-blue-500 pl-2 rounded-md'  
          />  
        </div>  
      </div>  

      <p>Per booking</p>  
      <div className='flex justify-between w-[35%]'>  
        <p>Consultation fee</p>  
        <p> ₦800</p>  
      </div>  

      <button   
        className='bg-nurse-300 rounded-xl w-40 ml-36 text-white py-1'  
        onClick={handlePayment}  
        disabled={!isFormValid()} // Disable if form is not valid  
      >  
        Make a payment  
      </button>  
    </div>  
  );  
}  

export default Payment;