import React, { useContext } from 'react'
import { GlobalContext} from '../context/GlobalContext'


const TransactionList = () => {
   const {transaction}=useContext(GlobalContext)
   const {deleteTransaction}=useContext(GlobalContext)
   
  return (
    <>
  
      <div className="Transaction__list">
        <h3>History</h3>
        <ul className="list">
        {transaction.map(singletransaction=>{
      return (
        <>
        <li className={singletransaction.amount>0?'plus':'minus'} key={singletransaction.id}>
            {singletransaction.text} <span>${singletransaction.amount}</span><button className="deletebtn" onClick={()=>deleteTransaction(singletransaction.id)}>X</button>
          </li>
        </>
      )
    })}
          
        </ul>
      </div> 
    </>
  )
}

export default TransactionList