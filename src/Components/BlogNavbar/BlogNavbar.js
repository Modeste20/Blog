import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React from 'react'
import RecentPost from '../RecentPost/RecentPost'
import './BlogNavbar.css'

const categories = [
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

const BlogNavbar = () => {
    return (
        <div className="blog-navbar">
            <div className="input-search">
                <input type="text" className="form-control" id="input-search-articles" placeholder="Rechercher par mots clés" /><br />
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
                            categories.map(categorie => <li key={categorie.search}><Link to={categorie.search ? '?categorie='+categorie.search : ''}>{categorie.title}</Link></li>)
                        }
                    </ul>
                </nav>
            </section>

            <RecentPost />

        </div>
    )
}

export default BlogNavbar