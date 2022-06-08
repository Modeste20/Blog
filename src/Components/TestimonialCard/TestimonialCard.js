import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Image from './../../images/author.png'
import './TestimonialCard.css'

const TestimonialCard = () => {
    return (
        <div className="testimonial-card">
            <div className="card-quotes-symbol">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 37.5H15.275C15.7396 34.4059 16.8445 31.4426 18.519 28.7996C20.1935 26.1565 22.4008 23.8918 25 22.15L29.475 19.15L26.725 15L22.25 18C18.4832 20.5102 15.3943 23.9114 13.2573 27.9018C11.1204 31.8922 10.0015 36.3484 10 40.875V57.5C10 58.8261 10.5268 60.0979 11.4645 61.0355C12.4021 61.9732 13.6739 62.5 15 62.5H30C31.3261 62.5 32.5979 61.9732 33.5355 61.0355C34.4732 60.0979 35 58.8261 35 57.5V42.5C35 41.1739 34.4732 39.9021 33.5355 38.9645C32.5979 38.0268 31.3261 37.5 30 37.5ZM65 37.5H50.275C50.7396 34.4059 51.8445 31.4426 53.519 28.7996C55.1935 26.1565 57.4008 23.8918 60 22.15L64.475 19.15L61.75 15L57.25 18C53.4832 20.5102 50.3943 23.9114 48.2573 27.9018C46.1204 31.8922 45.0015 36.3484 45 40.875V57.5C45 58.8261 45.5268 60.0979 46.4645 61.0355C47.4021 61.9732 48.6739 62.5 50 62.5H65C66.3261 62.5 67.5979 61.9732 68.5355 61.0355C69.4732 60.0979 70 58.8261 70 57.5V42.5C70 41.1739 69.4732 39.9021 68.5355 38.9645C67.5979 38.0268 66.3261 37.5 65 37.5Z" fill="url(#paint0_linear_156_17)" />
                    <defs>
                        <linearGradient id="paint0_linear_156_17" x1="-21" y1="15" x2="122" y2="134" gradientUnits="userSpaceOnUse">
                            <stop offset="0.263681" stop-color="#D396E9" />
                            <stop offset="0.680757" stop-color="#0086DF" stop-opacity="0.56" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="card-quote">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit aliquam, sunt labore consequuntur sequi itaque iste, fuga eos optio dicta laboriosam totam perferendis sapiente earum ex omnis ullam numquam?
                </p>
            </div>
            <div className="card-author text-center">
                <div className="circle-image d-flex justify-content-center align-items-center">
                    <img
                        src={'https://images.unsplash.com/photo-1575846171058-979e0c211b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
                        alt="" />
                </div>
                <div className="author-info">
                    <h5>Landry Modeste</h5>
                    <p>CEO de ModestEntreprise</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard