import React from 'react'
import Blog from './../images/projects/blog.jpg'
import Gym from './../images/projects/gym.jpg'
import LanMeal from './../images/projects/lanmeal.jpg'
import LandryPiko from './../images/projects/landry-piko.jpg'
import Challenges from './../images/projects/challenges.jpg'
import UIProject1 from './../images/projects/ui.jpg'






const PROJECTS = [
    {
        category:'dev',
        image_alt:'Mon portfolio',
        image:Blog,
        title:'Mon portfolio ',
        date:{
            begin:{
                datetime:'2022-06',
                time:'Juin 2022'
            },
            finish:{
                datetime:'2022-08',
                time:'Août 2022'
            }
        },
        description:"Ce projet est le présent site web. Il s'agit de mon portfolio qui rassemble à la fois mes compétences,mon parcours, mes certifications, un blog et surtout les projets dont je suis le plus fier ",
        skills:['Bootstrap','Réact','Gatsby'],
        url:'https://djedeminmodeste.vercel.app/'
    },
    {
        category:'dev',
        image_alt:'GYM',
        image:Gym,
        title:'Site web pour une salle de gym',
        date:{
            begin:{
                datetime:'2022-05',
                time:'Mai 2022'
            },
            finish:{
                datetime:'2022-07',
                time:'Juillet 2022'
            }
        },
        description:"Le site web pour l'entreprise de sport GYM, codé sur mesure en utilisant HTML, CSS et Javascript ",
        skills:['HTML','CSS','Javascript'],
        url:'https://gym-modeste20.vercel.app/'
    },
    {
        category:'dev',
        image_alt:'LanMeal',
        image:LanMeal,
        title:'LanMeal : Restaurant basé à Alger et à Paris',
        date:{
            begin:{
                datetime:'2022-08',
                time:'Août 2022'
            },
            finish:{
                datetime:'2022-09',
                time:'Septembre 2022'
            }
        },
        description:"Site web d'un restaurant basé à Alger et à Paris. Il est possible de contacter l'entreprise depuis le site web. Menus proposés et galerie d'images des plats du restaurant se trouvent sur la plateforme officielle de LanMeal",
        skills:['HTML','CSS','Javascript'],
        url:''
    },
    {
        category:'dev',
        image_alt:'Challenges',
        image:Challenges,
        title:'Les challenges',
        date:{
            begin:{
                datetime:'2021',
                time:'2021'
            },
            finish:{
                datetime:new Date().getFullYear(),
                time:'Now'
            }
        },
        description:"Sur ce site web, j'ai rassemblé tous les challenges que j'ai relevé depuis que j'ai commencé la programmation web. Ces challenges m'ont permis d'approfondir des notions spécifiques lors de mon apprentissage. Ce sont aussi des défis sur des sites dédiés ou posés par les collègues de tech de Twitter",
        skills:['HTML','CSS','Javascript'],
        url:''
    },
    {
        category:'dev',
        image_alt:'Projet 1',
        image:LandryPiko,
        title:"Landry Piko ",
        date:{
            begin:{
                datetime:'2022-05',
                time:'Mai 2022'
            },
            finish:{
                datetime:'',
                time:''
            }
        },
        description:"Il s'agit d'un template de site One Page d'une entreprise de marketing, aidant les clients à promouvoir leur activité sur le web. Ce template est codé sur mesure utilisant HTML, CSS avec un peu de javascript.",
        skills:['HTML','CSS'],
        url:'https://landry-piko.vercel.app/'
    },
    {
        category:'ui',
        image_alt:'UX/UI Projects',
        image:UIProject1,
        title:'UX/UI Design Projects',
        date:{
            begin:{
                datetime:'2023-06',
                time:'Juin 2023'
            },
            finish:{
                datetime:'2023-08',
                time:'Août 2023'
            }
        },
        description:"Un ensemble de projets figma. Ces projets vont de mes premiers wireframes créés au design d' interface d'application mobile  en passant par la reproduction de design. ",
        skills:['Figma','Wireframe','UI principes'],
        url:'https://www.figma.com/file/ugnZiBILKiKwdE4Yck3L29/Projects?type=design&node-id=1%3A165&mode=design&t=uz1W4L9HyxdSBNJA-1'
    }
]

export default PROJECTS