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
import {TypeElementInput} from "../type-element-input/type-element-input";

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
                        letterData.elements.map((value : EmailElement, index:number) : React.JSX.Element => {
                            if(value instanceof (TitleElement))
                            {
                                return (
                                    <Tab.Pane key={"tab-" + index} eventKey={value.getElementKey(index)}>
                                        <TypeElementInput letterData={letterData} setLetterData={setLetterData}/>
                                        <TitleInput element={(value)} letterData={letterData} setLetterData={setLetterData}/>
                                    </Tab.Pane>
                                );
                            }
                            else if(value instanceof (BigImageElement))
                            {
                                return (
                                    <Tab.Pane key={"tab-" + index} eventKey={value.getElementKey(index)}>
                                        <TypeElementInput letterData={letterData} setLetterData={setLetterData}/>
                                        <BigImageInput element={(value)} letterData={letterData} setLetterData={setLetterData}/>
                                    </Tab.Pane>
                                );
                            }
                            else if(value instanceof (ParagraphElement))
                            {
                                return (
                                    <Tab.Pane key={"tab-" + index} eventKey={value.getElementKey(index)}>
                                        <TypeElementInput letterData={letterData} setLetterData={setLetterData}/>
                                        <ParagraphInput element={(value)} letterData={letterData} setLetterData={setLetterData}/>
                                    </Tab.Pane>
                                );
                            }
                            else
                            {
                                return (
                                    <Tab.Pane key={"tab-" + index} eventKey={value.getElementKey(index)}>
                                        <TypeElementInput letterData={letterData} setLetterData={setLetterData}/>
                                    </Tab.Pane>
                                );
                            }
                        })
                    }
                </Tab.Content>
            </CardBody>
        </Card>
    );
}
