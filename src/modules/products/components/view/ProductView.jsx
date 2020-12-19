import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Parser from 'html-react-parser';
import LoadingSpinner from '../../../master/components/loading/LoadingSpinner';
import { getProductDetailAction } from '../../redux/actions/ProductAction';
import moment from 'moment';
const currencyFormatter = require('currency-formatter');

const ProductView = ({ id }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.product.isLoading);
    const productDetail = useSelector((state) => state.product.productDetail);

    useEffect(() => {
        dispatch(getProductDetailAction(id));
    }, [dispatch]);

    return (
        <>
            {
                isLoading &&
                <LoadingSpinner text="Loading Product Details..." />
            }
            {
                typeof productDetail != 'undefined' && productDetail != null &&
                <div className="card">
                    <div className="row">
                        <div className="col-4">
                            <img src={productDetail.image_url} class="img img-product-view" alt="" />
                            <p class="card-text text-center">
                                <strong>Uploaded at: </strong> {moment(productDetail.created_at).format("Do MMM YYYY HH:mm")}
                                <br />
                                <>
                                    <strong>Uploaded by: </strong>
                                    <span className="badge badge-info">{productDetail.user.name}</span>
                                </>
                            </p>
                        </div>
                        <div className="col-8">
                            <div class="card-body">
                                <h2 class="card-title">{productDetail.title}</h2>
                                <hr />
                                <h3>
                                    <span className="product-price">
                                        {
                                            currencyFormatter.format(productDetail.price, { code: 'BDT' })
                                        }
                                    </span>
                                </h3>
                                <h5 className="mt-3">Details: </h5>
                                <div class="card card-body card-text p-4">
                                    {Parser(productDetail.description)}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    );
}

export default ProductView;