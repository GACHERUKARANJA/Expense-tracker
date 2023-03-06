import React, { useState ,useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';



const AddTransaction = () => {
  const {addTransaction}=useContext(GlobalContext)
  const [text,setText]=useState('')
  const [amount,setAmount]=useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    const newTransaction={
      id:Math.floor(Math.random()*1900000),
      text:text,
      amount:parseInt(amount)
    }
    setAmount('')
    setText('')
    addTransaction(newTransaction)
  }

  return (
    <div>
        <h1>Add New Transaction</h1>
        <form action="submit" onSubmit={submitHandler}>
            <div className='single__input'>
            <label htmlFor="text">TEXT</label>
            <input type="text" name="text" id="text" 
            value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className='single__input'>
            <label htmlFor="Amount">Amount</label>
            <input type="number" name="Amount" id="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            
            <button type="submit" className='btn'>ADD</button>
            <p>{amount}</p>
        </form>
    </div>
  )
  
}

export default AddTransaction