import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Layout from '../../master/layouts/Layout';
import ProductList from '../components/list/ProductList';

const ProductListContainer = () => {

    const products = useSelector((state) => state.product.productsPaginatedData);

    return (
        <Layout sidebar={true} dashboard={true}>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">
                    My Products {' '}
                    {
                        products != null && 
                        <span className="badge badge-info badge-pill">{products.total}</span>
                    }
                    
                </h1>
                <Link to="/products/create" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-plus-circle fa-sm text-white-50"></i> New Product
                </Link>
            </div>

            <ProductList />
        </Layout>
    );
}

export default ProductListContainer;