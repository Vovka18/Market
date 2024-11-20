import React from 'react'
import'../SurfaceBlock.css'

import { ReactComponent as Close } from '../../../assets/icons/Close.svg'
import { ReactComponent as BitcoinIco } from '../../../assets/icons/BitcoinIco.svg'
import { ReactComponent as DollarIco } from '../../../assets/icons/dollarIco.svg'

const DepositBlock = ({state, setState}) => {
  return (
    <div className={state ? 'SurfaceBlock SurfaceBlockActive' : 'SurfaceBlock'}>
        <div className="textBlock">
            <div className="SurfaceHeadline">
                <h2>Депозит</h2>
                <Close onClick={()=>setState(false)}/>
            </div>
            <p>Выберите тип депозита</p>
        </div>

        <div className="SurfaceChois">
            <div className="CryptoSurface">
                <BitcoinIco/>
                <div className="text">
                    <h2>Депозит криптовалюты</h2>
                    <p>Я хочу внести на свой аккаунт
                    свои существующие
                    криптоактивы</p>
                </div>
                
            </div>
            <div className="FiatSurface">
                <DollarIco/>
                <div className="text">
                    <h2>Депозит фиатной валюты</h2>
                    <p>Я хочу внести на свой аккаунт
                    свои фиатные активы: банковская карта, перевод и т.д.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DepositBlock