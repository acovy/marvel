import { useState } from "react";
import { Helmet } from "react-helmet";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {
     // инициализация состояния компонента , меняется , для хранения данных
    const [selectedChar, setChar] = useState(null);

     // обработчик событий который меняет состояние функцию сет стейт по событию
    const onCharSelected = (id) => {
        setChar(id);
    }
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel information</title>
            </Helmet>
            <ErrorBoundary>
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
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;