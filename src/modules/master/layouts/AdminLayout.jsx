import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar'

const AdminLayout = (props) => {
    return (
        <div id="wrapper">
            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    <div className="container-fluid">
                        {props.children}
                    </div>
                </div>
                {/* <!-- End of Main Content --> */}

                <Footer />
            </div>
        </div>
    );
}

export default AdminLayout;