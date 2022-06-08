import { BreadCrumb } from "../BreadCrumb/BreadCrum"
import React from 'react'
import './Banner.css'


const Banner = ({className,title}) => {
    return (
        <div className={"banner "+className}>
            <div className="container-md banner-content h-100 d-flex justify-content-center align-items-center">
                <div>
                    <h1 style={{ zIndex: '2 !important' }}>{title}</h1>
                    <BreadCrumb />
                </div>

            </div>
        </div>
    )
}

export default Banner;