import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MainPage, ComicsPage } from "../pages";
import AppHeader from "../appHeader/AppHeader";
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
                        <Routes>
                            <Route path="/" element={<MainPage/>}/>
                            <Route path="/comics" element={<ComicsPage/>}/>
                        </Routes>
                    </main>
                </div>
            </Router>
        )
}

export default App;