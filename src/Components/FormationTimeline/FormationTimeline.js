import React from 'react'
import CardFormation from './CardFormation/CardFormation'
import './FormationTimeline.css'
import slugify from 'slugify'

const FORMATIONS = [
  {
    period:'2021 - 2022',
    title:'Développeur frontend',
    children:(
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla provident,
        tempora non rem voluptatibus eos distinctio? Ex earum libero accusantium minima ab.
        Sit ducimus dolor dolorum expedita vero magni optio.
      </p>
    )
  },
  {
    period:'2021 - 2022',
    title:'Développeur frontend',
    children:(
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla provident,
        tempora non rem voluptatibus eos distinctio? Ex earum libero accusantium minima ab.
        Sit ducimus dolor dolorum expedita vero magni optio.
      </p>
    )
  },
  {
    period:'2021 - 2022',
    title:'Développeur frontend',
    children:(
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla provident,
        tempora non rem voluptatibus eos distinctio? Ex earum libero accusantium minima ab.
        Sit ducimus dolor dolorum expedita vero magni optio.
      </p>
    )
  },
  {
    period:'2021 - 2022',
    title:'Développeur frontend',
    children:(
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla provident,
        tempora non rem voluptatibus eos distinctio? Ex earum libero accusantium minima ab.
        Sit ducimus dolor dolorum expedita vero magni optio.
      </p>
    )
  }
]

const FormationTimeline = () => {

  return (

    <div className="formations-timeline">
        {
            FORMATIONS.map((c,index) => <CardFormation {...c} key={slugify(c.title.toLowerCase())} index={index} />)
        }
    </div>

  )
}

export default FormationTimeline