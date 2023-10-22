import {lazy, Susp, Suspense} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const SingleComicPage = lazy(() => import("../pages/SingleComicPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
// все что внутри него до метода рендер умещает в себе логику и вычисления 
const App = () => {
        // тут джсикс который возвращает разметку с логикой
        // отображаться на странице будет все что в скобках ретерна 
        return (
            <Router>
                <div className="app">
                {/* шапка страницы */}
                    <AppHeader/>
                    <main>
                        <Suspense fallback={<Spinner/>}>
                            <Routes>
                                <Route path="/" element={<MainPage/>}/>
                                <Route path="/comics" element={<ComicsPage/>}/>
                                <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
                                <Route path="*" element={<Page404/>}/>
                            </Routes>
                        </Suspense>
                    </main>
                </div>
            </Router>
        )
}

export default App;