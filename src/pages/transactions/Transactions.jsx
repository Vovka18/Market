import React from 'react'
import Header from '../../components/header/Header'
import './Transactions.css'
import ListTransaction from './ListTransaction'

const Transactions = () => {
    const listTR = [
        {name: "Альфа-Банк",id: 3,summ: "+234",date: "11-11-24 08:24", status: 1},
        {name: "Сбербанк",id: 12,summ: "+1234",date: "11-11-24 08:24", status: 1},
        {name: "USDT",id: 542,summ: "-134",date: "11-11-24 08:24", status: 2},
        {name: "Сбербанк",id: 11,summ: "+134",date: "11-11-24 08:24", status: 1},
        {name: "Альфа-Банк",id: 1234,summ: "+1234",date: "11-11-24 08:24", status: 3},
        {name: "Ethereum",id: 1234,summ: "+234",date: "11-11-24 08:24", status: 3},
        {name: "Сбербанк",id: 1234,summ: "-34",date: "11-11-24 08:24", status: 1},
        {name: "Альфа-Банк",id: 1234,summ: "+1234",date: "11-11-24 08:24", status: 2},
        {name: "Альфа-Банк",id: 3,summ: "+234",date: "11-11-24 08:24", status: 1},
        {name: "Сбербанк",id: 12,summ: "+1234",date: "11-11-24 08:24", status: 1},
        {name: "USDT",id: 542,summ: "-134",date: "11-11-24 08:24", status: 2},
    ]
  return (
    <div className='Transactions'>
        <Header  hasMenu2={true}/>
        <div className="TransactionsWrapper">
            <h2>История транзакций</h2>
            <div className="historyTransaction">
                <ul className='nameColumns'>
                    <li>Cпособ</li>
                    <li>ID платежа</li>
                    <li>Сумма</li>
                    <li>Дата</li>
                    <li>Статус</li>
                </ul>

                <ListTransaction listTransaction={listTR}/>
                
            </div>
        </div>
    </div>
  )
}

export default Transactions