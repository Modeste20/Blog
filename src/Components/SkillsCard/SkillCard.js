import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './SkillCard.css'

const SkillCard = ({className,title,icon,children}) => {

  return (
    <article className={"col-12 py-5 px-4 mx-auto mx-md-0 col-sm-9 col-md-6 col-lg-4"}>
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

export const SKILLS = [
    {   
        className:'skill-html',
        title:'HTML, CSS et Javascript',
        icon:<FontAwesomeIcon icon={faHtml5} />,
        children:(
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat iste quas impedit enim debitis alias! Possimus 
                asperiores ab deserunt id debitis aperiam reprehenderit, accusamus distinctio corrupti expedita earum in?
            </p>
        )
    },
    {   
        className:'skill-css',
        title:'HTML, CSS et Javascript',
        icon:<FontAwesomeIcon icon={faHtml5} />,
        children:(
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat iste quas impedit enim debitis alias! Possimus 
                asperiores ab deserunt id debitis aperiam reprehenderit, accusamus distinctio corrupti expedita earum in?
            </p>
        )
    },
    {   
        className:'skill-js',
        title:'HTML, CSS et Javascript',
        icon:<FontAwesomeIcon icon={faHtml5} />,
        children:(
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat iste quas impedit enim debitis alias! Possimus 
                asperiores ab deserunt id debitis aperiam reprehenderit, accusamus distinctio corrupti expedita earum in?
            </p>
        )
    },
    {
        className:'skill-front',
        title:'HTML, CSS et Javascript',
        icon:<FontAwesomeIcon icon={faHtml5} />,
        children:(
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat iste quas impedit enim debitis alias! Possimus 
                asperiores ab deserunt id debitis aperiam reprehenderit, accusamus distinctio corrupti expedita earum in?
            </p>
        )
    }
]

export default SkillCard
