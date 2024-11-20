import React from 'react'
import Header from '../../../components/header/Header'
import { ReactComponent as Ok } from '../../../assets/icons/Ok.svg'
import "./DepositApprove.css"
import Button from '../../../components/button/Button'
const DepositApprove = () => {
  return (
    <div className='DepositApprove'>
        <Header  hasMenu2={true}/>

        <div className="DepositApproveWrapper">
            <div className="Approve">
                <Ok/>
                <h2>Заявка на пополнение средств
                успешно отправлена </h2>
                <Button text={"Вернуться"}/>
            </div>
        </div>
    </div>
  )
}

export default DepositApprove