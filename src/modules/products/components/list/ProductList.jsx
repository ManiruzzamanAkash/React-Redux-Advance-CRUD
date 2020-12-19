import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
// import { Pagination } from 'react-laravel-paginex'
import LoadingSpinner from '../../../master/components/loading/LoadingSpinner';
import PaginationLaravel from '../../../master/components/pagination/PaginationLaravel';
import { getProductsAction } from '../../redux/actions/ProductAction';
import ProductShortInfo from './ProductShortInfo';
// const Paginator = require('react-laravel-paginator');


const ProductList = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    const isLoading = useSelector((state) => state.product.isLoading);
    const products = useSelector((state) => state.product.products);
    const productsPaginatedData = useSelector((state) => state.product.productsPaginatedData);

    useEffect(() => {
        dispatch(getProductsAction(currentPage));
    }, [dispatch]);

    const changePage = (data) => {
        dispatch(getProductsAction(data.page));
    }

    return (
        <>
            {
                isLoading &&
                <LoadingSpinner text="Loading Products..."/>
            }
            {
                !isLoading && products.length === 0 &&
                <div className="alert alert-warning">
                    Sorry ! No Product Found.
                </div>
            }
            {
                !isLoading &&
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className='td-sl'>Sl</th>
                                <th className='td-product-title'>Product</th>
                                <th>Price</th>
                                <th className='td-description'>Description</th>
                                <th className='td-action'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => (
                                    <ProductShortInfo key={index} index={index} product={product} />
                                ))
                            }
                        </tbody>
                    </table>

                    <PaginationLaravel changePage={changePage} data={productsPaginatedData}/>
                </div>
            }
        </>
    );
}

export default ProductList;