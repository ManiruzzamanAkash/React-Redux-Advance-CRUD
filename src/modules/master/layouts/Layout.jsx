import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import { Helmet } from "react-helmet"


const Layout = (props) => {
    const { dashboard, sidebar, children, title } = props;
    const baseTitle = 'React CRUD Application'
    const siteTitle = (typeof title === 'undefined' || title === null ) ? baseTitle : title+' | '+baseTitle
    const metaDescription = "React CRUD Application using React, Redux, Redux-thunk, Jwt Auth";

    return (
        <div id="wrapper">
            <Helmet>
                <title>{siteTitle}</title>
                <meta name="description" content={metaDescription} />
            </Helmet>

            {
                typeof sidebar !== 'undefined' && sidebar === true &&
                <Sidebar />
            }

            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar dashboard={dashboard} />
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
                {/* <!-- End of Main Content --> */}

                <Footer />
            </div>
        </div>
    );
}

export default Layout;