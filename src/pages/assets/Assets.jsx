import React, {useState} from 'react'
import Header from '../../components/header/Header'
import './Assets.css'
import MyCheck from './MyCheck/MyCheck'
import DepositBlock from './depositBlock/DepositBlock'
import WithdrawalFunds from './WithdrawalFunds/WithdrawalFunds'


const Assets = () => {

    const [ depositVisible, setDepositVisible ] = useState(false)
    const [ withdrawalFundsVisible, setWithdrawalFundsVisible ] = useState(false)

    const data = [
        { name: "Спотовый", value: "0.00841 BTC", percentage: "33.65%", usd: "628.79 USD", data:[
            {course: "BTC", value: "0.003276", usd: "295.24 USD"},
            {course: "ETH", value: "0.1361 ", usd: "244.95 USD"},
            {course: "USD", value: "88.6", usd: "88.6 USD"}
        ]},
        { name: "Фьючерсы", value: "0.00833 BTC", percentage: "33.31%", usd: "622.50 USD", data:[
            {course: "BTC", value: "0.003276", usd: "295.24 USD"},
            {course: "ETH", value: "0.1361 ", usd: "244.95 USD"},
            {course: "USD", value: "88.6", usd: "88.6 USD"}
        ]},
        { name: "Пополнения", value: "0.00275 BTC", percentage: "11.01%", usd: "205.70 USD", data:[
            {course: "BTC", value: "0.003276", usd: "295.24 USD"},
            {course: "ETH", value: "0.1361 ", usd: "244.95 USD"},
            {course: "USD", value: "88.6", usd: "88.6 USD"}
        ]},
        { name: "Инвестиции", value: "0.00492 BTC", percentage: "19.68%", usd: "367.78 USD", data:[
            {course: "BTC", value: "0.003276", usd: "295.24 USD"},
            {course: "ETH", value: "0.1361 ", usd: "244.95 USD"},
            {course: "USD", value: "88.6", usd: "88.6 USD"}
        ]},
        { name: "Портфели", value: "0.00059 BTC", percentage: "2.35%", usd: "43.98 USD", data:[
            {course: "BTC", value: "0.003276", usd: "295.24 USD"},
            {course: "ETH", value: "0.1361 ", usd: "244.95 USD"},
            {course: "USD", value: "88.6", usd: "88.6 USD"}
        ]},
      ];

      return (
    <div className='Assets'>

        <div className="WrapperBlock" style={{visibility: depositVisible || withdrawalFundsVisible ? "visible" : "hidden"}}>
            <DepositBlock state={depositVisible} setState={setDepositVisible}/>
            <WithdrawalFunds state={withdrawalFundsVisible} setState={setWithdrawalFundsVisible}/>
        </div>

        <Header deposit={true} hasMenu2={true}/>
        <div className="assetsWrapper">
            <div className="myActiv">
                <h2>Мои активы</h2>
                <div className="countActiv">
                    <p>Кол-во активов</p>
                    <h2>0.025 BTC <span>1866,64 USD</span></h2>
                </div>
                <p className='usd'>+154,58 USD <span>(24ч)</span></p>
            </div>

            <div className="btnMenu">
                <button onClick={()=>setDepositVisible(true)}>Депозит</button>
                <button onClick={()=>setWithdrawalFundsVisible(true)}>Вывод средств</button>
                <button>Конвертация</button>
                <button>Перевод</button>
            </div>

            <MyCheck data={data}/>



        </div>
    </div>
  )
}

export default Assets