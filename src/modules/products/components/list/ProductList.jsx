import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from '../../../master/components/loading/LoadingSpinner';
import { getProductsAction } from '../../redux/actions/ProductAction';
import ProductShortInfo from './ProductShortInfo';

const ProductList = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.product.isLoading);
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        dispatch(getProductsAction());
    }, [dispatch]);

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
                                <th>Sl</th>
                                <th className='td-product-title'>Product</th>
                                <th>Price</th>
                                <th>Description</th>
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
                </div>
            }
        </>
    );
}

export default ProductList;