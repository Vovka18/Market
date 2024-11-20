import React from 'react'
import Header from '../../../components/header/Header'
import {ReactComponent as Calendar} from '../../../assets/icons/Calendar.svg'
import Button from '../../../components/button/Button'
import './Kyc.css'


const Kyc = () => {
  return (
    <div className='Kyc'>
        <Header  hasMenu2={true}/>
        <div className="KycWrapper">
            <h2>Верификация личности</h2>
            <div className="inputs">
                <input type="text" placeholder='Имя ' />
                <input type="text" placeholder='Фамилия' />
                <input type="text" placeholder='Отчество' />
                <div className="inputDate">
                    <input type="text" placeholder='Дата рождения' />
                    <input type="date" className='date' />

                </div>
                <div className="select">
                    <select>
                        <option value="" disabled selected>Тип документа</option>
                        <option value="btc">type doc</option>
                        <option value="eth">type doc</option>
                        <option value="usdt">type doc</option>
                        <option value="bnb">type doc</option>
                    </select>
                </div>
                <input type="text" placeholder='Серия и номер документа' />

                <div className="file">
                    <span>Селфи с документом</span>
                    <input type="file"/>
                </div>
            </div>
            <div className="button">
                <Button text={"Отправить заявку"}/>
            </div>
        </div>
    </div>
  )
}

export default Kyc