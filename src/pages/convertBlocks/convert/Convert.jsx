import React, { useState } from 'react'
import Button from '../../../components/button/Button'
import Header from '../../../components/header/Header'
import { ReactComponent as MingcuteTransferLine } from '../../../assets/icons/mingcuteTransferLine.svg'
import { ReactComponent as Btc } from "../../../assets/icons/btc.svg"
import { ReactComponent as Eth } from "../../../assets/icons/eth.svg"
import { ReactComponent as Tether } from "../../../assets/icons/tether.svg"
import './Convert.css'



const Convert = () => {

    const [ currencyType, setCurrencyType ] = useState("Tether")

    const returnIcon = (courseName) => {
        if(courseName == "Bitcoin") {
            return <Btc/>
        }else if(courseName == "Ethereum"){
            return <Eth/>
        }else{
            return <Tether/>
        }
    }
    const returnCurrencyName = (courseName) => {
        if(courseName == "Bitcoin") {
            return "BTC"
        }else if(courseName == "Ethereum"){
            return "ETH"
        }else{
            return "Tether"
        }
    }

  return (
    <div className='Convert'>
        <Header  hasMenu2={true}/>
        <div className="ConvertWrapper">
            <h2>Перевод</h2>
            <div className="inputs">
                <div className="twoInput">

                    <div className="splitInput">

                        <div className="inputBlock">
                            <p>Из</p>
                            <select>
                                <option value="" disabled selected>Пополнения</option>
                                <option> 1</option>
                                <option> 2</option>
                                <option> 3</option>
                                <option> 4</option>
                            </select>
                        </div>

                        <div className="inputBlock">
                            <p>На</p>
                            <select>
                                <option value="" disabled selected>Спотовый счет</option>
                                <option> 1</option>
                                <option> 2</option>
                                <option> 3</option>
                                <option> 4</option>
                            </select>
                        </div>
                    </div>

                    <div className="svg">
                        <MingcuteTransferLine />
                    </div>
                </div>

                <div className="inputCurrency">
                    <div className="currency">
                        {returnIcon(currencyType)}
                        <span>{returnCurrencyName(currencyType)}</span>
                    </div>
                        <select onChange={(e)=>{setCurrencyType(e.target.value)}}>
                            <option>Bitcoin</option>
                            <option>Ethereum</option>
                            <option selected>Tether</option>
                        </select>
                </div>

                <input type="text" placeholder='Введите сумму' />

            </div>
            <div className="button">
                <Button text={"Подтвердить"} />
            </div>
        </div>
    </div>
  )
}

export default Convert