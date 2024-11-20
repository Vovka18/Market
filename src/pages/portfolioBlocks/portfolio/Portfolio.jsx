import React from 'react'
import Header from '../../../components/header/Header'
import { ReactComponent as Standart } from '../../../assets/icons/StandartBriefcase.svg'
import { ReactComponent as Business } from '../../../assets/icons/businessBriefcase.svg'
import { ReactComponent as Corporate } from '../../../assets/icons/CorporateBriefcase.svg'
import './Portfolio.css'


const Portfolio = () => {
  return (
    <div className='Portfolio'>
        <Header  hasMenu2={true}/>
        <div className="PortfolioWrapper">
            <h2>Инвестиционные портфели</h2>
            <ul>
                <li>
                    <Standart/>
                    <div className="line"/>
                    <div className="infoBlock">
                        <h2>СТАНДАРТНЫЙ</h2>
                        <p>Годовая доходность: 547%</p>
                    </div> 
                    
                    <div className="line"/>

                    <div className="priceInfo">
                        <h2>10,000$</h2>
                        <p>180 дней</p>
                    </div>
                </li>
                <li>
                    <Business/>
                    <div className="line"/>
                    <div className="infoBlock">
                        <h2>БИЗНЕС</h2>
                        <p>Годовая доходность: 1,093%</p>
                    </div> 
                    
                    <div className="line"/>

                    <div className="priceInfo">
                        <h2>10,000$</h2>
                        <p>180 дней</p>
                    </div>
                </li>
                <li>
                    <Corporate/>
                    <div className="line"/>
                    <div className="infoBlock">
                        <h2>КОРПОРАТИВНЫЙ</h2>
                        <p>Годовая доходность: 2,431%</p>
                    </div> 
                    
                    <div className="line"/>

                    <div className="priceInfo">
                        <h2>25,000$</h2>
                        <p>360 дней</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Portfolio