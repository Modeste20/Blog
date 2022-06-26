import React from 'react'
import CardFormation from './CardFormation/CardFormation'
import './FormationTimeline.css'

const table = Array.from({length:5},i => i)

const FormationTimeline = () => {

  return (

    <div className="formations-timeline">
        {
            table.map((c,index) => <CardFormation index={index} />)
        }
    </div>

  )
}

export default FormationTimeline