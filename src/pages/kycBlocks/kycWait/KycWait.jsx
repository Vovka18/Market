import React from 'react'
import { ReactComponent as UserClock } from '../../../assets/icons/userClock.svg'
import Header from '../../../components/header/Header'
import Button from '../../../components/button/Button'
import './KycWait.css'


const KycWait = () => {
  return (
    <div className='KycWait'>
        <Header hasMenu2={true}/>
        <div className="KycWaitWrapper">
            <div className="Wait">
                <div className="WaitData">
                    <UserClock/>
                    <h2>Ваша заявка принята</h2>
                </div>
                <h3>Пожалуйста, ожидайте решение специалиста в течении 24 часов</h3>
                <Button text={"Вернуться"}/>
            </div>
        </div>
    </div>
  )
}

export default KycWait