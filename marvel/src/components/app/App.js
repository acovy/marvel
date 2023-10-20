import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from "../comicsList/ComicsList";

import decoration from '../../resources/img/vision.png';
// все что внутри него до метода рендер умещает в себе логику и вычисления 
const App = () => {
    // инициализация состояния компонента , меняется , для хранения данных
    const [selectedChar, setChar] = useState(null);

    // обработчик событий который меняет состояние функцию сет стейт по событию
    const onCharSelected = (id) => {
        setChar(id);
    }
        // тут джсикс который возвращает разметку с логикой
        // отображаться на странице будет все что в скобках ретерна 
        return (
            <div className="app">
                {/* шапка страницы */}
                <AppHeader/> 
                <main>
                    {/* <ErrorBoundary>
                        <RandomChar/> 
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary> 
                            <CharList onCharSelected={onCharSelected}/>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CharInfo charId={selectedChar}/>
                        </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/> */}
                    <ComicsList/>
                </main>
            </div>
        )
}

export default App;