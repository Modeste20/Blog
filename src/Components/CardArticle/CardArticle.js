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

const CardArticle = ({blog, url, image_data, image_alt, category, date, title, description,dateTime }) => {

    const image = getImage(image_data)

    return (
        <div className={"article "+(!description ? " post-sidebar ":" ") + (blog ? " mx-auto " : "col-12 mx-auto col-sm-9 col-md-6 col-lg-4 px-sm-5")}>
            <div className={" card-article " + (blog ? "row mx-auto justify-content-center" : "")}>
                <div className={" article-img " +(blog ? "col-12 col-sm-6 col-md-6 col-lg-5" : "")}>
                    <GatsbyImage image={image} alt={image_alt}  />
                </div>
                <div className={" article-content "+(blog ? "col-12 col-sm-6 col-md-6 col-lg-7" : "")}>
                    <div className="content-head">
                        <div className="category-title">
                            {getCategory(category)}
                        </div>
                        <div className="date">
                            <time dateTime={dateTime}>
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
                    {
                        description && <p className="article-description">
                        {
                            description
                        }
                    </p>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default CardArticle