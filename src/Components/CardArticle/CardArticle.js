import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import './CardArticle.css'

const getCategory = (category) => {
    if (category === "web") {
        return "Dev. web"
    } else {
        if (category === "ui") {
            return "Design"
        } else {
            return "Autres"
        }
    }
}

const CardArticle = ({ url, image_data, image_alt, category, date, title, description }) => {

    const image = getImage(image_data)

    return (
        <div className="article col-12 mx-auto col-sm-9 col-md-6 col-lg-4 px-sm-5">
            <div className="card-article">
                <div className="article-img">
                    <GatsbyImage image={image} alt={image_alt} />
                </div>
                <div className="article-content">
                    <div className="content-head">
                        <div className="category-title">
                            {getCategory(category)}
                        </div>
                        <div className="date">
                            <time dateTime={date}>
                                {
                                    date
                                }
                            </time>
                        </div>
                    </div>
                    <h4 className='article-title'>
                        <Link to={url}>
                            {title}
                        </Link>
                    </h4>
                    <p className="article-description">
                        {
                            description
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardArticle