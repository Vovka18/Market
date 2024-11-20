import React from 'react'
import Header from '../../../components/header/Header'
import { ReactComponent as Ok } from '../../../assets/icons/Ok.svg'
import Button from '../../../components/button/Button'
import './WithdrawApprove.css'


const WithdrawApprove = () => {
  return (
    <div className='WithdrawApprove'>
        <Header  hasMenu2={true}/>

        <div className="WithdrawApproveWrapper">
            <div className="Approve">
                <Ok/>
                <h2>Заявка на вывод средств
                успешно отправлена  </h2>
                <Button text={"Вернуться"}/>
            </div>
        </div>
    </div>
  )
}

export default WithdrawApprove