import React from 'react'
import Header from '../../../components/header/Header'
import { ReactComponent as Ok } from '../../../assets/icons/Ok.svg'
import Button from '../../../components/button/Button'
import './ConvertApprove.css'
const ConvertApprove = () => {
  return (
    <div className='ConvertApprove'>
        <Header  hasMenu2={true}/>
        <div className="ConvertApproveWrapper">
            <div className="Approve">
                <Ok/>
                <h2>Средства успешно переведены</h2>
                <Button text={"Вернуться"}/>
            </div>
        </div>
    </div>
  )
}

export default ConvertApprove