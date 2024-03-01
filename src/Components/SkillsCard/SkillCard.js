import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './SkillCard.css'

const SkillCard = ({title,icon,children}) => {

  return (
    <article className={"col-12 mx-0 p-0 mx-auto mx-md-0  col-sm-6 col-md-6 col-lg-4"}>
        <div className="article-skill px-xl-3 py-xl-4 mx-sm-3">
        <div className="article-header pb-1 ">
                {/*

            <div className="skill-icon">
                    icon
            </div>
                */}

            <div className="skill-title ms-5">
                <h3>{title}</h3>
            </div>
        </div>

        <div className="article-main">
            {
                children
            }
        </div>
        </div>
    </article>
  )

}

export const SKILLS = [
    {   
        title:'HTML, CSS et Javascript',
        icon:<FontAwesomeIcon icon={faHtml5} />,
        children:(
            <p>
                Les connaissances en <strong><abbr title='HyperText Markup language'>HTML</abbr></strong>, <strong><abbr title='Cascade Style Sheets'>CSS</abbr></strong> et
                <strong> Javascript</strong> sont indispensables dans la création de l'interface utilisateur d'un site web ou d'une application web.
                 Ces technologies sont responsables de la structure, du style ainsi que de l'interactivité et du dynamisme des pages web
            </p>
        )
    },
    {   
        title:'Frameworks frontend',
        icon:<FontAwesomeIcon icon={faHtml5} />,
        children:(
            <p>La maîtrise d'outils ou frameworks frontend  tels que <strong>Bootstrap</strong>, <strong>Tailwind CSS</strong> et <strong>React </strong>
            permet de simplifier et d'accélérer le développement d'applications web et d'interfaces utilisateur interactives.
            </p>
        )
    },
    {
        title:'Responsive web design',
        icon:<FontAwesomeIcon icon={faHtml5} />,
        children:(
            <p>
                Sachant que les utilisateurs utilisent différents types d'appareils pour naviguer sur les sites web, il revient au développeur frontend
                d'assurer un bon rendu des pages sur toutes les tailles d'écran et toutes les résolutions afin d'offrir une expérience utilisateur optimale.
            </p>
        )
    },
    {
        title:'Git et Github',
        icon:<FontAwesomeIcon icon={faHtml5} />,
        children:(
            <p>
                Le duo <strong>Git et Github</strong> simplifie la collaboration avec d'autres développeurs sur un projet web.
                Git permet de sauvegarder différentes versions du code du projet.
                Github à son tour, permet  d'héberger le code sur internet afin qu'il ne soit pas perdu en cas de panne de l'ordinateur du développeur
                par exemple.
            </p>
        )
    },
    {
        title:'Maîtrise de Figma et connaissance en design ui',
        icon:<FontAwesomeIcon icon={faHtml5} />,
        children:(
            <p>
                La maîtrise des outils de conception, des logiciels de création de wireframes et de maquettes tels que Figma,
                 la compréhension des principes du design UI sont indispensables en vue de concevoir des interfaces utilisateurs attrayantes et conviviales.
                 Cette phase de conception entrepris par le designer UI précède généralement la phase de développement. 
            </p>
        )
    },
    {
        title:'Communication et résolution de problème',
        icon:<FontAwesomeIcon icon={faHtml5} />,
        children:(
            <p>
                Une collaboration efficace avec les clients et les autres parties prenantes d'un projet de conception et/ou de développement 
                passe par une bonne communication. Par ailleurs, l'aptitude du développeur à analyser et à résoudre les problèmes pendant le
                 développement garantit la réussite des projets.
            </p>
        )
    }
]

export default SkillCard
