import React,{useState, useEffect} from 'react'
import Sub from './Sub'
import "./SubList.css"

const SubList = () => {
    const [basic, setBasic] = useState(9.99)
    const [pro, setPro] = useState(19.99)
    const [master, setMaster] = useState(29.99)
    const [yearly, setYearly] = useState(false);

    const handleClick = () => {
        setYearly(!yearly);
    }

    //Calc percentage function
    const calcPercent = (num, percent) => {
        return ((num * 12) / 100) * percent;
        //number x 12month's divided by 100
        //100/12 = 8.3, then 8.3*12=96, then *by100
    }

    useEffect(() => {
        if(yearly) {
            setBasic(calcPercent(basic, 70).toFixed(0));
            setPro(calcPercent(pro, 70).toFixed(0));
            setMaster(calcPercent(master, 70).toFixed(0));
        } else {
            setBasic(9.99);
            setPro(19.99);
            setMaster(29.99);
        }
    }, [yearly])


  return (
    <section className='main'>
        <div className='container --center-all'>
            <div className='title'>
                <h2>Pricing</h2>
                <div className='--line'></div>
            </div>
            <div className='--flex-center --my2'>
                <p>Monthly</p>
                <div className='--mx2'>
                    <span 
                      className={yearly ? "toggle-btn toggled" : "toggle-btn"}
                      onClick={handleClick}
                    >
                        <div className={yearly ? "ball move" : "ball"}></div>
                    </span>
                </div>
                <p>Yearly</p>
            </div>
        </div>

        <div className='sub-plans'>
            <Sub 
                plan={"Basic"}
                theme={"theme1"}
                price={basic}
                isBasic={true}
                yearly={yearly}
                onBuy={() => alert(basic)}
            />
            <Sub 
                plan={"Pro"}
                theme={"theme2"}
                price={pro}
                isMaster={true}
                yearly={yearly}
                onBuy={() => alert(pro)}
            />
            <Sub 
                plan={"Master"}
                theme={"theme3"}
                price={master}
                isPro={true}
                yearly={yearly}
                onBuy={() => alert(master)}
            />
        </div>
    </section>
  )
}


export default SubList
