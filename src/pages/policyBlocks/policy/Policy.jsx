import React from 'react'
import Header from '../../../components/header/Header'
import './Policy.css'


const Policy = () => {
  return (
    <div className='Policy'>

        <Header hasMenu2={true}/>
        <div className="PolicyWrapper">

        <h2>Политика конфиденциальности</h2>
            <ol>
                <li>
                    <span>Общие положения</span>
                    <p>Настоящая Политика конфиденциальности описывает порядок обработки, хранения и защиты персональных данных, собираемых торговой платформой MARKETFX (далее — Платформа). Мы соблюдаем требования действующего законодательства в области защиты персональных данных и стремимся к обеспечению безопасности информации наших пользователей.</p>
                </li>
                <li>
                    <span>Сбор данных</span>
                    <ul>
                        <li>Персональные данные: имя, фамилия, адрес электронной почты, номер телефона, идентификационные данные пользователя, банковские реквизиты и платежные данные.</li>
                        <li>Технические данные: IP-адрес, тип устройства, операционная система, тип браузера и другие данные о взаимодействии пользователя с Платформой.</li>
                        <li>Данные о транзакциях: история сделок, суммы переводов, реквизиты и прочая информация, связанная с торговой активностью.</li>
                    </ul>
                </li>
                <li>
                    <span>Цели обработки данных</span>
                    <p>MARKETFX обрабатывает персональные данные для следующих целей:денциальности.</p>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Policy