import _ from 'lodash';

export interface paginateProps{
    items: any
    pageNumber: number
    pageSize: number
}

export function paginate({items, pageNumber, pageSize} : paginateProps){
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
}