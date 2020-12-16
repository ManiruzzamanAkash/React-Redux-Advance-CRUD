import React from 'react'
import Layout from '../layouts/Layout';
const DefaultContainer = () => {
    return ( 
        <>
            <Layout sidebar={false} dashboard={false}>
                <h2>Home Page</h2>
            </Layout>
        </>
     );
}
 
export default DefaultContainer;