import { Router } from "@reach/router"
import Bread from "./Bread/Bread"
import React from 'react'
import './BreadCrumb.css'


export const BreadCrumb = () => {
    return (
        <Router primary={false} className='bread-crumb'>

            <Bread path="/" url={'/'} text={'Home'} className=''>
                <Bread path="/blog" url={'/blog'} text={'Blog'} className=''></Bread>
                <Bread path="/contactez-moi" url={'/contactez-moi'} text={'Contactez-moi'} className=''></Bread>
                <Bread path="/services" url={'/services'} text={'mes services'} className=''></Bread>
            </Bread>
        </Router>

    )
}