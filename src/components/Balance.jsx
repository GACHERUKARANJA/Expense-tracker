import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'



function Balance() {
  const {transaction}=useContext(GlobalContext)
  let amount=transaction.map(singletransaction=>singletransaction.amount)
  const total=amount.reduce((acc,currentval)=>acc+currentval,0)
  return (
    <div className='balance__container'>
        <h4>YOUR BALANCE</h4>
        <h2>${total}</h2>
    </div>
  )
}

export default Balance