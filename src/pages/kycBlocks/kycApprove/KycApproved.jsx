import React from 'react'
import { ReactComponent as IconOk } from '../../../assets/icons/iconOk.svg'
import Header from '../../../components/header/Header'
import Button from '../../../components/button/Button'
import "./kycApprove.css"

const kycApprove = () => {
  return (
    <div className='kycApprove'>
        <Header hasMenu2={true}/>
        <div className="kycApproveWrapper">
            <div className="Approve">
                <div className="ApproveData">
                    <IconOk/>
                    <h2>Ваша заявка принята</h2>
                </div>
                <h3>Пожалуйста, ожидайте решение специалиста в течении 24 часов</h3>
                <Button text={"Вернуться"}/>
            </div>
        </div>
    </div>
  )
}

export default kycApprove