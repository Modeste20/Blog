import React from 'react'
import './SkillCard.css'

const SkillCard = ({className,title,icon,children}) => {

  return (
    <article className={"col-12 py-5 px-4 col-sm-9 mx-auto col-md-6 col-lg-4"}>
        <div className={"article-skill "+(className ? className : '')}>
        <div className="article-header pb-1">
            <div className="skill-icon">
                {
                    icon
                }
            </div>
            <div className="skill-title">
                <h3>{title}</h3>
            </div>
        </div>

        <div className="article-main">
            {
                children
            }
        </div>
        </div>
    </article>
  )

}

export default SkillCard
