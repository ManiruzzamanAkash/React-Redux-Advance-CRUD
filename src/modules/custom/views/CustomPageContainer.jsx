import React from 'react';
import Layout from '../../master/layouts/Layout';

const CustomPageContainer = () => {
    return (
        <Layout sidebar={true} dashboard={true}>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Custom Page</h1>
            </div>
            <hr />
            <div>
                <p>You can add your logic here...</p>
            </div>
        </Layout>
    );
}

export default CustomPageContainer;