import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React, { memo } from 'react'

const Bread = memo((props) => {
    const renderCrumb = () => {
        if (props.location && props.location.pathname.endsWith(props.path || '')) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className={'bread '+props.className}>
            <Link to={props.url}>
                {props.text}
            </Link>
            {renderCrumb && React.Children.count(props.children) > 0 && (
                <div className='d-flex align-items-center'>
                    <div className={'bread-separator px-3'}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>

                    <div className={'bread-children '}>{props.children}</div>
                </div>
            )}
        </div>
    )
})


export default Bread


