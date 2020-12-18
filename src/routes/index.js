import LoginContainer from "../modules/auth/views/LoginContainer";
import RegisterContainer from "../modules/auth/views/RegisterContainer";
import DashboardContainer from "../modules/master/views/DashboardContainer";
import DefaultContainer from "../modules/master/views/DefaultContainer";
import ProductCreateContainer from "../modules/products/views/ProductCreateContainer";
import ProductEditContainer from "../modules/products/views/ProductEditContainer";
import ProductListContainer from "../modules/products/views/ProductListContainer";
import ProductViewContainer from "../modules/products/views/ProductViewContainer";

const routes = [{
        path: "/auth/login",
        name: "Login Component",
        component: LoginContainer,
        exact: true,
    },
    {
        path: "/auth/sign-up",
        name: "Register Component",
        component: RegisterContainer,
        exact: true,
    },
    {
        path: "/dashboard",
        name: "Dashboard Component",
        component: DashboardContainer,
        exact: true,
    },
    {
        path: "/",
        name: "Default Home Component",
        component: DefaultContainer,
        exact: true,
    },

    // Product Module
    {
        path: "/products",
        name: "Product List",
        component: ProductListContainer,
        exact: true,
    },
    {
        path: "/products/create",
        name: "Product Create",
        component: ProductCreateContainer,
        exact: true,
    },
    {
        path: "/products/view/:id",
        name: "Product View",
        component: ProductViewContainer,
        exact: true,
    },
    {
        path: "/products/edit/:id",
        name: "Product Edit",
        component: ProductEditContainer,
        exact: true,
    }
];

export default routes;