import {Card , CardBody , CardHeader , Tab} from "react-bootstrap";
import React from "react";

export default function EditorElement() : React.JSX.Element {
    return (
        <Card style={{height:"100%"}}>
            <CardHeader className="fw-bold h5 py-3">Редактор элемента письма</CardHeader>
            <CardBody>
                <Tab.Content>
                    <Tab.Pane eventKey={"item-" + 0}>Tab pane content 1</Tab.Pane>
                    <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
                </Tab.Content>
            </CardBody>
        </Card>
    );
}
