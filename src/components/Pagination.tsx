import _ from 'lodash'
import {Button} from '@chakra-ui/react'
interface PaginationProps{
    itemsCount: any
    pgsize: number
    onChangePage: (e: any) =>  void
    currentPage:number
}

export const Pagination = ({ itemsCount, pgsize, onChangePage, currentPage }: PaginationProps) => {
    const pagesCount = Math.ceil(itemsCount / pgsize);
    const pages = _.range(1, pagesCount + 1);

    console.log('pages: ',pages)
    // if (pages == 1) {
    //     return null;
    // }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map((page,i) =>
                    <Button isActive = {page === currentPage ? true : false}>{page}</Button>
                    // <li key={i} className={page === currentPage ? "page-item active" : "page-item"}>
                        /* <a className="page-link" onClick={() => onChangePage(page)}>{page}</a> */
                    // </li>

                )}
            </ul>
        </nav>
    );
}
