import React from "react";
import {Col , Row , Card , Tab , CardBody , CardHeader , ListGroup , Button} from "react-bootstrap";
import ListEmailElements from "./components/list-email-elements/list-email-elements";
import {LetterData} from "../../../../types/types";


type Props = {
    letterData : LetterData;
    setLetterData:  React.Dispatch<React.SetStateAction<LetterData>>;
}


export default function EditorStructure({letterData, setLetterData} : Props) : React.JSX.Element {
    return (
        <Card style={{height:"44vh"}}>
            <CardHeader style={{height:"10%"}} className="fw-bold h5">Структура письма</CardHeader>
            <CardBody style={{height:"90%", maxHeight:"90%"}}>
                <Row style={{height:"80%", maxHeight:"80%"}} className={" d-flex flex-row justify-content-between"}>
                    <Col style={{height:"100%", maxHeight:"100%"}}>
                        <ListEmailElements letterData = {letterData} setLetterData={setLetterData}/>
                    </Col>
                </Row>
                <Row  style={{height:"20%", maxHeight:"20%", textAlign:"end"}} className={"d-flex flex-row"}>
                    <Col className={"my-auto"} style={{width:"100%"}}>
                        <Button
                            variant="primary"
                            size="lg"
                            style={{marginRight:"2%"}}
                            onClick={() => {}}
                        >
                            Удалить
                        </Button>
                        <Button
                            variant="outline-primary"
                            size="lg"
                            onClick={() => {}}
                        >
                            Добавить...
                        </Button>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}
