import { faDesktop, faPenNib, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import Layout from "../../Components/Layout/Layout"
import ServiceCard from "../../Components/ServiceCard/ServiceCard"
import Banner from "../../Components/Shared/Banner/Banner"
import './services.css'
import { Helmet } from "react-helmet"


const Services = () => {
    return (
        <Layout>
            <Helmet>
                <title> Mes services | Landry</title>
            </Helmet>
            <div className="landry-services">
                <Banner title={'Services'} className='banner-services' />
                <div className="container-md services">
                    <div className="row mb-5 pb-5 services-row">
                        <ServiceCard icon={faPenNib} title={'Conception de site web'} link='/' className={"card-web"}>
                            <p class="card-text">
                            Le service de conception offre une expertise inégalée pour créer des interfaces esthétiquement attrayantes et fonctionnelles.
                            Le travail se fait en étroite collaboration avec le client pour donner vie à sa vision, en combinant une esthétique moderne avec une expérience utilisateur intuitive pour des résultats qui captivent et convertissent.
                            </p>
                        </ServiceCard>
                        <ServiceCard icon={faDesktop} title={'Création de site web sur mesure'} link='/' className={"card-web"}>
                            <p class="card-text">
                                La création de site web sur mesure est la concrétisation de votre vision numérique de manière unique et personnalisée. 
                                Je m'engage à élaborer des solutions web entièrement adaptées à vos besoins spécifiques, en mettant l'accent sur la fonctionnalité et
                                le design afin de garantir une présence en ligne remarquable et efficace.
                            </p>
                        </ServiceCard>
                        <ServiceCard icon={faScrewdriverWrench} title={'Correction de bugs et refonte de site web'} link='/' className={"card-web"}>
                            <p class="card-text">
                                Le présent service offre une solution complète pour résoudre les problèmes techniques et esthétiques de votre site existant. Je travaille avec diligence pour identifier et corriger les bugs, tout en modernisant et en améliorant l'expérience utilisateur pour garantir un site web performant.
                            </p>
                        </ServiceCard>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Services