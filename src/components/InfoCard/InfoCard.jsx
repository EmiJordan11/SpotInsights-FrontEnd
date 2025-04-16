import { useState } from 'react'
import './InfoCard.css'

export const InfoCard = ({title, info, icon: Icon}) => {

    return (
        <div className="info__card">
            
            <div className='info__card__inner'>
                <div className='front__card'>
                    <Icon className='front__card-icon' />
                    <h3 className='front__card-title'>{title}</h3>
                </div>
                <div className='back__card'>
                    <p className='back__card-text'>{info}</p>
                </div>
            </div>
            
        </div>
    )
}
