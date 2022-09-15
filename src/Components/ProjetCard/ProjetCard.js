import { Link } from 'gatsby'
import React from 'react'
import './ProjetCard.css'

const ProjetCard = ({ url,image,date,title,description,image_alt }) => {

    return (
        <article className='projet-card my-5 col-12 mx-auto col-sm-9 col-md-6 col-lg-4 px-sm-5'>
            <Link to={url || ''}>
                <div className="card border-0">
                    <img src={image} className="card-img-top" alt={image_alt} />
                    <div className="card-body pt-4">
                        <h4 className="">
                            <time dateTime={date.begin.datetime}>{date.begin.time}</time>
                            {" "}
                            <span className="tiret">
                                -
                            </span>
                            {" "}
                            <time dateTime={date.finish.datetime}>{date.finish.time}</time>
                        </h4>
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </Link>
        </article>
    )

}

export default ProjetCard