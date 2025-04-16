import { useState } from 'react'
import './InfoCard.css'

export const InfoCard = ({title, info, icon: Icon}) => {

    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className="info__card" onMouseEnter={() => {setShowInfo(true)}} onMouseLeave={() => {setShowInfo(false)}}>
            
            {!showInfo ? (
                <>
                    <Icon className='info__card-icon' />
                    <h3 className='info__card-title'>{title}</h3>
                </>
                
            ) 
            : 
            (
                <p className='info__card-info'>{info}</p>
            )
            }
            
        </div>
    )
}
