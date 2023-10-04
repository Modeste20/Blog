import { Link } from "gatsby"
import * as React from "react"
import Carousel from "../Components/Carousel"
import Layout from "../Components/Layout/Layout"
import data from "../data/testimonials_home_data"
import Profil from './../images/Landry.png'
import BiographyImage from './../images/biography-image.jpg'

import './home.css'
import SkillCard, { SKILLS } from "../Components/SkillsCard/SkillCard"
import { HOBBIES, HobbyCard } from "../Components/HobbyCard/HobbyCard"
import PROJECTS from "../data/portfolios_home_data"
import ProjetCard from "../Components/ProjetCard/ProjetCard"
import { useState } from "react"
import FormationTimeline from "../Components/FormationTimeline/FormationTimeline"
import BlogEntries from "../Components/BlogEntries/BlogEntries"
import { useLocation } from '@reach/router'
import { useEffect } from 'react'

// markup
const IndexPage = () => {

  /* Afficher deux témoignages par div si nous sommes sur un grand écran */

  const [carousel_data, setData] = React.useState(null)

  const resizeCarousel = (windowSize) => {
    if (windowSize >= 768) {
      const datas = [
        [
          data[0],
          data[1]
        ],
        [
          data[2],
          data[3]
        ],
        [
          data[4],
          data[5]
        ]

      ]
      setData(datas)
    } else {
      setData(null)
    }
  }

  /* Récupérer la largeur de la fenêtre au redimensionnement de l'écran et lorsque le composant est monté */

  const [windowSize, setWindowSize] = React.useState(0)
  const handleWindowResize = React.useCallback(() => {

    setWindowSize(window.innerWidth);

  }, []);


  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize()
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  console.log('render', windowSize)

  React.useEffect(() => {
    resizeCarousel(windowSize)
  }, [windowSize])

  /* Filtrer les projets par catégories */

  const [projectsData, setProjectsData] = useState(PROJECTS)

  const filterProjects = (e, category) => {
    const button_active = document.querySelector('.landry-portfolio-home .portfolio .portfolio-options button.active');
    button_active.classList.remove('active');
    e.currentTarget.classList.add('active')
    setProjectsData(() => {
      if (category) return PROJECTS.filter(c => c.category === category)
      return PROJECTS
    })
  }

  /* get portfolio data */

  console.log('project', projectsData)

  //Automatic scroll for anchor link

  const {hash} = useLocation()

    useEffect(() => {
      if(hash && hash==='#biography'){
          const element = document.querySelector('#biography');
          if(element){
              window.scrollTo(0,element.offsetTop - 150)
          }
      }
  })

  return (
    <Layout>
      <div className="landry-portfolio-home">

        {/* BANNIERE */}

        <div className="home-banner">
          <div className="banner-home">
            <div className="container-md">
              <div className="row">
                <div className="col-12 col-sm-10 mx-auto mx-md-0 col-md-4 col-lg-6 mb-5 text-center">
                  <img src={Profil} alt='Image de Landry Modeste' />
                </div>
                <div className="col-12 col-sm-10 mx-auto mx-md-0 col-md-8 col-lg-6 description">
                  <div className="sub-title">
                    Salut ! 👋 Moi c'est
                  </div>
                  <div className="title">
                    <h1>
                      Landry Modeste
                    </h1>
                  </div>
                  <div className="content">
                    <p className="my-3">
                      Developpeur web frontend et designer d'interface utilisateur.<br />
                      J'ai les compétences nécessaires pour créer de beaux sites web, rapide et facile à utiliser pour les internautes.
                    </p>
                    <Link to="#biography" className="btn btn-secondary mt-4 px-4 link-about-modeste">En savoir plus sur moi</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BIOGRAPHY*/}

        <section  className="biography mt-5 mt-md-0"  id="biography">
          <div className="container-md">
            <div className="row align-items-center">
              <div className="col-12 order-1 order-md-0 col-sm-12 col-md-7">

                <div className="landry-biography">
                  <h2 className="section-title">
                    Biographie
                  </h2>
                  <div className="biography-content">
                    <p>
                      Je suis développeur web, passionné et autodidacte avec plus de deux ans d'expérience dans l’univers du développement web.
                      C'est pendant le dernier trimestre de l'année 2021, que je me suis renseigné et commencé l'appentissage de la programmation web.
                      Depuis, j'ai acquis les compétences indispensables à la création de site web, travaillé sur de nombreux projets personnels en vue 
                      d'approfondir mes connaissances et donc de grandir en tant que développeur web.
                    </p>
                    <p>Par ailleurs, la volonté de créer des interfaces {/* expériences en ligne*/} conviviales centrées sur l'utilisateur, utiles et faciles 
                    à utiliser par les utilisateurs m'a amené à m'interresser au design d'interface utilisateur (UI).
                      Je continue d'apprendre, de me perfectionner, tout en étant à l'affût des dernières tendances et avancées technologiques 
                      dans les domaines du développement web et du design d'interface utilisateur.
                    </p>
                  </div>
                </div>

              </div>

              <div className="col-12 order-0 order-md-1 col-sm-10 col-md-5 mx-auto mx-md-0">
                <div className="biography-image">
                  <div className="image-container">
                    <img src={BiographyImage} alt='Image de Landry Modeste' height={300} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOBBIES */}

        <section className="hobby mt-5 pt-5" id="hobby">
          <div className="container-md">
            <h2 className="section-title">
              Mes hobbies
            </h2>

            <div className="hobbies">
              <div className="row">
                {
                  HOBBIES.map(({ icon, title }) => <HobbyCard key={title.toLowerCase()} icon={icon} title={title} />)
                }
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}

        <section className="skills mt-5" id="skills">
          <div className="container-md">
            <h2 className="section-title">
              Mes compétences
            </h2>

            <div className="all-skills">
              <div className="row justify-content-between  gy-5 gy-xl-4 py-3 py-xl-0">

                {
                  SKILLS.map(({className,title,icon,children}) => <SkillCard key={className} children={children} icon={icon} title={title} className={'skill '+className} />)
                }

              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIOS */}

        <section className="portfolio mt-5" id="portfolio">
          <div className="container-md">
            <h2 className="section-title">Projets réalisés</h2>
            <div className="portfolio-options">
              <button className="options-button active" onClick={(e) => filterProjects(e, '')}>
                Tous
              </button>
              <button className="options-button" onClick={(e) => filterProjects(e, 'dev')}>
                <abbr title="developpement web">Dev web</abbr>
              </button>
              <button className="options-button" onClick={(e) => filterProjects(e, 'ui')}>
                <abbr title="Référencement naturel">Design</abbr>
              </button>
            </div>

            <div className="all-projects pt-2">
              <div className="container-md">
                <div className="row">
                  {
                    projectsData.length ? projectsData.map(project => <ProjetCard {...project} key={project.title} />)
                    : <p className="text-center py-5 my-5">
                        Aucun projet n'a été réalisé pour cette catégorie
                    </p>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORMATIONS*/}


        <section className="formations mt-5" id="formations">
          <div className="container-md">
            <h2 className="section-title">
              Mon parcours et mes certifications
            </h2>
            <FormationTimeline />
          </div>
        </section>

        {/* TEMOIGNAGES */}

        {/*<section className='temoignages pb-5' id='temoignages'>
          <div className="container-md ">
            <h2>Les témoignages</h2>
            <Carousel data={carousel_data ? carousel_data : data} />
          </div>
                </section>*/}

        {/* ARTICLES POPULAIRES */}

        <BlogEntries />
        
      </div>
    </Layout>
  )
}

export default IndexPage
