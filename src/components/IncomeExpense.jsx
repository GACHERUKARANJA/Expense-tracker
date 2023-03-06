import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'

const IncomeExpense = () => {
  const add =(a,b)=>a+=b
    const {transaction}=useContext(GlobalContext)
  let amount=transaction.map(singletransaction=>singletransaction.amount)
   let Incomes=amount.filter(amount=>amount>0)
    let TotalIncomes=Incomes.reduce(add,0)

    let Expense=amount.filter(amount=>amount<0)
    let TotalExpense=Expense.reduce(add,0)*-1

  return (
    <>
      <div className='Income__expense'>
        <div className='Income'>
            <h2>INCOME</h2>
            <h1>${TotalIncomes}</h1>
        </div>
        <div className='Expense'>
            <h2>EXPENSE</h2>
            <h1>${TotalExpense}</h1>
        </div>
      </div>
    </>
  )
}

export default IncomeExpense