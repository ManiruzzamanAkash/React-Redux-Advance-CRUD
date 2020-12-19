import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from '../../../master/components/loading/LoadingSpinner';
import PaginationLaravel from '../../../master/components/pagination/PaginationLaravel';
import { getProductsAction } from '../../redux/actions/ProductAction';
import ProductShortInfo from './ProductShortInfo';
import ProductShortInfoFrontend from './ProductShortInfoFrontend';

const ProductListFrontend = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');

    const isLoading = useSelector((state) => state.product.isLoading);
    const products = useSelector((state) => state.product.products);
    const productsPaginatedData = useSelector((state) => state.product.productsPaginatedData);

    useEffect(() => {
        dispatch(getProductsAction(currentPage));
    }, [dispatch, currentPage]);

    const changePage = (data) => {
        setCurrentPage(data.page);
        dispatch(getProductsAction(data.page));
    }

    const searchProduct = (e) => {
        const searchText = e.target.value;
        setSearchText(searchText)
        if (searchText.length === 0) {
            dispatch(getProductsAction(currentPage));
        } else {
            dispatch(getProductsAction(currentPage, searchText));
        }
    }

    return (
        <>
            {
                isLoading &&
                <LoadingSpinner text="Loading Products..." />
            }
            {
                !isLoading && products.length === 0 &&
                <div className="alert alert-warning">
                    Sorry ! No Product Found.
                </div>
            }
            {
                !isLoading && products.length > 0 &&
                <>
                    <h3>
                        Product Store {" "}
                        <span className="badge badge-info badge-pill">For All</span>
                    </h3>
                    <div className="">
                        <div className="row mb-5">
                            {
                                products.map((product, index) => (
                                    <div className="col-3 col-sm-4 col-md-3 col-lg-2" key={index}>
                                        <ProductShortInfoFrontend index={index} product={product} />
                                    </div>
                                ))
                            }
                        </div>
                        <PaginationLaravel changePage={changePage} data={productsPaginatedData} />
                    </div>
                </>
            }
        </>
    );
}

export default ProductListFrontend;