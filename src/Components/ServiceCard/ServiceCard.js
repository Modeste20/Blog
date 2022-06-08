import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@reach/router'
import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({className,link,title,children,icon}) => {
    return (
        <div className={"mx-auto my-0 py-0 col-12 col-sm-10 col-md-6 col-lg-4 service-card "+className}>
            <div class="card pt-5">
            <div className="head-icn shadow-lg ">
                <FontAwesomeIcon icon={icon} />
            </div>
                <div class="card-body pb-4">
                    <h5 class="card-title">
                        <Link to={link}>
                            {
                                title
                            }
                        </Link>
                    </h5>
                    {
                        children
                    }
                </div>
            </div>
        </div>

    )
}

export default ServiceCard