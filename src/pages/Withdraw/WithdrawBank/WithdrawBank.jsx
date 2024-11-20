import React from 'react'
import Header from '../../../components/header/Header'
import Button from '../../../components/button/Button'
import './WithdrawBank.css'

const WithdrawBank = () => {
  return (
    <div className='WithdrawBank'>
        <Header  hasMenu2={true}/>
        <div className="WithdrawBankWrapper">
            <h2>Вывод фиатной валюты</h2>
            <div className="inputs">
                <select>
                    <option value="" disabled selected>Выберите криптовалюту</option>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                </select>
            </div>
            <h2>Реквизиты для вывода</h2>
            <div className="inputs details">
                <input type="text" placeholder='Имя владельца счета' />
                <input type="text" placeholder='Название банка' />
                <input type="text" placeholder='Номер телефона СБП' />
                <input type="text" placeholder='Номер карты' />
                <input type="text" placeholder='Сумма вывода' />
            </div>
            <p>Внимательно перепроверьте адрес и сеть кошелька вывода.Средства, отправленные на другой адрес или сеть, будут утеряны безвозвратно!</p>
            <Button text={"Отправить заявку"}/>
        </div>
    </div>
  )
}

export default WithdrawBank