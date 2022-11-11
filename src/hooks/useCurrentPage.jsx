import {useLocation} from "react-router-dom";
import {routes} from "../routes.js";

export const useCurrentPage = () => {
    const {pathname} = useLocation();
    const isHomePage = pathname === routes.HOME;
    return { isHomePage };
}