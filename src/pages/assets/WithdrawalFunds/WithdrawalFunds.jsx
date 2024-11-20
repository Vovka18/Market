import React from 'react'
import '../SurfaceBlock.css'

import { ReactComponent as Close } from '../../../assets/icons/Close.svg'
import { ReactComponent as BitcoinIco } from '../../../assets/icons/BitcoinIco.svg'
import { ReactComponent as DollarIco } from '../../../assets/icons/dollarIco.svg'

const WithdrawalFunds = ({state, setState}) => {
  return (
    <div className={state ? 'SurfaceBlock SurfaceBlockActive' : 'SurfaceBlock'}>
        <div className="textBlock">
            <div className="SurfaceHeadline">
                <h2>Вывод средств</h2>
                <Close onClick={()=>setState(false)}/>
            </div>
            <p>Выберите тип вывода</p>
        </div>

        <div className="SurfaceChois">
            <div className="CryptoSurface">
                <BitcoinIco/>
                <div className="text">
                    <h2>Вывод криптовалюты</h2>
                    <p>Я хочу вывести криптовалюту на
                    свой криптокошелек</p>
                </div>
                
            </div>
            <div className="FiatSurface">
                <DollarIco/>
                <div className="text">
                    <h2>Вывод фиатной валюты</h2>
                    <p>Я хочу вывести средства
                    на банковские реквизиты</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WithdrawalFunds