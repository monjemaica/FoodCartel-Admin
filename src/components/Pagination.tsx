import _ from 'lodash'
import { Button } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
interface PaginationProps {
    itemsCount: number
    pgsize: number
    onChangePage: (e: any) => void
    currentPage: number
}

export const Pagination = ({ itemsCount, pgsize, onChangePage, currentPage }: PaginationProps) => {
    const pagesCount = Math.ceil(itemsCount / pgsize);
    const pages = _.range(1, pagesCount + 1);
    const lastPage = pagesCount;
    
    if(pages.length === 1) return null

    return (
        <>
            <Button size='xs' onClick={() => onChangePage(currentPage >= 2 ? currentPage - 1 : currentPage)}><ChevronLeftIcon /> </Button>
            {
                pages.map((page, i) =>
                    <Button size='xs' key={i} isActive={page === currentPage ? true : false} onClick={() => onChangePage(page)}>{page}</Button>
                )
            }
            <Button size='xs' onClick={() => onChangePage(currentPage !== lastPage ? currentPage + 1 : lastPage)}><ChevronRightIcon /> </Button>
        </>

    );
}
