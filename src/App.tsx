import './App.css';
import {Header} from "./layout/header/Header";

import {Skills} from "./layout/sections/skills/Skills";
import {Main} from "./layout/sections/main/Main";
import {Works} from "./layout/sections/works/Works";




function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
        </div>
    );
}

export default App;


