import React from 'react'
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
        <div className="flex">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
        </div>
    </div>
  )
}

export default Testimonials