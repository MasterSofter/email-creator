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
import EditorElement from "./components/letter-builder/components/editor-element/editor-element";
import LetterViewer from "./components/letter-viewer/letter-viewer";
import SaveButtons from "./components/letter-builder/components/save-buttons/save-buttons";

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
    const letter = useRef<HTMLDivElement>(null);
    const [letterData , setLetterData] = useState<Array<EmailElement>>(initialItems);
    const [selectedTab , setSelectedTab] = useState<EmailElement>(letterData[0]);
    const [is_builtLetter, set_is_BuiltLetter] = useState<boolean>(false);

    return (
        <Container style={ {width : "100vw" , maxWidth : "100wv"} } fluid>
            <Row style={ {height : "5vh" , width : "100vw"} }/>
            <Row style={ {height : "90vh" , width : "100vw" , alignItems : "top"} }>
                <Col style={ {height : "90vh" , width : "50vw"} }>
                    <Row style={ {height : "44vh" , width : "50vw"} }>
                        <Col style={ {height : "44vh" , width : "50vw"} }>
                            <EditorStructure letterData={ letterData } setLetterData={ setLetterData }
                                             selectedTab={ selectedTab } setSelectedTab={ setSelectedTab }/>
                        </Col>
                    </Row>
                    <Row style={ {height : "2vh" , width : "50vw"} }/>
                    <Row style={ {height : "38vh" , width : "50vw"} }>
                        <Col>
                            <EditorElement letterData={ letterData } setLetterData={ setLetterData }
                                           selectedTab={ selectedTab } setSelectedTab={ setSelectedTab }/>
                        </Col>
                    </Row>
                    <Row style={ {height : "2vh" , width : "50vw"} }/>
                    <Row style={ {height : "4vh" , width : "50vw"} }>
                        <Col className={ "text-end" }>
                            { (letter.current && <SaveButtons letter={ letter.current } set_is_BuiltLetter={set_is_BuiltLetter}/>) || (!letter.current &&
                                <p className={ "text-secondary" }>Внесите изменения, для того чтобы сохранить...</p>) }
                        </Col>
                    </Row>
                </Col>
                <Col style={ {height : "90wh" , width : "50vw"} } className={ "border rounded-3 overflow-hidden" }>
                    <div ref={ letter }>
                        <LetterViewer letterData={ letterData } is_builtLetter={is_builtLetter}/>
                    </div>
                </Col>
            </Row>
            <Row style={ {height : "5vh" , width : "100vw"} }/>
        </Container>
    );
}
