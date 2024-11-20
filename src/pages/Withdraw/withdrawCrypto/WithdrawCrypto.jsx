import React from 'react'
import Header from '../../../components/header/Header'
import "./WithdrawCrypto.css"
import Button from '../../../components/button/Button'

const WithdrawCrypto = () => {
  return (
    <div className='WithdrawCrypto'>
        <Header hasMenu2={true}/>
        <div className="WithdrawCryptoWrapper">
            <h2>Вывод криптовалюты</h2>
            <div className="inputs">
                <select>
                    <option value="" disabled selected>Выберите криптовалюту</option>
                    <option> 1</option>
                    <option> 2</option>
                    <option> 3</option>
                    <option> 4</option>
                </select>
                <input type="text" placeholder='Адрес вывода' />
                <input type="text" placeholder='Сумма вывода' />
            </div>
            <p>Внимательно перепроверьте адрес и сеть кошелька вывода.Средства, отправленные на другой адрес или сеть, будут утеряны безвозвратно!</p>
            <Button text={"Отправить заявку"}/>
        </div>
    </div>
  )
}

export default WithdrawCrypto