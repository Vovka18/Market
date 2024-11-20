import React from 'react'
import { ReactComponent as Green } from '../../assets/icons/transactionsGreen.svg'
import { ReactComponent as Yellow } from '../../assets/icons/transactionsYellow.svg'
import { ReactComponent as Red } from '../../assets/icons/transactionsRed.svg'

const ListTransaction = ({listTransaction}) => {

    const returnIcon = (status) => {
        if(status == 1) return <Green/>
        if(status == 2) return <Yellow/>
        if(status == 3) return <Red/>
    }

  return (
    <ul className='history'>
        {listTransaction.map((transaction, idx)=><li key={idx}>
            <p className="name">{transaction.name}</p>
            <p className="id">{transaction.id}</p>
            <p className={transaction.summ[0] == "+" ? "sum" : "sum minus"}>{transaction.summ}</p>
            <p className="date">{transaction.date.split(" ")[0]}<br/>{transaction.date.split(" ")[1]}</p>
            {
                returnIcon(transaction.status)
            }
        </li>)}
    </ul>
  )
}

export default ListTransaction