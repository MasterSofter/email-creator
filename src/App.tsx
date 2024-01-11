import React , {useRef , useState} from 'react';
import {
    BigImageElement,
    EmailElement,
    InfoItemSignUpElement,
    ParagraphElement,
    TitleElement
} from "./types/types";
import {Container, Row} from "react-bootstrap";
import EditorStructure from "./components/letter-builder/components/editor-structure/editor-structure";
import LetterViewer from "./components/letter-viewer/letter-viewer";
import NavBarHead from "./components/nav-bar-head/nav-bar-head";

// Подключение стиилей
import './scss/style.scss';

const initialItems = [
    new BigImageElement() ,
    new TitleElement() ,
    new ParagraphElement(),
    new InfoItemSignUpElement()
];

export default function App(): React.JSX.Element {
    const letter = useRef<null | HTMLDivElement>(null);
    const [letterData , setLetterData] = useState<Array<EmailElement>>(initialItems);
    const [is_builtLetter, set_is_BuiltLetter] = useState<boolean>(false);

    return (
        <Container style={ {height : "100vh"  , width : "100vw" , maxWidth : "100wv"} } fluid>
            <Row style={{height : "5vh"}}>
                <NavBarHead is_builtLetter={is_builtLetter}/>
            </Row>
            <Row className={"pt-4"} style={{height : "92vh"}}>
                <div className="col-editor">
                    <EditorStructure letter={letter.current} set_is_BuiltLetter={set_is_BuiltLetter} letterData={ letterData } setLetterData={ setLetterData }/>
                </div>
                <div className="col-browser">
                    <figure className="device-browser">
                        <div className="device-browser-header">
                            <div className="device-browser-header-btn-list">
                                <span className="device-browser-header-btn-list-btn"/>
                                <span className="device-browser-header-btn-list-btn"/>
                                <span className="device-browser-header-btn-list-btn"/>
                            </div>
                            <div className="device-browser-header-browser-bar">mail.mai.ru</div>
                        </div>
                        <div className="device-browser-frame d-flex flex-row text-center">
                            <div className="device-browser-frame-left-col">
                                <div className="py-1"/>
                                <div className="device-browser-frame-left-col-bar py-5"/>
                                <div className="py-3"/>
                                <div className="device-browser-frame-left-col-bar"/>
                                <div className="device-browser-frame-left-col-bar"/>
                                <div className="device-browser-frame-left-col-bar"/>
                                <div className="device-browser-frame-left-col-bar"/>
                                <div className="device-browser-frame-left-col-bar"/>
                                <div className="device-browser-frame-left-col-bar"/>
                                <div className="device-browser-frame-left-col-bar"/>
                            </div>
                            <div className={"device-browser-frame-middle-col d-flex flex-column"}>
                                <div className="device-browser-frame-middle-col-top">
                                    <div className="device-browser-frame-middle-col-top-bar"/>
                                </div>
                                <div ref={letter} className="device-browser-frame-middle-col-letter">
                                    <LetterViewer letterData={ letterData } is_builtLetter={is_builtLetter}/>
                                </div>
                            </div>
                            <div className="device-browser-frame-right-col"/>
                        </div>
                    </figure>
                </div>
            </Row>
        </Container>
    );
}
