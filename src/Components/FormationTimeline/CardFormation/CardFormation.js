import React from 'react'
import './CardFormation.css'

const CardFormation = ({ index }) => {
    return (
        <div className={" timeline-block " + ((parseInt(index, 10) % 2 === 0) ? "right" : "")}>
            <div className="timeline">
                <div className="timeline-circle">

                </div>
                <div className="timeline-content">
                    <h3>2021-2022</h3>
                    <h4>Formation développeur web chez Udemy</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis placeat aperiam asperiores aliquid quia voluptates illum, culpa blanditiis ipsum. Recusandae assumenda inventore illo praesentium sint neque adipisci a nemo eveniet.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardFormation