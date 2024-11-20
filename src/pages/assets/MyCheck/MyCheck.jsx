import React from "react";
import { ReactComponent as Btc } from "../../../assets/icons/btc.svg"
import { ReactComponent as Eth } from "../../../assets/icons/eth.svg"
import { ReactComponent as Tether } from "../../../assets/icons/tether.svg"
import "./MyCheck.css";

const MyCheck = ({data}) => {

    const returnIcom = (courseName) => {
        if(courseName == "BTC") {
            return <Btc/>
        }else if(courseName == "ETH"){
            return <Eth/>
        }else{
            return <Tether/>
        }
    }
    const returnCourseName = (courseName) => {
        if(courseName == "BTC") {
            return "Bitcoin"
        }else if(courseName == "ETH"){
            return "Ethereum"
        }else{
            return "Tether"
        }
    }

  return (
    <div className="MyCheck">
      <h2>Мои счета</h2>

        {data.map((items, idx)=><div key={idx} className="checkItem">
            {console.log(items)}
            <div className="checkItemWrapper" onClick={(e)=>{
                console.log(e.target.parentNode );
                
                const parent = e.target.closest('.checkItem');
                if (parent) {
                    // Проверяем, есть ли у этого родителя класс "checkItemWrapperActive"
                    if (!parent.classList.contains('checkItemWrapperActive')) {
                        parent.classList.add('checkItemWrapperActive');
                    } else {
                        parent.classList.remove('checkItemWrapperActive');
                    }
                }
                
            }}>

                <div className="nameChek">
                    <h2>{items.name}</h2>
                    <p>{items.percentage}</p>
                </div>
                <div className="dataChek">
                    <h2>{items.value}</h2>
                    <p>{items.usd}</p>
                </div>
            </div>
            <ul>
                {items.data.map((courseData)=><li>
                    <div className="course">
                        {
                            returnIcom(courseData.course)
                        }
                        <div className="courseName">
                            <h2>{courseData.course}</h2>
                            <p>{returnCourseName(courseData.course)}</p>
                        </div>

                    </div>

                    <div className="value">
                        <h2>{courseData.value}</h2>
                        <p>{courseData.usd}</p>
                    </div>

                </li>)}
            </ul>
        </div>)}
      
    </div>
  );
};

export default MyCheck;
