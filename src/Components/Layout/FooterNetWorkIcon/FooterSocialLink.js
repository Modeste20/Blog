import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const FooterSocialLink = ({ href, className, spin, ...rest }) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(true)
    }

    const onMouseLeave = () => {
        setHover(false)
    }

    return (
        <div className={"network-link network-"+className} onMouseEnter={onHover} onMouseLeave={onMouseLeave}>
            <a href={href} className={className} >
                <FontAwesomeIcon {...rest} spin={hover} />
            </a>
        </div>
    )
}

export default FooterSocialLink