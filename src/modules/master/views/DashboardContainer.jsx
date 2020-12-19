import React, { useEffect } from 'react';
import Layout from '../layouts/Layout';
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from '../../products/redux/actions/ProductAction';
import { Link } from 'react-router-dom';

const DashboardContainer = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.productsPaginatedData);

    useEffect(() => {
        dispatch(getProductsAction(1));
    }, [dispatch]);

    return (
        <Layout sidebar={true} dashboard={true}>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            <div className="row">
                <div className="col-xl-3 col-md-4 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Total Products
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {products != null && products.total != null ? products.total : 0} Pcs
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calculator fa-3x text-gray-300"></i>
                                </div>
                                <div className="col-12 mt-3">
                                    <Link to="/products" className="btn btn-sm btn-outline-info">
                                        Manage Products <i className="fa fa-cog"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Create New
                                    </div>
                                    <div className="col-12 mt-3">
                                        <Link to="/products/create" className="btn btn-sm btn-outline-info">
                                            Add Product <i className="fa fa-plus-circle"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-shopping-cart fa-3x text-gray-300" ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default DashboardContainer;