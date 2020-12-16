import React from 'react';
import AdminLayout from '../layouts/AdminLayout';
const DashboardContainer = () => {
    return (
        <AdminLayout>
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
                                        10 Pcs
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calculator fa-3x text-gray-300"></i>
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
                                        Total Value
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        10000 ৳
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-money-check-alt fa-3x text-gray-300" ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default DashboardContainer;