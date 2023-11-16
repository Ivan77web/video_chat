import { Link, Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage"
import { AboutPage } from "../pages/AboutPage"
import { Suspense } from "react"
import { AppRouter } from "./providers/router"

export const App = () => {
    return (
        <div>
            <Link to={'about'}>About</Link>
            <Link to={''}>Main</Link>

            <AppRouter />
        </div>
    )
}