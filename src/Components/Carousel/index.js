import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { faChevronLeft , faChevronRight, faTable } from '@fortawesome/free-solid-svg-icons';
import './index.css'

const Carousel = ({data}) => {

    console.log('data',data)

    const length = data.length;
    const [current,setCurrent] = useState(0)
    const table = Array.from({length},i => i)

    const prev = () => {
        setCurrent(c => c===0 ? length-1 : c-1)
    }

    const next = () => {
        setCurrent(c => c=== length - 1 ? 0 : c+1)
    }


  return (
    <section className="carousel-testimonials">
        <div className="carousel-arrow arrow-left" onClick={() => prev()}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>

        <div className="carousel-arrow arrow-right" onClick={() => next()}>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>

        <div className="testimonials">
            {
                data.map((elmt,ind) => {
                    /* Si elmt est un tableau alors on est sur un grand écran et 
                        il faudra utiliser deux cartes de témoignages
                     */
                    if(Array.isArray(elmt)){
                        console.log('elmt',elmt)
                        return  ind === current && elmt.map((card_data,index) => <TestimonialCard key={card_data.name} {...card_data}  />)
                    }else{
                        return ind === current && <TestimonialCard key={elmt.name} {...elmt}  />
                    }
                })
            }
        </div>

        <div className='bulles'>
            {
                table.map((_,index) =>{
                    console.log()
                    return (<div onClick={() => setCurrent(index)} className={' circle '+(index === current ? 'active' : '')}></div>)
                })
            }
        </div>
    </section>
  )
}

export default Carousel