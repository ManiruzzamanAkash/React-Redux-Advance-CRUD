import React from 'react'
import { Pagination } from 'react-laravel-paginex'

const PaginationLaravel = (props) => {
    const { data, changePage, isDescription } = props;
    const limit = 10;

    return (
        <>
            {
                data != null && (typeof isDescription !== 'undefined' && isDescription === false) &&  data.total > limit && 
                <div className="d-flex">
                    <div className="mx-auto">
                        <Pagination changePage={changePage} data={data} />
                    </div>
                </div>
            }
            {
                (typeof isDescription === 'undefined' || isDescription === true) && data !== null &&
                <div className="d-flex">
                    <div className="mx-auto">
                        <div className='row'>
                            <div className="col-6">
                                Products - {data.from} to {data.from + data.per_page}
                                {' '} | Total {data.total < data.per_page ? data.total : data.per_page}
                                {' '} | Out of {data.total}
                            </div>
                            {
                                data.total > limit &&
                                <div className="col-6">
                                    <Pagination changePage={changePage} data={data} />
                                </div>
                            }

                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default PaginationLaravel;