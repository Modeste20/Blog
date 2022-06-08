import React, { useMemo } from 'react'

export const DOTS = '...';

const range = (start, end) => {
    let length = end - start + 1;
    /*
        Create an array of certain length and set the elements within it from
      start value to end value.
    */
    return Array.from({ length }, (_, idx) => idx + start);
  };


// Usepagination envoie les nombres à afficher au niveau de la pagination
const usePagination = ({
    dataLength,
    dataPerPage,
    siblingCount,
    currentPage
}) => {

    const PaginationRange = useMemo(() => {

        //Calcul du nombre totale de page

        const totalPage = Math.ceil(dataLength / dataPerPage)

        const totalPageNumber = siblingCount + 5 // 

        //Si le nombre total de page est inférieure à totalPageNumber , on renvoie un table qui comporte les éléments de 1 à totalPage : normal (pas de dots)

        console.log('pff',dataLength,dataPerPage,totalPageNumber)

        if (totalPageNumber >= totalPage) {
            return range(1, totalPage)
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPage
        );
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPage - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPage;

        /*
        Case 2: No left dots to show, but rights dots to be shown
    */
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPage];
        }

        /*
            Case 3: No right dots to show, but left dots to be shown
        */
        if (shouldShowLeftDots && !shouldShowRightDots) {

            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
                totalPage - rightItemCount + 1,
                totalPage
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }

    }, [dataLength, dataPerPage, siblingCount, currentPage])

    return PaginationRange

}

export default usePagination;