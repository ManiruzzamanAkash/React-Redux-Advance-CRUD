import React from 'react'
import { Pagination } from 'react-laravel-paginex'

const PaginationLaravel = (props) => {
    const { data, changePage } = props;
    return ( 
        <>
        {
            data !== null &&
            <div className="d-flex">
                <div className="mx-auto">
                    <div className=''>
                        <div>
                            Products - {data.from} to {data.from + data.per_page}  | Total {data.per_page} Out of {data.total}
                        </div>
                        <div>
                            <Pagination changePage={changePage} data={data}/>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
     );
}
 
export default PaginationLaravel;