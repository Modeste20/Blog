import basketBall from './../../images/hobby/basketball.png'
import code from './../../images/hobby/code.png'
import music from './../../images/hobby/music.png'
import travel from './../../images/hobby/travel.png'


import "./HobbyCard.css"
import React from 'react'

export const HobbyCard = ({icon,title}) => {

    return (
        <div className='col-6 px-1 py-2 my-4 col-sm-6 col-md-3 col-lg-3'>
            <article className="article-hobby text-center">
                <div className="hobby-icon mb-4">
                    {/*<FontAwesomeIcon icon={icon} size='2x' />*/}
                    <img src={icon} alt={title} width={100} />
                </div>
                <div className="hobby-title">
                    <h3>{title}</h3>
                </div>
            </article>
        </div>
    )

}



export const HOBBIES = [
    {
        title:'Programmation',
        icon:code
    },
    {
        title:'Basketball',
        icon:basketBall
    },
    {
        title:'Musique',
        icon:music
    },
    {
        title:'Voyage',
        icon:travel
    }
]