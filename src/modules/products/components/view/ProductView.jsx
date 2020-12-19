import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Parser from 'html-react-parser';
import LoadingSpinner from '../../../master/components/loading/LoadingSpinner';
import { getProductDetailAction } from '../../redux/actions/ProductAction';
import moment from 'moment';
import { Link } from 'react-router-dom';
const currencyFormatter = require('currency-formatter');

const ProductView = ({ id }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.product.isLoading);
    const productDetail = useSelector((state) => state.product.productDetail);

    useEffect(() => {
        dispatch(getProductDetailAction(id));
    }, [dispatch, id]);

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
                            <img src={productDetail.image_url === null ? '/assets/img/products/no-image.png' : productDetail.image_url} className="img img-product-view" alt="" />
                            <p className="card-text text-center">
                                <strong>Uploaded at: </strong> {moment(productDetail.created_at).format("Do MMM YYYY HH:mm")}
                                <br />
                                <>
                                    <strong>Uploaded by: </strong>
                                    <span className="badge badge-info">{productDetail.user.name}</span>
                                </>
                            </p>
                            <div className="text-center mb-2">
                                <Link to={`/products/edit/${id}`} className="btn btn-sm btn-primary shadow-sm">
                                    <i className="fas fa-edit fa-sm text-white-50"></i> Edit Now
                            </Link>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h2 className="card-title">{productDetail.title}</h2>
                                <hr />
                                <h3>
                                    <span className="product-price">
                                        {
                                            currencyFormatter.format(productDetail.price, { code: 'BDT' })
                                        }
                                    </span>
                                </h3>
                                <h5 className="mt-3">Details: </h5>
                                <div className="card card-body card-text p-4">
                                    {
                                        typeof productDetail.description != 'undefined' && productDetail.description !== null ?
                                            Parser(productDetail.description) : '...'
                                    }
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