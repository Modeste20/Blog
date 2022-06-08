import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import { useState } from 'react'
import './DropDown.css'

const DropDown = ({ list, title }) => {

    const [isListOpen, setIsListOpen] = useState(false)
    const [headerTitle, setHeaderTitle] = useState(title)

    const toggleList = (e) => {
        console.log(e)
        e.preventDefault()
        setIsListOpen(c => !c)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth > 576) {
                window.document.body.onclick = () => {
                    if (isListOpen) {
                        setIsListOpen(false)
                    }
                }
            }
        }
    
    })

    



    return (
        <div className="dd-wrapper">
            <Link
                type="button"
                className="dd-header d-flex align-items-center nav-link"
                onClick={toggleList}
                to='#'
            >
                <span className="dd-header-title pe-2">{headerTitle}</span>
                {isListOpen
                    ? <FontAwesomeIcon icon={faAngleUp} />
                    : <FontAwesomeIcon icon={faAngleDown} />}
            </Link>
            {isListOpen && (
                <ul
                    role="list"
                    className="dd-list"
                >
                    {list.map((item) => (
                        <li
                            className="dd-list-item"
                            key={item.id}
                        >
                            <Link to={item.href}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DropDown