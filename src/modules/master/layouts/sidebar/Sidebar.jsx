import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    {/* <i className="fas fa-laugh-wink"></i> */}
                    <img src="/logo192.png" style={{ width: 40 }}/>
                </div>
                <div className="sidebar-brand-text mx-3">
                    React CRUD
                </div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Menus
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#productsCollapse"
                    aria-expanded="true" aria-controls="productsCollapse">
                    <i class="far fa-list-alt"></i> {" "}
                    <span>Products</span>
                </a>
                <div id="productsCollapse" className="collapse in show" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Manage Products:</h6>
                        <Link className="collapse-item" to="/products">
                            <i class="far fa-list-alt"></i> {" "} Product List
                        </Link>

                        <Link className="collapse-item" to="/products/create">
                            <i class="fas fa-plus-circle"></i> {" "} New Product
                        </Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Link</span>
                </a>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    );
}

export default Sidebar;