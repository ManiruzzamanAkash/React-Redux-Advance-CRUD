import React from 'react'
import ProductListFrontend from '../../products/components/list/ProductListFrontend';
import Layout from '../layouts/Layout';

const DefaultContainer = () => {
    return ( 
        <>
            <Layout sidebar={false} dashboard={false} title="Home Page Public">
                <ProductListFrontend />
            </Layout>
        </>
     );
}
 
export default DefaultContainer;