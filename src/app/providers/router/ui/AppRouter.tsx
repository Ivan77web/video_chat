import { Route, RouteProps, Routes } from "react-router"
import { routeConfig } from "../config/RouteConfig"
import { Suspense } from "react";

export const AppRouter = () => {
    const createRoutesFromChildren = (elem: RouteProps) => {
        const element = (
            <Suspense fallback={<p>Loading</p>}>
                {elem.element}
            </Suspense>
        );

        return <Route path={elem.path} element={element} />
    }

    return (
        <Routes>
            {
                Object.values(routeConfig).map(elem => createRoutesFromChildren(elem))
            }
        </Routes>
    )
}