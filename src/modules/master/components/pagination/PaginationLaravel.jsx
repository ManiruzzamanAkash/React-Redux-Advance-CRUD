import React from 'react'
import { Pagination } from 'react-laravel-paginex'

const PaginationLaravel = (props) => {
    const { data, changePage } = props;
    return ( 
        <>
        <div class="d-flex">
            <div class="mx-auto">
                <Pagination changePage={changePage} data={data}/>
            </div>
        </div>
        </>
     );
}
 
export default PaginationLaravel;