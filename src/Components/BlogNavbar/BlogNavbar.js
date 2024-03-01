import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React from 'react'
import {useNavigate,navigate} from '@reach/router'
import './BlogNavbar.css'

const CATEGORIES = [
    {
        search:'',
        title:"Tous"
    },
    {
        search:'dev-web',
        title:'Développement de site web'
    },
    {
        search:'ui-design',
        title:"Conception d'interface utilisateur"
    }
]

const possibleValuesForSearch = [...new Set(CATEGORIES.map(category => category.search))]

const BlogNavbar = ({category}) => {



    const filterArticles = async (e,search) => {
        e.preventDefault();
        if(search && search !== category){
            //window.scrollTo(0,document.getElementById('articles').offsetTop - 40);
            await navigate('?categorie='+search)
        }

    }

    console.log(possibleValuesForSearch)

    const className = (search,i) => {
        if(category !== undefined && search === category){
            return 'is-active'
        }
        if(!category){
            return i === 0 ? 'is-active' : ''
        }
        return ''
    }


    return (
        <div className="blog-navbar">
            <div className="input-search">
                <input type="text" className="form-control" id="input-search-articles" placeholder="Rechercher par mots clés (Non fonctionnel)" /><br />
                <button className='btn btn-search btn-btn' title='Rechercher'>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>

            <section className="categories pb-4">
                <h5>Les différentes catégories</h5>
                <div className="hr"></div>
                <nav className='mt-5'>
                    <ul>
                        {
                            CATEGORIES.map((categorie,index) => <li key={categorie.search}><Link className={className(categorie.search,index)} to={categorie.search ? '?categorie='+categorie.search : ''}>{categorie.title}</Link></li>)
                        }
                    </ul>
                </nav>
            </section>

            {/*<RecentPost />*/}

        </div>
    )
}

export default BlogNavbar