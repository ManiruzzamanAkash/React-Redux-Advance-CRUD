import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../master/layouts/Layout';

const ProductEditContainer = () => {
    return (
        <Layout sidebar={true} dashboard={true}>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Product Edit</h1>

                <Link to="/products" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-arrow-left fa-sm text-white-50"></i> Product List
                </Link>
            </div>
           
        </Layout>
    );
}

export default ProductEditContainer;