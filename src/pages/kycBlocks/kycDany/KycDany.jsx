import React from 'react'
import Header from '../../../components/header/Header'
import Button from '../../../components/button/Button'
import { ReactComponent as StatusError } from '../../../assets/icons/statusError.svg'
import './KycDany.css'

const KycDany = () => {
  return (
    <div className='KycDany'>
        <Header hasMenu2={true}/>
        <div className="KycDanyWrapper">
            <div className="Dany">
                <div className="DanyData">
                    <StatusError/>
                    <h2>Ваша заявка принята</h2>
                </div>
                <h3>Пожалуйста, ожидайте решение специалиста в течении 24 часов</h3>
                <Button text={"Вернуться"}/>
            </div>
        </div>
    </div>
  )
}

export default KycDany