import LoginContainer from "../modules/auth/views/LoginContainer";
import RegisterContainer from "../modules/auth/views/RegisterContainer";
import DashboardContainer from "../modules/master/views/DashboardContainer";
import DefaultContainer from "../modules/master/views/DefaultContainer";

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
    }
];

export default routes;