import React from 'react'
import Header from '../../../components/header/Header'
import {ReactComponent as CopyBold} from '../../../assets/icons/depostCopyBold.svg'
import Button from '../../../components/button/Button'
import './DepostBank.css'

const DepostBank = () => {

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
          alert('Текст скопирован: ' + text);
        }).catch(err => {
          console.error('Не удалось скопировать текст: ', err);
        });
    };

  return (
    <div className='DepositBank'>
        <Header  hasMenu2={true}/>
        
        <div className="DepositBankWrapper">
            <div className="replenishment">
                <h2>Пополнение фиатной валюты</h2>
                <div className="input">
                    <select>
                        <option value="" disabled selected>Выберите банк</option>
                        <option>Bank1</option>
                        <option>Bank2</option>
                        <option>Bank3</option>
                        <option>Bank4</option>
                    </select>
                    <select>
                        <option value="" disabled selected>Выберите платежную систему</option>
                        <option>plteznaya sistema 1</option>
                        <option>plteznaya sistema 2</option>
                        <option>plteznaya sistema 3</option>
                        <option>plteznaya sistema 4</option>
                    </select>
                    <input type="text" placeholder="Укажите сумму пополнения" />
                </div>
            </div>

            <div className="ReplenishmentDetails">
                <div className="inputBlock">
                <h2>Реквизиты пополнения</h2>

                <div className="input">
                        <p>Имя получателя</p>
                        <div className="copyWrapper">
                            <input type="text" />
                            <div className="wrapperSvg">
                                <CopyBold onClick={()=>handleCopy("inputValueTEXT!!!!!")}/>
                            </div>
                        </div>
                    </div>

                    <div className="input">
                        <p>Имя получателя</p>
                        <div className="copyWrapper">
                            <input type="text" />
                            <div className="wrapperSvg">
                                <CopyBold onClick={()=>handleCopy("inputValueTEXT!!!!!")}/>
                            </div>
                        </div>
                    </div>

                    <p>Внимательно перепроверьте реквизиты пополнения. Средства, отправленные на другой счет, будут утеряны безвозвратно!</p>
                </div>
                <Button text={"Пополнить"}/>
            </div>
        </div>
    </div>
  )
}

export default DepostBank