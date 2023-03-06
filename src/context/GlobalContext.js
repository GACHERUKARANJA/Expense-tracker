import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

const InitialVar={
    transaction:[]
}

export const GlobalContext=createContext(InitialVar)

const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,InitialVar)

    const deleteTransaction=(id)=>{
      dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
      })
    }
    const addTransaction=(singletransaction)=>{
      dispatch({
        type:'ADD_TRANSACTION',
        payload:singletransaction
      })
    }
      
    
     return(
        <>
          <GlobalContext.Provider value={
            {transaction:state.transaction,
              deleteTransaction,addTransaction
          } }>
              {children}
          </GlobalContext.Provider>
        </>
     )
}
export default GlobalProvider


