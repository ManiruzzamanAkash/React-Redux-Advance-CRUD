import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { getAuthAction, logoutAction } from '../../../auth/redux/actions/AuthAction';

const Navbar = (props) => {
    const { dashboard } = props;
    const dispatch = useDispatch();
    const history = useHistory();

    const isLoading = useSelector((state) => state.auth.isLoading);
    const loginMessage = useSelector((state) => state.auth.loginMessage);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const authUserData = useSelector((state) => state.auth.authUserData);

    const logout = () => {
        dispatch(logoutAction());
    }

    useEffect(() => {
        dispatch(getAuthAction());
        if (typeof loginMessage !== 'undefined' && loginMessage !== null && !isLoggedIn) {
            if (!isLoggedIn && loginMessage.length > 0) {
                history.push("/auth/login");
            }
        }
        const { pathname } = history.location;
        if(pathname !== '/auth/login' && pathname !== '/auth/sign-up' && pathname !== '/' && !isLoggedIn){
            if(typeof authUserData === 'undefined' || authUserData === null ){
                history.replace("/auth/login");
            }
        }
    }, [isLoggedIn, loginMessage, history, dispatch]);

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <ul className="navbar-nav">
                <li className="nav-item">
                    {
                        typeof dashboard !== 'undefined' && dashboard === true &&
                        <Link to="/" className="nav-link">
                            <span className="btn btn-info btn-sm">
                                <i className="fas fa-eye fa-fw"></i> Visit Site
                            </span>
                        </Link>
                    }
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow d-sm-none">
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                    placeholder="Search for..." aria-label="Search"
                                    aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                <li className="nav-item dropdown no-arrow">
                    {
                        dashboard === false &&
                        <Link to="/auth/login" className="nav-link">
                        <span className="btn btn-info btn-sm">
                                User Login <i className="fas fa-sign-out-alt fa-fw"></i>
                            </span>
                        </Link>
                    }
                </li>
                {
                    typeof authUserData !== 'undefined' && authUserData !== null &&
                    <>
                        <div className="topbar-divider d-none d-sm-block"></div>
                        <li className="nav-item dropdown no-arrow">
                            <button className="btn btn-link nav-link dropdown-toggle" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                                    {authUserData.name}
                                </span>
                                <img className="img-profile rounded-circle"
                                    src="/assets/img/user.svg" alt=""/>
                            </button>
                            {
                                typeof dashboard !== 'undefined' && dashboard === true &&
                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="userDropdown">
                                    <Link className="dropdown-item" to="/my-profile">
                                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Profile
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <button className="btn btn-link dropdown-item" onClick={() => logout()} data-toggle="modal" data-target="#logoutModal">
                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        {isLoading ? 'Logout...' : 'Logout'}
                                    </button>
                                </div>
                            }

                        </li>
                    </>

                }

            </ul>
        </nav>

    );
}

export default Navbar;