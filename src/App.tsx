import { Link, Route, Routes } from "react-router-dom"
import { Counter } from "./components/Counter"
import { MainPage } from "./pages/MainPage"
import { AboutPage } from "./pages/AboutPage"
import { Suspense } from "react"

export const App = () => {
    return (
        <div>
            <Link to={'about'}>About</Link>
            <Link to={''}>Main</Link>

            <Suspense fallback={<p>Loading</p>}>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}