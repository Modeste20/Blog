import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import './../../Style/normalize.css'
import './../../Style/custum.css'
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

    // Sur certaine page, le header et la bannière ont une image ou couleur d'arrière-plan
    //Selon ces pages, cet état permet de changer la couleur du texte du header en ajoutant une classe donnée au header

    const [headerClass, setHeaderClass] = useState(false)

    useEffect(() => {
        if (['/', '/blog', '/blog/', '/blog#articles'].includes(pathname)) {
            setHeaderClass(true)
        }
    }, [pathname])

    //Etat permettant de ficher le header sur le haut et ce lorsque l'utilisateur scrolle la page

    const [fixedHeader, setFixedHeader] = React.useState(false)

    //Etant de chargement de la page

    const [loading, setLoading] = useState(true)

    //Lorsque ce composant est monté, la page est prête et loading passe à false


    useEffect(() => {
        setLoading(false)
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

        //Lorsque l'utilisateur scrolle la page, on fixe le header à partir d'une certaine valeur de scrollY

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


    //active navbar on mobile : état pour afficher la sidebar ou pas sur mobile

    const [active, setActive] = useState(false)

    //Pour fermer la sidebar sur mobile, active passe à false

    const onClose = () => {
        if (active) {
            setActive(false)
        }
    }

    //Si la sidebar est visible (active === true), on ajoute du style à body

    useEffect(() => {
        if (typeof document !== 'undefined') {
            if (active) {
                document.body.classList.add('body-nav-open')
            } else {
                document.body.classList.remove('body-nav-open')
            }
        }

    }, [active])

    //Si la sidebar est visible et que l'on clique sur le body, elle se ferme

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.onclick = () => {
                if (active) {
                    onClose()
                }
            }
        }
    })

    //openSidebar : gestion du clic du menu hamburger sur mobile

    const openSideBar = (e) => { e.stopPropagation(); setActive(true) }

    //Affichage de l'animation lorsque le site se charge

    //Loading

    if (loading) {
        return <div className="loading">
            <div>
                <h4><span>L</span>andry <span>M</span>odeste</h4>
                <div className="load"></div>
            </div>
        </div>
    }

    console.log('render')


    return (
        <>

            <div className="overlay d-sm-none"></div>

            {/* Header */}

            <header className={'header' + (fixedHeader ? ' header-sticky ' : '') + (headerClass ? ' header-white ' : '')} id='header'>
                <div className='container-md'>
                    <div className="row row-header justify-content-between align-items-center">
                        <div className="col-4 col-sm-3">
                            <Link to='/' className='h3'>
                                Landry
                            </Link>
                        </div>
                        <div className='col-4 d-sm-none text-end' style={{ textAlign: 'right', height: '100%' }} onClick={openSideBar}>
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
                                    <li className="nav-item pb-4 py-sm-0 px-md-3 px-lg- px-0 px-sm-2">
                                        <Link className="nav-link active" aria-current="page" to='/blog'>Blog</Link>
                                    </li>
                                    <li className="nav-item pb-4 py-sm-0 px-md-3  px-lg-4 px-0 px-sm-2">
                                        <Link className="nav-link active" aria-current="page" to='/#biography' onClick={onClose}>A propos de moi</Link>
                                    </li>
                                    <li className="nav-item pb-4 py-sm-0 px-md-3 px-lg-4 px-0 px-sm-2">
                                        <Link className="nav-link active" style={{ display: 'inline-block' }} onClick={onClose} aria-current="page" to='/services'>Mes services</Link>
                                    </li>
                                    <li className="nav-item pb-4 py-sm-0 px-md-3 px-lg-4 px-0 px-sm-2">
                                        <Link className="nav-link active btn btn-btn px-4 py-3" style={{ display: 'inline-block' }} onClick={onClose} aria-current="page" to='/contactez-moi'>Contactez-moi</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            {/* Contenu principal de la page */}

            <main>
                {children}
            </main>

            {/* Footer */}

            <footer className='footer' id='footer'>
                <div className="container-md">
                    <div className='row'>
                        <div className='col-12 mx-auto col-sm-6 col-md-6 col-lg-3 pb-3 footer-div footer-links'>
                            
                            <h5>Liens</h5>

                            <nav className="nav">

                                <ul>

                                    <li>
                                        <Link to='/#biography'>A propos de moi</Link>
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
                                        <Link to='/services'>Création de site web</Link>
                                    </li>

                                    <li>
                                        <Link to='/services'>Design ui</Link>
                                    </li>

                                    <li>
                                        <Link to='/services'>Consultant Seo</Link>
                                    </li>

                                    <li>
                                        <Link to='/services'>Maîtrise des logiciels de la suite Microsoft</Link>
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