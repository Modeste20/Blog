import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../Components/Layout/Layout'
import './about.css'

const About = () => {
    return (
        <Layout pageTitle={'About Page'}>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <Link to='/'>A propos !</Link>
            <button style={{padding:'13px 15px',background:'#0075E2',border:0,borderRadius:5,color:'#fff',display:'block',margin:'15px 0'}}>Envoyer</button>
            <button style={{padding:'13px 15px',background:'#7B0EA2',border:0,borderRadius:5,color:'#fff',display:'block',margin:'15px 0'}}>Envoyer</button>
            <button style={{padding:'13px 15px',background:'#7e1f86',border:0,borderRadius:5,color:'#fff',display:'block',margin:'15px 0'}}>Envoyer</button>
        </Layout>
    )
}

export default About