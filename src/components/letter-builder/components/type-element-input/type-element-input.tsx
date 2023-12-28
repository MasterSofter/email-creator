import React from "react";
import {FormGroup , FormLabel} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {BigImageElement , LetterData , ParagraphElement , TitleElement} from "../../../../types/types";

type Props = {
    letterData : LetterData;
    setLetterData:  React.Dispatch<React.SetStateAction<LetterData>>;
}

export function TypeElementInput({letterData, setLetterData} : Props) : React.JSX.Element {
    const types : string[] = ["Заголовок", "Параграф", "Баольшая картинка"];

    return (
        <FormGroup className={"mb-3"}>
            <FormLabel className={"fw-semibold"}>Тип элемента</FormLabel>
            <DropdownButton id="dropdown-basic-button" title={letterData.activeElement.getName()}>
                {
                    types.map((value, index) => {
                        return (
                            <Dropdown.Item
                                title={value}
                                key = {"dropDownItem-" + index}
                                onClick={(value) => {
                                    switch (value.currentTarget.title){
                                        case "Заголовок" :
                                        {
                                            let indexElement = letterData.elements.indexOf( letterData.activeElement);
                                            letterData.elements[indexElement] = new TitleElement();
                                            letterData.activeElement = letterData.elements[indexElement];
                                            break;
                                        }
                                        case "Параграф" :
                                        {
                                            let indexElement = letterData.elements.indexOf( letterData.activeElement);
                                            letterData.elements[indexElement] = new ParagraphElement();
                                            letterData.activeElement = letterData.elements[indexElement];
                                            break;
                                        }
                                        case "Баольшая картинка" :
                                        {
                                            let indexElement = letterData.elements.indexOf( letterData.activeElement);
                                            letterData.elements[indexElement] = new BigImageElement();
                                            letterData.activeElement = letterData.elements[indexElement];
                                            break;
                                        }
                                    }
                                    setLetterData({...letterData, activeElement: letterData.activeElement , elements: letterData.elements});
                                } }
                            >{value}</Dropdown.Item>
                        );
                    })
                }
            </DropdownButton>
        </FormGroup>
    );
}
