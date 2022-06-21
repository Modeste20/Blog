import { faBasketball, faDesktop, faHeadphones, faPen, faPenAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./HobbyCard.css"
import React from 'react'

export const HobbyCard = ({icon,title}) => {

    return (
        <div className='col-6 px-1 py-2 my-4 col-sm-6 col-md-3 col-lg-3'>
            <article className="article-hobby text-center">
                <div className="hobby-icon mt-3 mb-4">
                    <FontAwesomeIcon icon={icon} size='2x' />
                </div>
                <div className="hobby-title">
                    <h3>{title}</h3>
                </div>
            </article>
        </div>
    )

}



export const hobbies = [
    {
        title:'Coding',
        icon:faDesktop
    },
    {
        title:'Basketball',
        icon:faBasketball
    },
    {
        title:'Musique',
        icon:faHeadphones
    },
    {
        title:'Writing',
        icon:faPenAlt
    }
]