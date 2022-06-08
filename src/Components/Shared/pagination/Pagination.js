import React from 'react'
import usePagination, { DOTS } from './usePagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './Pagination.css'
import { Link } from 'gatsby';

const Pagination = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className=''
}) => {

    
    const paginationRange = usePagination({
        currentPage:currentPage,
        dataLength:totalCount,
        siblingCount:siblingCount,
        dataPerPage:pageSize
    });

    console.log('rage',paginationRange)

    if (currentPage === 0 || !paginationRange) {
        return null;
    }
    if(paginationRange.length <2){
        return null;
    }

    const onNext = () => {
        if(currentPage !== lastPage){
            onPageChange(currentPage + 1);
        }
    };

    const onPrevious = () => {
        if(currentPage !==1){
            onPageChange(currentPage - 1);
        }
    };

    let lastPage =  paginationRange[paginationRange.length - 1];

    console.log(lastPage)

    return (
        <ul
            className={'pagination-container '+className}
        >
            {/* Left navigation arrow */}
            <li
                className={'pagination-item'}
                onClick={onPrevious}
            >
                <Link to='#articles' onClick={
                    (e) => {
                        if(currentPage === 1){
                            e.preventDefault()
                        }
                    }
                } className="arrow left">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
            </li>
            {/* On mappe les éléments du tableau renvoyé par usePagination */}
            {paginationRange.map(pageNumber => {

                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                // Render our Page Pills
                return (
                    <li
                        className={' pagination-item '+(pageNumber === currentPage ? ' item-active ' : ' ')}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        <Link to='#articles' onClick={(e) => {
                            if(currentPage === pageNumber){
                                e.preventDefault()
                            }
                        }}>
                            {pageNumber}
                        </Link>
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                className={'pagination-item'}
                onClick={onNext}
            >
                <Link className="arrow right" onClick={

                    (e) => {
                        if(currentPage === lastPage){
                            e.preventDefault()
                        }
                    }

                } >
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </li>
        </ul>
    )
}

export default Pagination