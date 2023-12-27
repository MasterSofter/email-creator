import React , {useEffect , useRef , useState} from 'react';

import {
    EmailElement ,
    LetterData ,
    TitleElement ,
    BigImageElement ,
    ParagraphElement , EmptyElement
} from "./types/types";
import {Tab, Col , Container , Row} from "react-bootstrap";


import EditorStructure from "./components/letter-builder/components/editor-structure/editor-structure";
import EditorElement from "./components/letter-builder/components/editor-element/editor-element";
import LetterViewer from "./components/letter-viewer/letter-viewer";


// Подключение стиилей
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-quill/dist/quill.snow.css';


function App(): JSX.Element {

    const letter = useRef<null | HTMLDivElement>(null);
    const [letterData, setLetterData] = useState<LetterData>({
        elements : Array<EmailElement>(
            new BigImageElement('/images/hero.png',0),
            new TitleElement('Привет ✨',1),
            new ParagraphElement('Как создавать шедевры с помощью Midjorney, вы узнаете в другом месте. ' +
                'А мы расскажем, с чего вообще началось генеративное искусство и кто научил нейросети «рисовать».',2)),
        activeElement: new EmptyElement(-1)
    });

    return (
        <Container style={{width:"100vw", maxWidth:"100wv"}} fluid>
            <Row   style={{height: "5vh", width: "100vw"}}/>
            <Row   style={{height: "90vh", width: "100vw" , alignItems: "top"}}>
                <Col style={{height:"90vh", width:"50vw"}}>
                    <Tab.Container id="list-group-tabs-example" >
                        <Row style={{height:"44vh", width:"50vw"}}>
                            <Col style={{height:"44vh", width:"50vw"}}>
                                <EditorStructure letterData={letterData} setLetterData={setLetterData}/>
                            </Col>
                        </Row>
                        <Row style={ {height : "2vh" , width : "50vw"} }/>
                        <Row style={{height:"44vh", width:"50vw"}}>
                            <Col>
                                <EditorElement/>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
                <Col style={{height:"90wh", width:"50vw"}} className={"border rounded-3 overflow-hidden"}>
                    <div ref={letter} >

                            <LetterViewer letterData={letterData}/>

                    </div>
                </Col>
            </Row>
            <Row style={{height: "5vh", width: "100vw"}}/>
        </Container>
    );
}

export default App;
