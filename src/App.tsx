import React , {useRef , useState} from 'react';
import {
    BigImageElement,
    EmailElement,
    InfoItemSignUpElement,
    ParagraphElement,
    TitleElement
} from "./types/types";
import {Col , Container , Row} from "react-bootstrap";
import EditorStructure from "./components/letter-builder/components/editor-structure/editor-structure";
import LetterViewer from "./components/letter-viewer/letter-viewer";

// Подключение стиилей
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-quill/dist/quill.snow.css';
import "./App.css"

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
            <Row className={"h-100 py-5"}>
                <Col className={"col-5"} style={{maxHeight : "100%", boxSizing: "border-box"}}>
                    <EditorStructure letter={letter.current} set_is_BuiltLetter={set_is_BuiltLetter} letterData={ letterData } setLetterData={ setLetterData }/>
                </Col>
                <Col style={ {maxHeight : "100%", boxSizing: "border-box"} } className={ "border rounded-3 overflow-hidden" }>
                    <div ref={ letter }>
                        <LetterViewer letterData={ letterData } is_builtLetter={is_builtLetter}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
