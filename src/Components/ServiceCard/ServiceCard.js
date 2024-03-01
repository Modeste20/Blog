import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@reach/router'
import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({className,link,title,children,icon}) => {
    return (
        <div className={"mx-auto mx-md-0 my-0 py-2 col-12 col-sm-10 col-md-6 col-lg-4 service-card "+className}>
            <div class="card pt-5">
                <div className="head-icn shadow-lg "> 
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div class="card-body pb-5 px-4">
                    <h3 class="card-title pt-5 mb-4 mt-2">
                            {
                                title
                            }
                    </h3>
                    {
                        children
                    }
                </div>
            </div>
        </div>

    )
}

export default ServiceCard