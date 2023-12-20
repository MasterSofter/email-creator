import React, {useRef, useState} from 'react';

import LetterViewer from "./components/letter-viewer/letter-viewer";
import LetterBuilder from "./components/letter-builder/letter-builder";
import {LetterData} from "./types/types";
import {Col, Container, Row} from "react-bootstrap";

// Подключение стиилей
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-quill/dist/quill.snow.css';

function App(): JSX.Element {

    const letter = useRef<null | HTMLDivElement>(null);
    const [letterData, setLetterData] = useState<LetterData>({
        title: 'Привет ✨',
        image: '/images/hero.png',
        body:  'Как создавать шедевры с помощью Midjorney, вы узнаете в другом месте. ' +
               'А мы расскажем, с чего вообще началось генеративное искусство и кто научил нейросети «рисовать».'
    });
    return (
        <Container className="h-100" fluid>
            <Row className="py-5 my-5">
                <Col className="bg-transparent h-100 w-100">
                    <LetterBuilder letter={letter} letterData={letterData} setLetterData={setLetterData}/>
                </Col>
                <Col>
                    <div ref={letter} className={"border rounded-3 overflow-hidden"}>
                        <LetterViewer letterData={letterData}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
