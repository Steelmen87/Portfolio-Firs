import './App.css';
import {Header} from "./project20/layout/header/Header";
import {Main} from "./project20/layout/sections/main/Main";
import {Skills} from "./project20/layout/sections/skills/Skills";
import {Works} from "./project20/layout/sections/works/Works";
import {Contacts} from "./project20/layout/sections/contacts/Contacts";
import {Footer} from "./project20/layout/footer/Footer";


function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </>
    );
}

export default App;
