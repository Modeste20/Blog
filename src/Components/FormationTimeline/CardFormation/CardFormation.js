import React from 'react'
import './CardFormation.css'

const CardFormation = ({ index, period, title, children }) => {
    return (
        <div className={" timeline-block " + ((parseInt(index, 10) % 2 === 0) ? "" : "right")}>
            <div className="timeline">
                <div className="timeline-circle">

                </div>
                <div className="timeline-content">
                    <h3>{period}</h3>
                    <h4>{title}</h4>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}

export default CardFormation