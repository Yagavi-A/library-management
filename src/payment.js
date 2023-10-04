import React from 'react';
import './payment.css'

function Payment(){

    return(
       <div className='payment'>
        <h1>Payment Page</h1><br/>
        <form>
            <input type='name' placeholder='Book Name'></input>
            <input type='text' placeholder='No of copies'></input>
            <input type='text' placeholder='UPI ID'></input><br />
            <button> Pay Now</button>
        </form>
        </div>
    );
}

export default Payment;