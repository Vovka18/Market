import React from 'react'
import './DepositCrypto.css'
import Header from '../../../components/header/Header'
import qrImg from '../../../assets/img/QrCode.jpg'
import {ReactComponent as CopyBold} from '../../../assets/icons/depostCopyBold.svg'
import Button from '../../../components/button/Button'

const DepositCrypto = () => {

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
          alert('Текст скопирован: ' + text);
        }).catch(err => {
          console.error('Не удалось скопировать текст: ', err);
        });
    };

  return (
    <div className='DepositCrypto'>
        <Header  hasMenu2={true}/>
        <div className="DepositCryptoWrapper">

            <div className="inputBlock">
                <h2>Пополнение криптовалюты</h2>
                <div className="inputs">
                    <select>
                        <option value="" disabled selected>Выберите криптовалюту</option>
                        <option value="btc">Bitcoin</option>
                        <option value="eth">Ethereum</option>
                        <option value="usdt">Tether</option>
                        <option value="bnb">Binance Coin</option>
                    </select>
                    <input type="text" placeholder='Укажите сумму пополнения' />
                </div>
            </div>

            <div className="transferAdrdess">
                <h2>Адрес пополнения</h2>
                <div className="transferAdrdessWrapper">
                    <img src={qrImg} alt="qr" />
                    <h2 onClick={()=>handleCopy("TxH6g5fHGBgfy677hjbkjJKg7bvVbNnj")}>TxH6g5fHGBgfy677hjbkjJKg7bvVbNnj <CopyBold/></h2>
                    <p>Внимательно перепроверьте адрес пополнения. Средства, отправленные на другой адрес, будут утеряны безвозвратно!</p>
                </div>
                <Button text={"Пополнить"} />
            </div>
        </div>
    </div>
  )
}

export default DepositCrypto