import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import "./../../Style/global.css"
import './layout.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHamburger, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons'
import FooterSocialLink from './FooterNetWorkIcon/FooterSocialLink'
import { useEffect } from 'react'
import { useLocation } from '@reach/router'


const location = [
    {
        id: 0,
        title: 'Conception de site web',
        href: '/conception_web'
    },
    {
        id: 1,
        title: 'Conception de maquette web',
        href: '/design-ui'
    },
]



const Layout = ({ children }) => {

    const { pathname } = useLocation()
    const [headerClass, setHeaderClass] = useState(false)

    useEffect(() => {
        if (['/', '/blog', '/blog/', '/blog#articles'].includes(pathname)) {
            setHeaderClass(true)
        }
    }, [pathname])

    const [fixedHeader, setFixedHeader] = React.useState(false)

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(false)
        console.log('location', location)
    }, [])

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', function (e) {
            if (window.scrollY > 72) {
                setFixedHeader(true)
            } else {
                setFixedHeader(false)
            }
        })

        window.onresize = () => {
            if (window.innerWidth >= 576.1 && active) {
                setActive(false)
            }
        }
    }


    //active navbar on mobile

    const [active, setActive] = useState(false)

    const onClose = () => {
        if (active) {
            setActive(false)
        }
    }

    useEffect(() => {
        if (typeof document !== 'undefined') {
            if (active) {
                document.body.classList.add('body-nav-open')
            } else {
                document.body.classList.remove('body-nav-open')
            }
        }

    }, [active])


    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.onclick = () => {
                if (active) {
                    onClose()
                }
            }
        }
    })

    if (loading) {
        return <div className="loading">
            <div>
                <h4><span>L</span>andry <span>M</span>odeste</h4>
                <div className="load"></div>
            </div>
        </div>
    }


    return (
        <>
            <header className={'header py-4 ' + (fixedHeader ? ' header-sticky ' : '') + (headerClass ? ' header-white ' : '')} id='header'>
                <div className='container-md'>
                    <div className="row row-header justify-content-between align-items-center">
                        <div className="col-4 col-sm-3">
                            <Link to='/' className='h4'>
                                Landry
                            </Link>
                        </div>
                        <div className='col-4 d-sm-none text-end' style={{ textAlign: 'right', height: '100%' }} onClick={(e) => { e.stopPropagation(); setActive(true) }}>
                            <div className="p-1">
                                <FontAwesomeIcon icon={faHamburger} className='menu-bars py-2' />
                            </div>
                        </div>
                        <div onClick={(e) => e.stopPropagation()} className={"col-4 col-sm-9 header-nav " + (active ? 'header-nav-active' : '')}>
                            <div className='col-4 d-sm-none menu-times' onClick={onClose}>
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                            <nav>
                                <ul className="navbar-nav d-block d-sm-flex flex-row align-items-center header-navbar justify-content-end me-auto mb-2 mb-lg-0">
                                    <li className="nav-item pb-4 py-sm-0 px-md-3 px-lg-4 px-2">
                                        <Link className="nav-link active" aria-current="page" to='/blog'>Blog</Link>
                                    </li>
                                    <li className="nav-item pb-4 py-sm-0 px-md-3  px-lg-4 px-2">
                                        <Link className="nav-link active" aria-current="page" to='/modeste_djedemin' onClick={onClose}>A propos de moi</Link>
                                    </li>
                                    {/*<li className="nav-item pb-4 py-sm-0 px-md-3 px-lg-4 px-2">
                                    <DropDown title={'Nos services'} list={location} />
                                </li>*/}
                                    <li className="nav-item pb-4 py-sm-0 px-md-3 px-lg-4 px-2">
                                        <Link className="nav-link active" style={{ display: 'inline-block' }} onClick={onClose} aria-current="page" to='/services'>Mes services</Link>
                                    </li>
                                    <li className="nav-item pb-4 py-sm-0 px-md-3 px-lg-4 px-2">
                                        <Link className="nav-link active btn btn-primary px-2" style={{ display: 'inline-block' }} onClick={onClose} aria-current="page" to='/contactez-moi'>Contactez-moi</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                {children}
            </main>
            <footer className='footer' id='footer'>
                <div className="container-md">
                    <div className='row'>
                        <div className='col-12 mx-auto col-sm-6 col-md-6 col-lg-3 pb-3 footer-div footer-links'>
                            <h5>Liens</h5>
                            <nav className="nav">
                                <ul>
                                    <li>
                                        <Link to='/modeste-djedemin'>A propos de moi</Link>
                                    </li>

                                    <li>
                                        <Link to='/contactez-nous'>Contactez moi</Link>
                                    </li>

                                    <li>
                                        <Link to='/blog'>Mon blog</Link>
                                    </li>

                                </ul>
                            </nav>
                        </div>

                        <div className='col-12 col-sm-6 col-md-6 col-lg-3 pb-3 footer-div footer-links'>
                            <h5>Mes services</h5>
                            <nav className="nav">
                                <ul>
                                    <li>
                                        <Link to='/modeste-djedemin'>A propos de moi</Link>
                                    </li>

                                    <li>
                                        <Link to='/contactez-nous'>Contactez moi</Link>
                                    </li>

                                </ul>
                            </nav>
                        </div>

                        <div className='col-12 col-sm-6 col-md-6 col-lg-3 footer-follow footer-div'>
                            <h5>Suivez-moi</h5>
                            <div className="network-links d-flex justify-content-start mt-4">
                                <FooterSocialLink href={''} className='link-twitter' icon={faTwitter} />

                                <FooterSocialLink href={''} className='link-github' icon={faGithub} />

                                <FooterSocialLink href={''} className='link-dribbble' icon={faDribbble} />

                                <FooterSocialLink href={''} className='link-instagram' icon={faInstagram} />

                            </div>
                        </div>

                        <div className='col-12 col-sm-6 col-md-6 col-lg-3 footer-newsletter footer-div'>
                            <h5>Abonnez-vous à la newsletters</h5>
                            <p>Veuillez entrer votre email pour recevoir des notifications en temps réel lorsqu'il y a des news sur mon blog</p>
                            <div className="input-newsletter">
                                <input type="email" className="form-control" id="input-news" placeholder="Entrez votre email" />
                                <button className='btn btn-news btn-btn'>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className='py-5 copyright my-0'><small>Copyright ModesteDJ <time dateTime='2022'>2022</time> | Tous droits réservés</small></p>
                </div>
            </footer>
        </>
    )
}
export default Layout