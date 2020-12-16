import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar'

const Layout = (props) => {
    const { dashboard, sidebar, children } = props;

    return (
        <div id="wrapper">
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