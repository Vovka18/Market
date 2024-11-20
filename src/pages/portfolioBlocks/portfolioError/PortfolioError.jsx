import React from 'react'
import { ReactComponent as Lock } from '../../../assets/icons/redLock.svg'
import Header from '../../../components/header/Header'
import Button from '../../../components/button/Button'
import './PortfolioError.css'


const PortfolioError = () => {
  return (
    <div className='PortfolioError'>
        <Header  hasMenu2={true}/>

        <div className="PortfolioErrorWrapper">
            <div className="Error">
                <div className="errorData">
                    <Lock/>
                    <h2> На данный момент у Вас отсутствует доступ к инвестиционным портфелям</h2>
                </div>
                <h3>Обратитесь в службу поддержки
                для получения индивидуального плана</h3>
                <Button text={"Вернуться"}/>
            </div>
        </div>
    </div>
  )
}

export default PortfolioError