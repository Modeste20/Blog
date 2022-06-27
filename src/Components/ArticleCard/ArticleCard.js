import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import slugify from 'slugify'
import './ArticleCard.css'

const ArticleCard = ({ recentPost, category, date, title, className='', description }) => {
    
    return (
        <article className={className + (recentPost ? " card card-post-recent mt-0 " : "  ") + " card mx-auto card-article border-0 "}>
            <div className="row">
                <div style={{ padding: '0 !important' }} className={'card-image ' + (recentPost ? "col-5 col-lg-3" : "col-12 col-sm-12 col-md-6 col-lg-5  col-xl-4")}>
                    <StaticImage
                        src="./../../images/banner-blog-lg.jpg"
                        alt="A dinosaur"
                        placeholder="blurred"
                    />
                </div>
                <div style={{ padding: '0 !important' }} className={recentPost ? "col-7 col-lg-9" : "col-12 col-sm-12 col-md-6 col-xl-8 col-lg-7"}>
                    <div className="card-body">
                        <div className="card-head pb-3 d-flex justify-content-between align-items-center">
                            <div className="card-category-title">
                                {
                                    category === "web" ? "Dev. web" : (category === "ui" ? "UI Design" : "Autres")
                                }
                            </div>

                            <div className="card-date">
                                <time datetime={date} className="">
                                    {date}
                                </time>
                            </div>

                        </div>
                        <h5 className="card-title py-1 mt-2"><Link to={'/blog/'+(title && slugify(title, { lower: true }))}>{title}</Link></h5>
                        {
                            !recentPost && <p className="card-text">
                                {description}
                            </p>
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ArticleCard