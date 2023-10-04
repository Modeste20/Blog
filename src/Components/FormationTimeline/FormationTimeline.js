import React from 'react'
import CardFormation from './CardFormation/CardFormation'
import './FormationTimeline.css'
import slugify from 'slugify'

const FORMATIONS = [
  {
    period:'Octobre 2021',
    title:'Début de mon parcours de développeur web',
    children:(
      <p>
        C'est sur la plateforme OpenClassroom que j'ai commencé mon parcours de développeur notemment avec le cours gratuit <a href="https://openclassrooms.com/fr/courses/1603881-creez-votre-site-web-avec-html5-et-css3" target='_blank'>Créez votre site web avec HTML5 et CSS3"</a>.
        Ensuite, le cours <a href='https://openclassrooms.com/fr/courses/1916641-dynamisez-vos-sites-web-avec-javascript/2724891-deboguer-votre-code-partie-1-3' target='_blank'>Dynamisez vos sites web avec JavaScript</a> suivi sur la même plateforme m'a permis
        de commencer l'apprentissage du JavaScript.
      </p>
    )
  },
  {
    period:'Janvier  2022',
    title:'Approfondissement de mes connaissances acquises en développement web',
    children:(
      <>
      <p>
        Après avoir acquis mes premières bases en développement web, j'ai commencé à créer mes premières pages et sites web me permettant de pratiquer les connaissances acquises.
      </p>
      <p>
        Les nombreuses ressources gratuites en ligne tels que <strong>FreeCodeCamp</strong>, la plateforme <strong>Mozilla Developer Network (MDN)</strong>, <strong>W3Schools</strong> et bien d'autres, m'ont permis d'aborder et de me renseigner sur différentes notions et technologies utiles en développement web.
        Ces ressources m'ont également servis de guide, parfois de point de départ dans mon apprentissage.
      </p>
      </>
    )
  },
  {
    period:'Août 2022',
    title:'Apprentissage des outils frontend',
    children:(
      <p>
        Après l'apprentissage des technologies de base du web, je me suis interressé aux outils frontend. Ces outils permettent de simplifier et d'accélérer le développement d'applications web. Ces outils vont 
        des préprocesseurs comme postCSS et Sass aux frameworks frontend tels que Bootstrap et Réact passant par les gestionnaires de packages et les bundlers.
      </p>
    )
  },
  {
    period:'Mars 2023',
    title:'Début de mon parcours de designer UI',
    children:(
      <p>
        Début 2023, j'ai commencé l'apprentissage du design d'interface d'utilisateur. Depuis, je me suis renseigné sur le processus et les principes du design UI, appris à créer des wireframes
        et des maquettes utilisant le logiciel Figma. Mes connaissances en design d'interface utilisateur me permettent d'intervenir dans le processus de design ou encore de prendre
        entièrement la responsabilité de ce processus selon la taille du projet tout en m'occupant du développement de l'interface.
      </p>
    )
  },
  {
    period:'Juin - Juillet 2023',
    title:'Certifié par sololearn',
    children:(
      <p>
        Après avoir compléter les cours d'introduction au HTML et au CSS sur sololearn, J'ai été certifié par la plateforme comme possédant les compétences 
        HTML et CSS indispensables à la création des sites web. Mes <a href={'./../images/author.png'} target='_blank'> certificats HTML </a> et <a href="">CSS</a> sont consultables en lignes
      </p>
    )
  }
]

const FormationTimeline = () => {

  return (

    <div className="formations-timeline">
        {
            FORMATIONS.map((c,index) => <CardFormation {...c} key={slugify(c.title.toLowerCase())} index={index} />)
        }
    </div>

  )
}

export default FormationTimeline