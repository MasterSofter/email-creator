import {Card , CardBody , CardHeader , Col , ListGroup , Row , Tab} from "react-bootstrap";
import React from "react";
import {
    BigImageElement ,
    EmailElement ,
    EmptyElement ,
    LetterData ,
    ParagraphElement ,
    TitleElement
} from "../../../../types/types";
import ParagraphInput from "../paragraph-input/paragraph-input";
import BigImageInput from "../big-image-input/big-image-input";
import TitleInput from "../title-input/title-input";

type Props = {
    letterData: LetterData;
    setLetterData:  React.Dispatch<React.SetStateAction<LetterData>>;
}

export default function EditorElement({letterData, setLetterData} : Props) : React.JSX.Element {
    return (
        <Card style={{height:"100%"}}>
            <CardHeader className="fw-bold h5 py-3">Редактор элемента письма</CardHeader>
            <CardBody>
                <Tab.Content>

                    {
                        letterData.elements.map((value : EmailElement, key:number) : React.JSX.Element => {
                            if(value instanceof (TitleElement))
                            {
                                return (
                                    <Tab.Pane eventKey={value.getElementKey()}>
                                        <TitleInput element={(value)} letterData={letterData} setLetterData={setLetterData}/>
                                    </Tab.Pane>
                                );
                            }
                            else if(value instanceof (BigImageElement))
                            {
                                return (
                                    <Tab.Pane eventKey={value.getElementKey()}>
                                        <BigImageInput element={(value)} letterData={letterData} setLetterData={setLetterData}/>
                                    </Tab.Pane>
                                );
                            }
                            else if(value instanceof (ParagraphElement))
                            {
                                return (
                                    <Tab.Pane eventKey={value.getElementKey()}>
                                        <ParagraphInput element={(value)} letterData={letterData} setLetterData={setLetterData}/>
                                    </Tab.Pane>
                                );
                            }
                            else
                            {
                                return (
                                    <Tab.Pane eventKey={value.getElementKey()}>Tab pane content 1


                                    </Tab.Pane>
                                );
                            }
                        })
                    }




                    <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
                </Tab.Content>
            </CardBody>
        </Card>
    );
}
