import { Link } from "gatsby"
import * as React from "react"
import Carousel from "../Components/Carousel"
import Layout from "../Components/Layout/Layout"
import data from "../data/testimonials_home_data"
import Profil from './../images/Landry-avatar.png'
import BiographyImage from './../images/biography-image.jpg'

import './home.css'
import SkillCard from "../Components/SkillsCard/SkillCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { hobbies, HobbyCard } from "../Components/HobbyCard/HobbyCard"
import PROJECTS from "../data/portfolios_home_data"
import ProjetCard from "../Components/ProjetCard/ProjetCard"
import { useState } from "react"
import FormationTimeline from "../Components/FormationTimeline/FormationTimeline"
import BlogEntries from "../Components/BlogEntries/BlogEntries"

// markup
const IndexPage = () => {

  /* Afficher deux témoignages par div si nous sommes si un grand écran */

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
    })
  }

  /* get portfolio data */

  console.log('project', projectsData)

  return (
    <Layout>
      <div className="landry-portfolio-home">


        <div className="home-banner">
          <div className="banner-home">
            <div className="container-md">
              <div className="row">
                <div className="col-12 col-sm-9 col-md-4 col-lg-6 mb-5 text-center">
                  <img src={Profil} alt='Image de Landry Modeste' height={300} />
                </div>
                <div className="col-12 col-sm-9 col-md-8 col-lg-6 description">
                  <div className="sub-title">
                    Plop ! Moi c'est
                  </div>
                  <div className="title">
                    <h1>
                      Landry Modeste
                    </h1>
                  </div>
                  <div className="content">
                    <p className="my-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima inventore facilis laborum qui corrupti veniam eos numquam porro eligendi. Natus nihil unde eum est repellat! Dolores cum a autem!
                    </p>
                    <Link to="/articles" className="btn btn-secondary mt-4 px-4 link-about-modeste">En savoir plus</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Biography */}

        <section id="biography" className="biography py-5 my-5">
          <div className="container-md">
            <div className="row">
              <div className="col-12 order-1 order-md-0 col-sm-10 col-md-7">

                <div className="landry-biography">
                  <h2 className="section-title">
                    Biographie
                  </h2>
                  <div className="biography-content">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat sunt cupiditate architecto dolore hic ducimus fuga dignissimos eveniet, harum saepe totam nulla laborum ipsum aliquam perspiciatis cumque numquam blanditiis!
                    </p>

                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum laudantium consectetur cupiditate sapiente, dicta veritatis dolores necessitatibus ratione iure sint sit ea unde. Ipsa maiores pariatur delectus sint debitis cumque.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rerum provident dignissimos impedit necessitatibus autem praesentium, deserunt quo, iure suscipit reprehenderit explicabo amet rem natus culpa, illo laborum omnis vitae.
                    </p>
                  </div>
                </div>

              </div>

              <div className="col-12 order-0 order-md-1 col-sm-10 col-md-5">
                <div className="biography-image">
                  <div className="image-container">
                    <img src={BiographyImage} alt='Image de Landry Modeste' height={300} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies */}

        <section className="hobby mt-5 pt-5" id="hobby">
          <div className="container-md">
            <h2 className="section-title">
              Mes hobbies
            </h2>

            <div className="hobbies">
              <div className="row">
                {
                  hobbies.map(({ icon, title }) => <HobbyCard key={title.toLowerCase()} icon={icon} title={title} />)
                }
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}

        <section className="skills my-5 py-5" id="skills">
          <div className="container-md">
            <h2 className="section-title">
              Mes compétences
            </h2>

            <div className="all-skillspt-5">
              <div className="row justify-content-between">
                <SkillCard className={'skill-html5'} title={'HTML5 , CSS et Javascript'} icon={<FontAwesomeIcon icon={faHtml5} />}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat iste quas impedit enim debitis alias! Possimus asperiores ab deserunt id debitis aperiam reprehenderit, accusamus distinctio corrupti expedita earum in?
                  </p>
                </SkillCard>

                <SkillCard className={'skill-html5'} title={'HTML5 , CSS et Javascript'} icon={<FontAwesomeIcon icon={faHtml5} />}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat iste quas impedit enim debitis alias! Possimus asperiores ab deserunt id debitis aperiam reprehenderit, accusamus distinctio corrupti expedita earum in?
                  </p>
                </SkillCard>

                <SkillCard className={'skill-html5'} title={'HTML5 , CSS et Javascript'} icon={<FontAwesomeIcon icon={faHtml5} />}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat iste quas impedit enim debitis alias! Possimus asperiores ab deserunt id debitis aperiam reprehenderit, accusamus distinctio corrupti expedita earum in?
                  </p>
                </SkillCard>

                <SkillCard className={'skill-html5'} title={'HTML5 , CSS et Javascript'} icon={<FontAwesomeIcon icon={faHtml5} />}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat iste quas impedit enim debitis alias! Possimus asperiores ab deserunt id debitis aperiam reprehenderit, accusamus distinctio corrupti expedita earum in?
                  </p>
                </SkillCard>

                <SkillCard className={'skill-html5'} title={'HTML5 , CSS et Javascript'} icon={<FontAwesomeIcon icon={faHtml5} />}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat iste quas impedit enim debitis alias! Possimus asperiores ab deserunt id debitis aperiam reprehenderit, accusamus distinctio corrupti expedita earum in?
                  </p>
                </SkillCard>

                <SkillCard className={'skill-html5'} title={'HTML5 , CSS et Javascript'} icon={<FontAwesomeIcon icon={faHtml5} />}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat iste quas impedit enim debitis alias! Possimus asperiores ab deserunt id debitis aperiam reprehenderit, accusamus distinctio corrupti expedita earum in?
                  </p>
                </SkillCard>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolios */}

        <section className="portfolio mt-5 pt-5" id="portfolio">
          <div className="container-md">
            <h2 className="section-title">Projets réalisés</h2>
            <div className="portfolio-options">
              <button className="options-button active" onClick={(e) => filterProjects(e, '')}>
                Tous
              </button>
              <button className="options-button" onClick={(e) => filterProjects(e, 'dev')}>
                <abbr title="developpement web">Dev web</abbr>
              </button>
              <button className="options-button" onClick={(e) => filterProjects(e, 'seo')}>
                <abbr title="Référencement naturel">SEO</abbr>
              </button>
            </div>

            <div className="all-projects">
              <div className="container-md">
                <div className="row">
                  {
                    projectsData.map(project => <ProjetCard {...project} key={project.title} />)
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formations */}


        <section className="formations" id="formations">
          <div className="container-md">
            <h2 className="section-title">
              Mes formations
            </h2>
            <FormationTimeline />
          </div>
        </section>

        {/* Témoignages */}

        <section className='temoignages pb-5' id='temoignages'>
          <div className="container-md ">
            <h2 className="">Les témoignages</h2>
            <Carousel data={carousel_data ? carousel_data : data} />
          </div>
        </section>

        {/* Articles populaires */}

        <BlogEntries />
        
      </div>
    </Layout>
  )
}

export default IndexPage
