import React from 'react'
import Header from '../../../components/header/Header'
import { ReactComponent as Icon1 } from '../../../assets/icons/PolicEeye.svg'
import { ReactComponent as Icon2 } from '../../../assets/icons/PoliceLock.svg'
import { ReactComponent as Icon3 } from '../../../assets/icons/PoliceLightbulb.svg'
import { ReactComponent as Icon4 } from '../../../assets/icons/PoliceCapSolid.svg'
import './PolicyAbout.css'


const PolicyAbout = () => {
  return (
    <div className='PolicyAbout'>
        
        <Header hasMenu2={true}/>
        <div className="PolicyAboutWrapper">
            <h2>О команде MARKETFX</h2>
            <p>Наша команда — это группа экспертов с многолетним опытом в сфере финансовых технологий, блокчейна и онлайн-торговли. </p>
            <p>Мы объединены одной целью: создать безопасную, эффективную и интуитивно понятную платформу для торговли, которая удовлетворяет потребности как новичков, так и профессионалов.</p>

            <div className="OurValues">
                <h2>Наши ценности</h2>
                <div className="ValuesWrapper">
                    <div className="Values">
                        <Icon1/>
                        <p>Мы открыты в своей работе и стремимся к созданию доверительных отношений с пользователями.</p>

                    </div>
                    <div className="Values">
                        <Icon2/>
                        <p> Наши специалисты кибербезопасности обеспечивают максимальную защиту средств и информации.</p>

                    </div>
                    <div className="Values">
                        <Icon3/>
                        <p>Мы всегда на шаг впереди, внедряя последние разработки в области блокчейна и финансовых технологий.</p>

                    </div>
                    <div className="Values">
                        <Icon4/>
                        <p>Мы понимаем важность поддержки и обучения, особенно для тех, кто только начинает свой путь в мире торговли. </p>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PolicyAbout