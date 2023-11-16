import { RouteProps } from 'react-router-dom';
import { MainPage } from "../../../../pages/MainPage";
import { AboutPage } from "../../../../pages/AboutPage";
import {
    AppRoutes,
    getPathMain,
    getPathAbout,
} from '../../../../shared/const/router';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getPathMain(),
        element: <MainPage />,
    },

    [AppRoutes.ABOUT]: {
        path: getPathAbout(),
        element: <AboutPage />,
    }
};
