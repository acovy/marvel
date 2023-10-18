import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

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
                    <ErrorBoundary>
                        <RandomChar/> {/* шапка страницы */}
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary> 
                            {/* получаем айди */}
                            <CharList onCharSelected={onCharSelected}/>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            {/* прокидыаем айди */}
                            <CharInfo charId={selectedChar}/>
                        </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
}

export default App;